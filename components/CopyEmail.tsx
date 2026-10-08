"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function CopyEmail({ email, compact = false, children }: { email: string; compact?: boolean; children: ReactNode }) {
  const [status, setStatus] = useState<"idle" | "copied" | "unavailable">("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const timeout = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("unavailable");
    }
  }

  return (
    <div className="email-control">
      <button type="button" className="social-button" onClick={copyAddress} aria-label={`Copy email address: ${email}`} title={`Copy ${email}`}>
        {children}
        {!compact ? <span>{email}</span> : null}
      </button>
      <span className={`email-copy-status ${status === "idle" ? "sr-only" : ""}`} role="status">
        {status === "copied" ? "Email copied" : null}
        {status === "unavailable" ? <>Select to copy: <span className="selectable-email">{email}</span></> : null}
      </span>
    </div>
  );
}
