import type { Metadata } from "next";
import DiagramPageClient from "@/components/pages/DiagramPageClient";

export const metadata: Metadata = {
  title: "Plattformen — Incrementi",
  description:
    "Slik ser fundamentet ut: felles datagrunnlag, styrt kontekstlag og skinner for hele virksomheten — lag for lag.",
};

export default function PlatformPage() {
  return <DiagramPageClient />;
}
