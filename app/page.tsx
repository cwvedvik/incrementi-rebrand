import { Suspense } from "react";
import MarketingHome from "@/components/home/MarketingHome";

export default function Page() {
  return (
    <Suspense fallback={<div className="mkt mkt-loading" aria-hidden="true" />}>
      <MarketingHome />
    </Suspense>
  );
}
