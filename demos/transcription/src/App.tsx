import { useEffect, useState, useRef } from 'react';
import { BrowserMicrophone } from '@speechly/browser-client';
import { DecoderState, SpeechSegment, useSpeechContext } from '@speechly/react-client';
import useStateRef from 'react-usestateref';
import clsx from 'clsx';
import formatDuration from 'format-duration';
import { Waveform } from './Waveform';
import { FileInput } from './FileInput';
import { ReactComponent as Mic } from './assets/mic.svg';
import { ReactComponent as AudioFile } from './assets/audio-file.svg';
import { ReactComponent as Empty } from './assets/empty.svg';
import sample1 from './assets/podcast.wav';
import sample2 from './assets/ndgt.wav';
import './App.css';

export interface Classification {
  label: string;
  score: number;
}

interface FileOrUrl {
  name: string;
  file?: File;
  src?: string;
}

export interface AudioRegionLabels {
  index: number;
  start: number;
  end: number;
}

const ourMic = new BrowserMicrophone();
let recorder: MediaRecorder;

function App() {
  const { client, segment, clientState, listening, start, stop } = useSpeechContext();
  const [speechSegments, setSpeechSegments, speechSegmentsRef] = useStateRef<SpeechSegment[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<number | undefined>();
  const [files, setFiles] = useState<FileOrUrl[]>([
    { name: 'Speechly Podcast: Adam Cheyer', src: sample1 },
    { name: "Neil deGrasse Tyson: Future '38", src: sample2 },
  ]);
  const [audioSource, setAudioSource] = useState<string>();
  const [recData, setRecData] = useState<Blob>();
  const [showEmptyState, setShowEmptyState] = useState(true);
  const [counter, setCounter] = useState(0);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const segmentEndRef: { current: HTMLDivElement | null } = useRef(null);
  const mainRef: { current: HTMLDivElement | null } = useRef(null);

  useEffect(() => {
    return () => stopCounter();
  }, []);

  useEffect(() => {
    if (recData) {
      const src = URL.createObjectURL(recData);
      setAudioSource(src);
      const timeStr = new Date().toISOString().split('T').join(' at ').substring(0, 22);
      const name = `Recording ${timeStr}`;
      setFiles((current) => [...current, { name, src }]);
      setRecData(undefined);
    }
  }, [recData]);

  useEffect(() => {
    const scrollToSegmentsEnd = () => segmentEndRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' });

    const updateOrAddSegment = (ss: SpeechSegment) => {
      setSpeechSegments((current) => {
        const newArray = [...current];
        const idx = newArray.findIndex((item) => item.contextId === ss.contextId && item.id === ss.id);
        if (idx > -1) {
          newArray[idx] = ss;
        } else {
          newArray.push(ss);
        }
        return newArray;
      });
    };

    if (segment) {
      setShowEmptyState(false);
      updateOrAddSegment(segment);
      scrollToSegmentsEnd();
      if (segment.isFinal) {
        updateOrAddSegment(segment);
        scrollToSegmentsEnd();
      }
    }
    // eslint-disable-next-line
  }, [segment]);

  const handleFileAdd = async (file: File) => {
    setFiles((current) => [...current, { name: file.name, file }]);
  };

  const handleSelectFile = async (i: number) => {
    if (selectedFileId === i) return;
    if (clientState === DecoderState.Active) return;
    setSelectedFileId(i);
    setAudioSource(undefined);
    setSpeechSegments([]);

    const fileSrc = files[i].src;
    if (fileSrc) {
      const response = await fetch(fileSrc, {
        headers: {
          'Content-Type': 'audio/mpeg;audio/wav',
          Accept: 'audio/mpeg;audio/wav',
        },
        cache: 'no-store',
      });
      if (!response.ok) {
        console.error("Could't find file");
      }
      setAudioSource(fileSrc);
      const buffer = await response.arrayBuffer();
      await client?.uploadAudioData(buffer);
      return;
    }

    const fileFile = files[i].file;
    if (fileFile) {
      const buffer = await fileFile.arrayBuffer();
      const blob = new Blob([buffer], { type: fileFile.type });
      const url = URL.createObjectURL(blob);
      setAudioSource(url);
      await client?.uploadAudioData(buffer);
      return;
    }
  };

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setCounter(0);
      intervalRef.current = null;
    }
  };

  const handleStart = async () => {
    if (clientState === DecoderState.Active) return;

    if (!ourMic.mediaStream) {
      await ourMic.initialize();
      if (ourMic.mediaStream) {
        await client?.attach(ourMic.mediaStream);
      }
    }

    if (ourMic.mediaStream) {
      recorder = new MediaRecorder(ourMic.mediaStream);
      recorder.start();
      recorder.ondataavailable = (e) => setRecData(e.data);
    }

    if (speechSegments.length) {
      setSelectedFileId(undefined);
      setAudioSource(undefined);
      setSpeechSegments([]);
    }

    if (listening) {
      stopCounter();
      await stop();
      recorder.stop();
    } else {
      startCounter();
      await start();
    }
  };

  const handleStop = async () => {
    if (listening && counter > 100) {
      stopCounter();
      await stop();
      recorder.stop();
    }
  };

  const scrollToSegment = (start: number) => {
    if (!speechSegmentsRef.current.every((s) => s.isFinal)) return;
    const position = start * 1000;
    const idx = speechSegmentsRef.current.findIndex((s) => position <= s.words[s.words.length - 1].endTimestamp);
    if (idx === -1) return;
    const el = mainRef.current?.children.item(idx);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.toggle('Segment--active');
    setTimeout(() => el.classList.toggle('Segment--active'), 1000);
  };

  return (
    <>
      <div className="App">
        <div className="Sidebar">
          <h4 className="Sidebar__title">Audio files</h4>
          {files.map(({ name }, i) => (
            <button
              type="button"
              className={clsx('Sidebar__item', selectedFileId === i && 'Sidebar__item--selected')}
              key={name}
              onClick={() => handleSelectFile(i)}
            >
              <AudioFile width={18} height={18} />
              <span>{name}</span>
            </button>
          ))}
          <FileInput acceptMimes="audio/wav,audio/mpeg,audio/mp4" onFileSelected={handleFileAdd} />
        </div>
        <div className="Main" ref={mainRef}>
          {!speechSegments.length && showEmptyState && (
            <div className="EmptyState">
              <Empty className="EmptyState__icon" />
              <h2 className="EmptyState__title">Transcribe speech and audio files</h2>
              <p className="EmptyState__description">
                This demo uses the{' '}
                <a href="https://docs.speechly.com/basics/models" target="_blank" rel="nofollow noopener noreferrer">
                  large-highaccuracy
                </a>{' '}
                off-the-shelf speech recognition model
              </p>
            </div>
          )}
          {speechSegments?.map(({ contextId, id, words }) => (
            <div className="Segment" key={`${contextId}-${id}`}>
              <div className="Segment__timestamp">
                {isNaN(words[0]?.endTimestamp) && '···'}
                {!isNaN(words[0]?.endTimestamp) && formatDuration(words[0]?.endTimestamp)}
              </div>
              <div className="Segment__transcript">
                {words.map((word) => (
                  <span key={word.index}>{word.value} </span>
                ))}
              </div>
            </div>
          ))}
          <div ref={segmentEndRef} className="Segment__end" />
        </div>
      </div>
      <div className="Player">
        <Waveform url={audioSource} onSeek={scrollToSegment}>
          <button
            type="button"
            className={clsx('Microphone', listening && 'Microphone--active')}
            onPointerDown={handleStart}
            onPointerUp={handleStop}
          >
            <Mic />
          </button>
        </Waveform>
      </div>
    </>
  );
}

export default App;