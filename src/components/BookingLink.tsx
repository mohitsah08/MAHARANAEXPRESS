"use client";
export const track = (event: string) => { if (typeof window !== "undefined") window.gtag?.("event", event); };
declare global { interface Window { gtag?: (...args: unknown[]) => void } }
