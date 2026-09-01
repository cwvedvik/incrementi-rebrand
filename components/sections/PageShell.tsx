"use client";

import { useEffect } from "react";
import SiteNav from "./SiteNav";
import PageCtaBand from "./PageCtaBand";

/**
 * Shared shell for marketing subpages (/platform, /results, cases).
 * Matches the industrial mkt- language used on the homepage.
 */
export default function PageShell({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);

  return (
    <div className="mkt mkt-subpage">
      <SiteNav marketing subpage />
      <main className={`mkt-sub-main${wide ? " mkt-sub-main-wide" : ""}`}>
        {children}
        <PageCtaBand />
      </main>
    </div>
  );
}
