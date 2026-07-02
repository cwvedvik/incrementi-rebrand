import Link from "next/link";
import { CASES } from "@/lib/cases";

export default function CaseCards() {
  return (
    <div className="case-cards">
      {CASES.map((c) => (
        <Link href={`/work/${c.slug}`} className="case-card" key={c.slug}>
          <div className="metric">
            <span className="n">{c.headline.value}</span>
            <span className="l">{c.headline.label}</span>
          </div>
          <div className="who">
            <span className="client">{c.client}</span>
            <span className="sector">{c.sector}</span>
          </div>
          <span className="open">Read the case →</span>
        </Link>
      ))}
    </div>
  );
}
