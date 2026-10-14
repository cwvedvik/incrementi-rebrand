"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// HubSpot records the landing page itself; client-side navigations must be
// reported explicitly or every session looks like a single-page visit.
export default function HubSpotPageViews() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const previous = lastPath.current;
    lastPath.current = pathname;
    if (previous === null || previous === pathname) return;
    const hsq = (window._hsq = window._hsq || []);
    hsq.push(["setPath", window.location.pathname]);
    hsq.push(["trackPageView"]);
  }, [pathname]);

  return null;
}
