"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("cds-cookie-ready") !== "yes");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-sm rounded-[8px] border border-silver bg-white p-4 shadow-clinical">
      <p className="text-sm font-bold text-ink">Cookie readiness</p>
      <p className="mt-1 text-xs leading-5 text-slate">
        This site is prepared for analytics and consent tools. Update the privacy
        policy before enabling tracking.
      </p>
      <button
        className="button-secondary mt-3 min-h-10 px-4 text-sm"
        type="button"
        onClick={() => {
          localStorage.setItem("cds-cookie-ready", "yes");
          setVisible(false);
        }}
      >
        Acknowledge
      </button>
    </div>
  );
}
