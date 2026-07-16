import type { Metadata } from "next";
import PeoplePageClient from "@/components/pages/PeoplePageClient";

export const metadata: Metadata = {
  title: "Folk — Incrementi",
  description:
    "Senior partnere leder hvert engasjement. 99X’ 650+ spesialister skalerer det.",
};

export default function PeoplePage() {
  return <PeoplePageClient />;
}
