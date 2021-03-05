export default `
// Indices for the Control SAB.
const CONTROL = {
  'WRITE_INDEX': 0,
  'FRAMES_AVAILABLE': 1,
};
let ws = undefined
let state = {
  isContextStarted: false,
  sourceSampleRate: undefined,
  targetSampleRate: undefined,
  resampleRatio: 1,
  buffer: new Float32Array(0),
  filter: undefined,
  controlSAB: undefined,
  dataSAB: undefined
}

function initializeWebsocket(url, protocol) {
  ws = new WebSocket(url, protocol)

  return new Promise((resolve, reject) => {
    const errhandler = () => {
      ws.removeEventListener('close', errhandler)
      ws.removeEventListener('error', errhandler)
      ws.removeEventListener('open', openhandler)

      reject(Error('Connection failed'))
    }

    const openhandler = () => {
      ws.removeEventListener('close', errhandler)
      ws.removeEventListener('error', errhandler)
      ws.removeEventListener('open', openhandler)

      resolve(ws)
    }

    ws.addEventListener('close', errhandler)
    ws.addEventListener('error', errhandler)
    ws.addEventListener('open', openhandler)
  })
}

function closeWebsocket(code, message) {
  if (ws === undefined) {
    throw Error('Websocket is not open')
  }

  ws.removeEventListener('message', onWebsocketMessage)
  ws.removeEventListener('error', onWebsocketError)
  ws.removeEventListener('close', onWebsocketClose)

  ws.close(code, message)
  ws = undefined
}

function onWebsocketClose(event) {
  ws = undefined
}

function onWebsocketError(_event) {
  onWebsocketClose(1000, 'Client disconnecting due to an error')
}

function onWebsocketMessage(event) {
  let response
  try {
    response = JSON.parse(event.data)
  } catch (e) {
    console.error('[SpeechlyClient] Error parsing response from the server:', e)
    return
  }

  self.postMessage(response)
}

function float32ToInt16(buffer) {
  const buf = new Int16Array(buffer.length)

  for (let l = 0; l < buffer.length; l++) {
    buf[l] = buffer[l] * (buffer[l] < 0 ? 0x8000 : 0x7fff)
  }

  return buf
}

self.onmessage = function(e) {
  switch (e.data.type) {
    case 'INIT':
      if (ws === undefined) {
        initializeWebsocket(e.data.apiUrl, e.data.authToken).then(function() {
          self.postMessage({
              type: 'WEBSOCKET_OPEN'
          })
          ws.addEventListener('message', onWebsocketMessage)
          ws.addEventListener('error', onWebsocketError)
          ws.addEventListener('close', onWebsocketClose)
        })
        state.sourceSampleRate = e.data.sourceSampleRate
        state.targetSampleRate = e.data.targetSampleRate
        state.resampleRatio = e.data.sourceSampleRate / e.data.targetSampleRate
        if (state.resampleRatio > 1) {
          state.filter = generateFilter(e.data.sourceSampleRate, e.data.targetSampleRate, 127)
        }
      }
      break
    case 'SET_SHARED_ARRAY_BUFFERS':
      state.controlSAB = new Int32Array(e.data.controlSAB);
      state.dataSAB = new Float32Array(e.data.dataSAB);
      setInterval(sendAudioFromSAB, 4)
      break
    case 'CLOSE':
      if (ws !== undefined) {
        closeWebsocket(e.data.code, e.data.message)
      }
      break
    case 'START_CONTEXT':
      if (ws !== undefined && !state.isContextStarted) {
        state.isContextStarted = true
        const StartEventJSON = JSON.stringify({ event: 'start' })
        ws.send(StartEventJSON)
      } else {
        console.log('can not start context')
      }
      break
    case 'STOP_CONTEXT':
      if (ws !== undefined && state.isContextStarted) {
        state.isContextStarted = false
        const StopEventJSON = JSON.stringify({ event: 'stop' })
        ws.send(StopEventJSON)
      }
      break
    case 'AUDIO':
      if (ws !== undefined && state.isContextStarted) {
        if (state.resampleRatio > 1) {
          // Downsampling
          ws.send(downsample(e.data.payload))
        } else {
          ws.send(float32ToInt16(e.data.payload))
        }
      }
      break
    default:
      console.log('WORKER', e)
  }
}

function sendAudioFromSAB() {
  if (state.isContextStarted) {
    const data = state.dataSAB.subarray(0, state.controlSAB[CONTROL.FRAMES_AVAILABLE]);
    state.controlSAB[CONTROL.FRAMES_AVAILABLE] = 0;
    state.controlSAB[CONTROL.WRITE_INDEX] = 0;
    if (state.resampleRatio > 1) {
      ws.send(downsample(data))
    } else {
      ws.send(float32ToInt16(data))
    }
    
  }
}

function downsample(input) {
  const inputBuffer = new Float32Array(state.buffer.length + input.length)
  inputBuffer.set(state.buffer, 0)
  inputBuffer.set(input, state.buffer.length)

  const outputLength = Math.ceil((inputBuffer.length - state.filter.length) / state.resampleRatio)
  const outputBuffer = new Int16Array(outputLength)

  for (let i = 0; i < outputLength; i++) {
    const offset = Math.round(state.resampleRatio * i)
    let val = 0.0

    for (let j = 0; j < state.filter.length; j++) {
      val += inputBuffer[offset + j] * state.filter[j]
    }

    outputBuffer[i] = val * (val < 0 ? 0x8000 : 0x7fff)
  }

  const remainingOffset = Math.round(state.resampleRatio * outputLength)
  if (remainingOffset < inputBuffer.length) {
    state.buffer = inputBuffer.subarray(remainingOffset)
  } else {
    state.buffer = emptyBuffer
  }

  return outputBuffer
}

function generateFilter(sourceSampleRate, targetSampleRate, length) {
  if (length % 2 === 0) {
    throw Error('Filter length must be odd')
  }

  const cutoff = targetSampleRate / 2
  const filter = new Float32Array(length)
  let sum = 0

  for (let i = 0; i < length; i++) {
    const x = sinc(((2 * cutoff) / sourceSampleRate) * (i - (length - 1) / 2))

    sum += x
    filter[i] = x
  }

  for (let i = 0; i < length; i++) {
    filter[i] = filter[i] / sum
  }

  return filter
}

function sinc(x) {
  if (x === 0.0) {
    return 1.0
  }

  const piX = Math.PI * x
  return Math.sin(piX) / piX
}
`