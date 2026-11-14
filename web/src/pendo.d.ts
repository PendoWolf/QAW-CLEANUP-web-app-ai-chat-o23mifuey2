// The Pendo agent is loaded by the Pendo install snippet, so it can be missing at runtime.
declare var pendo: { trackAgent: (eventType: string, metadata: object) => void } | undefined;
