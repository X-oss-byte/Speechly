import { Microphone } from '../microphone'
import { APIClient } from '../websocket'
import { Storage } from '../storage'
import { Client } from './client'
import { ClientState, StateChangeCallback } from './types'

type StateChangeCallbackMock = StateChangeCallback & jest.Mock<any, any>

type APIClientMock = APIClient & {
  startContext: jest.Mock<Promise<string>, []>
  stopContext: jest.Mock<Promise<string>, []>
}

let microphone: Microphone
let apiClient: APIClientMock
let storage: Storage
let client: Client
let stateChangeCb: StateChangeCallbackMock

describe('Speechly Client', function () {
  beforeEach(async function() {
    microphone = {
      onAudio: jest.fn(),
      initialize: jest.fn(),
      close: jest.fn(),
      mute: jest.fn(() => Date.now()),
      unmute: jest.fn(() => Date.now()),
    }

    apiClient = {
      onResponse: jest.fn(),
      onClose: jest.fn(),
      initialize: jest.fn(),
      close: jest.fn(),
      startContext: jest.fn(),
      stopContext: jest.fn(async (): Promise<string> => new Promise(resolve => resolve(Date.now().toString()))),
      sendAudio: jest.fn(),
    }

    storage = {
      initialize: jest.fn(),
      close: jest.fn(),
      get: jest.fn(),
      set: jest.fn(),
      getOrSet: jest.fn(),
    }

    client = new Client({
      appId: 'xxxx-xxxx-xxxx',
      language: 'en-US',
      microphone,
      apiClient,
      storage,
      debug: true,
    })

    stateChangeCb = jest.fn()
    client.onStateChange(stateChangeCb)
    await client.initialize()
  })

  it('set state Connecting and Connected during initialization', async function () {
    expect(stateChangeCb.mock.calls.length).toBe(2)
    expect(stateChangeCb.mock.calls[0][0]).toBe(ClientState.Connecting)
    expect(stateChangeCb.mock.calls[1][0]).toBe(ClientState.Connected)
  })

  it('delay stop context after call for 250 ms', async function () {
    await client.startContext()
    expect(apiClient.startContext.mock.calls.length).toBe(1)
    expect(stateChangeCb.mock.calls[2][0]).toBe(ClientState.Starting)
    expect(stateChangeCb.mock.calls[3][0]).toBe(ClientState.Recording)
    const callStopTime = Date.now()
    const stopPromise = client.stopContext()
    const realStopTime = await stopPromise
    expect(apiClient.stopContext.mock.calls.length).toBe(1)
    expect(parseInt(realStopTime) - callStopTime).toBeGreaterThanOrEqual(250)
  })

  it('cancel delay stop context on start context', async function () {
    await client.startContext()
    const callStopTime = Date.now()
    const stopPromise = client.stopContext()
    await client.startContext()
    const realStopTime = await stopPromise
    expect(apiClient.stopContext.mock.calls.length).toBe(1)
    expect(parseInt(realStopTime) - callStopTime).toBeLessThan(250)
  })
})
