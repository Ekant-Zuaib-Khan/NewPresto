"use client";
import { useEffect } from "react";

const ZopimChat = () => {
  useEffect(() => {
    const loadChatScript = () => {
      console.log("loadChatScript");
      const script = document.createElement("script");
      script.src = "https://v2.zopim.com/?1ek5XPVjRxqvCzWD23xAzdWWZ04Rur4S";
      script.async = true;
      script.defer = true;
      script.charset = "utf-8";

      document.body.appendChild(script);

      script.onload = () => {
        console.log("Zopim Chat script loaded successfully.");
      };

      script.onerror = () => {
        console.error("Error loading Zopim Chat script.");
      };
    };

    const handleWindowLoad = () => {
      loadChatScript();
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return null;
};

export default ZopimChat;
