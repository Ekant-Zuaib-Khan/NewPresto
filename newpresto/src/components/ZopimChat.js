"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

const ZopimChat = () => {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setLoadScript(true);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // Listen for first user interaction
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <>
      {loadScript && (
        <Script
          src="https://v2.zopim.com/?1ek5XPVjRxqvCzWD23xAzdWWZ04Rur4S"
          strategy="lazyOnload"
          onLoad={() => console.log("Zopim Chat script loaded successfully.")}
          onError={() => console.error("Error loading Zopim Chat script.")}
        />
      )}
    </>
  );
};

export default ZopimChat;
