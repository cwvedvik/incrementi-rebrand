import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "Om oss — Incrementi",
  description:
    "Møt partnerne, se hvorfor fundamentet kommer før AI, og hvordan reisen fra datagrunnlag til agenter ser ut. Dere beholder nøklene. A 99x company.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
