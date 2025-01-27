"use client";

import { useEffect } from "react";

export default function HachlyAI() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.hachlyai.com/HachlyAI.js";

    script.onload = () => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", executeWidgetLoad);
      } else {
        executeWidgetLoad();
      }
    };

    document.body.appendChild(script);

    function executeWidgetLoad() {
      // @ts-expect-error: window.hachlyAI is dynamically added by external script
      if (window.hachlyAI && window.hachlyAI.load) {
        // @ts-expect-error: window.hachlyAI is dynamically added by external script
        window.hachlyAI
          .load("67428114a7841f7adf166af6")
          .catch((error: Error) => {
            console.error("Error executing load function:", error);
          });
      } else {
        console.error("hachlyAI namespace or load function is not defined.");
      }
    }

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
