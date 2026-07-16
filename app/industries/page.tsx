import type { Metadata } from "next";
import IndustriesPageClient from "@/components/pages/IndustriesPageClient";

export const metadata: Metadata = {
  title: "Bransjer — Incrementi",
  description:
    "Maritim, industri og finans — tre sektorer, én profil: selskaper som lever av drift.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
