## API Report File for "@speechly/browser-client"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export interface APIClient {
    close(): Promise<void>;
    initialize(apiUrl: string, authToken: string, targetSampleRate: number, debug: boolean): Promise<void>;
    onClose(cb: CloseCallback): void;
    onResponse(cb: ResponseCallback): void;
    postMessage(message: Object): void;
    sendAudio(audioChunk: Float32Array): void;
    setSourceSampleRate(sourceSampleRate: number): Promise<void>;
    startContext(appId?: string): Promise<string>;
    stopContext(): Promise<string>;
    switchContext(appId: string): Promise<string>;
}

// @public
export type AudioCallback = (audioBuffer: Int16Array) => void;

// @public
export class Client {
    constructor(options: ClientOptions);
    close(): Promise<void>;
    initialize(): Promise<void>;
    onEntity(cb: EntityCallback): void;
    onIntent(cb: IntentCallback): void;
    onSegmentChange(cb: SegmentChangeCallback): void;
    onStateChange(cb: StateChangeCallback): void;
    onTentativeEntities(cb: TentativeEntitiesCallback): void;
    onTentativeIntent(cb: IntentCallback): void;
    onTentativeTranscript(cb: TentativeTranscriptCallback): void;
    onTranscript(cb: TranscriptCallback): void;
    printStats(): void;
    startContext(appId?: string): Promise<string>;
    stopContext(): Promise<string>;
    switchContext(appId: string): Promise<void>;
    }

// @public
export interface ClientOptions {
    apiClient?: APIClient;
    apiUrl?: string;
    appId?: string;
    autoGainControl?: boolean;
    debug?: boolean;
    language?: string;
    loginUrl?: string;
    logSegments?: boolean;
    microphone?: Microphone;
    projectId?: string;
    sampleRate?: number;
    storage?: Storage_2;
}

// @public
export enum ClientState {
    // (undocumented)
    Connected = 6,
    // (undocumented)
    Connecting = 5,
    // (undocumented)
    Disconnected = 3,
    // (undocumented)
    Disconnecting = 4,
    // (undocumented)
    Failed = 0,
    // (undocumented)
    NoAudioConsent = 2,
    // (undocumented)
    NoBrowserSupport = 1,
    // (undocumented)
    Recording = 9,
    // (undocumented)
    Starting = 7,
    // (undocumented)
    Stopping = 8
}

// @public
export type CloseCallback = (err: Error) => void;

// @public
export const DefaultSampleRate = 16000;

// @public
export interface Entity {
    endPosition: number;
    isFinal: boolean;
    startPosition: number;
    type: string;
    value: string;
}

// @public
export type EntityCallback = (contextId: string, segmentId: number, entity: Entity) => void;

// @public
export interface EntityResponse {
    end_position: number;
    entity: string;
    start_position: number;
    value: string;
}

// @public
export const ErrAlreadyInitialized: Error;

// @public
export const ErrDeviceNotSupported: Error;

// @public
export const ErrKeyNotFound: Error;

// @public
export const ErrNoAudioConsent: Error;

// @public
export const ErrNoStorageSupport: Error;

// @public
export const ErrNotInitialized: Error;

// @public
export interface Intent {
    intent: string;
    isFinal: boolean;
}

// @public
export type IntentCallback = (contextId: string, segmentId: number, intent: Intent) => void;

// @public
export interface IntentResponse {
    intent: string;
}

// @public
export interface Microphone {
    close(): Promise<void>;
    initialize(audioContext: AudioContext, mediaStreamConstraints: MediaStreamConstraints): Promise<void>;
    mute(): void;
    printStats(): void;
    unmute(): void;
}

// @public
export type ResponseCallback = (response: WebsocketResponse) => void;

// @public
export interface Segment {
    contextId: string;
    entities: Entity[];
    id: number;
    intent: Intent;
    isFinal: boolean;
    words: Word[];
}

// @public
export type SegmentChangeCallback = (segment: Segment) => void;

// @public
export type StateChangeCallback = (state: ClientState) => void;

// @public
export function stateToString(state: ClientState): string;

// @public
interface Storage_2 {
    get(key: string): string | null;
    getOrSet(key: string, genFn: () => string): string;
    set(key: string, val: string): void;
}

export { Storage_2 as Storage }

// @public
export type TentativeEntitiesCallback = (contextId: string, segmentId: number, entities: Entity[]) => void;

// @public
export interface TentativeEntitiesResponse {
    entities: EntityResponse[];
}

// @public
export type TentativeTranscriptCallback = (contextId: string, segmentId: number, words: Word[], text: string) => void;

// @public
export interface TentativeTranscriptResponse {
    transcript: string;
    words: TranscriptResponse[];
}

// @public
export type TranscriptCallback = (contextId: string, segmentId: number, word: Word) => void;

// @public
export interface TranscriptResponse {
    end_timestamp: number;
    index: number;
    start_timestamp: number;
    word: string;
}

// @public
export interface WebsocketResponse {
    audio_context: string;
    data: TranscriptResponse | EntityResponse | IntentResponse | TentativeTranscriptResponse | TentativeEntitiesResponse;
    segment_id: number;
    type: WebsocketResponseType;
}

// @public
export enum WebsocketResponseType {
    // (undocumented)
    Entity = "entity",
    // (undocumented)
    Intent = "intent",
    // (undocumented)
    Opened = "WEBSOCKET_OPEN",
    // (undocumented)
    SegmentEnd = "segment_end",
    // (undocumented)
    SourceSampleRateSetSuccess = "SOURSE_SAMPLE_RATE_SET_SUCCESS",
    // (undocumented)
    Started = "started",
    // (undocumented)
    Stopped = "stopped",
    // (undocumented)
    TentativeEntities = "tentative_entities",
    // (undocumented)
    TentativeIntent = "tentative_intent",
    // (undocumented)
    TentativeTranscript = "tentative_transcript",
    // (undocumented)
    Transcript = "transcript"
}

// @public
export interface Word {
    endTimestamp: number;
    index: number;
    isFinal: boolean;
    startTimestamp: number;
    value: string;
}


// (No @packageDocumentation comment for this package)

```