// Pendo Track Events. The Pendo agent is loaded by the install snippet and attaches the
// current visitor and account to every event, so properties never include their ids.

export type TrackProperties = Record<string, string | number | boolean>;

interface PendoAgent {
  track: (event: string, properties?: TrackProperties) => void;
}

declare global {
  interface Window {
    pendo?: PendoAgent;
  }
}

/** Sends a Pendo Track Event. Does nothing when the agent isn't loaded, and never throws. */
export function trackEvent(event: string, properties: TrackProperties = {}): void {
  try {
    window.pendo?.track(event, properties);
  } catch {
    // Tracking must never break the app.
  }
}

/** The number of days a trip lasts, counting both the start and end dates. */
export function tripLengthDays(startDate: string, endDate: string): number {
  const days = Math.round((Date.parse(endDate) - Date.parse(startDate)) / 86_400_000) + 1;
  return Number.isFinite(days) ? days : 0;
}
