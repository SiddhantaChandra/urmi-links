"use client";

import { useEffect, useRef, useState } from "react";
import { QrCode } from "pixelarticons/react/QrCode.js";
import { Share } from "pixelarticons/react/Share.js";
import { QRCodeSVG } from "qrcode.react";

export default function ShareTools() {
  const [qrUrl, setQrUrl] = useState("");
  const [status, setStatus] = useState("");
  const tools = useRef<HTMLDivElement>(null);
  const qrButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(""), 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    if (!qrUrl) return;
    const dismiss = (event: PointerEvent) => {
      if (!tools.current?.contains(event.target as Node)) setQrUrl("");
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQrUrl("");
        qrButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [qrUrl]);

  async function share() {
    const url = new URL("/", window.location.href).href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Urmi’s links", url });
      } else {
        await navigator.clipboard.writeText(url);
        setStatus("Link copied.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        setStatus("Link copied.");
      } catch {
        setStatus("Couldn’t copy the link. Copy the address from your browser.");
      }
    }
  }

  return (
    <div className="share-tools" ref={tools}>
      <header className="utility-bar" aria-label="Share this page">
        <button type="button" onClick={share}><Share aria-hidden="true" />Share</button>
        <button type="button" ref={qrButton} aria-expanded={Boolean(qrUrl)} aria-controls="qr-panel" onClick={() => setQrUrl(qrUrl ? "" : new URL("/", window.location.href).href)}><QrCode aria-hidden="true" />QR</button>
      </header>
      {qrUrl && (
        <section id="qr-panel" className="qr-panel" aria-label="Scan Urmi’s links">
          <QRCodeSVG value={qrUrl} size={176} marginSize={4} fgColor="#251c20" bgColor="#fcf8f1" title="QR code for Urmi’s links" />
          <p>Scan to open my links</p>
        </section>
      )}
      <p className="share-status" role="status">{status}</p>
    </div>
  );
}
