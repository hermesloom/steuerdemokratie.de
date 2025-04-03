"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface PolisEmbedProps {
  conversationId: string;
  className?: string;
}

export function PolisEmbed({
  conversationId,
  className = "",
}: PolisEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedScriptRef = useRef(false);

  useEffect(() => {
    // Ensure the script only loads once
    if (!loadedScriptRef.current && containerRef.current) {
      // Create the polis div element dynamically
      const polisDiv = document.createElement("div");
      polisDiv.className = "polis";
      polisDiv.dataset.conversation_id = conversationId;

      // Append to our container
      containerRef.current.appendChild(polisDiv);

      loadedScriptRef.current = true;
    }
  }, [conversationId]);

  return (
    <div className={className}>
      <div ref={containerRef}></div>
      <Script src="https://pol.is/embed.js" strategy="lazyOnload" />
    </div>
  );
}
