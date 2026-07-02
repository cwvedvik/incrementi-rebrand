"use client";

import { motion } from "framer-motion";

/**
 * The six phases of the Incrementi Journey, visualised as building
 * blocks: each phase adds a slab to the stack glyph, so the firm
 * visibly takes shape as you read down. Blocks reveal one by one as
 * they scroll into view, so the first screen isn't a wall of text.
 */

export interface Phase {
  n: string;
  h: string;
  p: string;
}

export const PHASES: Phase[] = [
  {
    n: "00",
    h: "Direction",
    p: "One focused week, anchored in an AI & data strategy session with your leadership. We map where you are, where the value sits, and agree the target architecture and the build sequence. You leave with a plan the whole journey steers by — whether or not we continue together.",
  },
  {
    n: "01",
    h: "Prototype & scope",
    p: "Clickable prototypes built with your people in roughly four weeks. We test the riskiest assumptions on screen before committing serious resources, and lock scope on evidence instead of estimates. Nothing is thrown away — prototypes convert directly into production work.",
  },
  {
    n: "02",
    h: "Data foundation",
    p: "A modern data platform that turns every system, sensor and source into a clean building block. We typically build on established lakehouse technology — Microsoft Fabric, Azure, Databricks — matched to your estate and your preferences, never locked to ours. Data first means the lowest total cost of ownership, and every later increment lands faster because of it.",
  },
  {
    n: "03",
    h: "The operating system",
    p: "The operational backbone your crew, operations, leadership and customers actually use — shipped to production module by module. Built on open, proven technology such as .NET, React and OpenBridge for maritime interfaces, integrated with the platforms you already run. Each module is small enough to land in weeks and solid enough to carry the business.",
  },
  {
    n: "04",
    h: "AI context & control layer",
    p: "The layer that makes enterprise AI safe and useful: a knowledge graph of your real world, governed access through MCP, and retrieval that grounds every answer in your sources. Roles, permissions, lineage and audit are built in from the start. This is what turns generic models into AI that knows your vessels, sites, customers and processes.",
  },
  {
    n: "05",
    h: "Agent enablement",
    p: "We put the capability in your people's hands: your employees design, build and operate their own agents on the governed foundation beneath them. The capability stays in your organisation — and keeps compounding after we step back.",
  },
];

export default function BuildingBlocks() {
  return (
    <div className="blocks">
      {PHASES.map((ph, i) => (
        <motion.div
          className="block"
          key={ph.n}
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          /* negative bottom margin keeps blocks near the bottom of the
             screen hidden until scrolled up, so the first window only
             shows the top of the stack. Kept at -35% so the final block
             still triggers at the chat stream's maximum scroll. */
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -35% 0px" }}
          transition={{
            duration: 0.7,
            delay: i === 0 ? 0.35 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="stack-glyph" aria-hidden="true">
            {[5, 4, 3, 2, 1, 0].map((s) => (
              <i key={s} className={s <= i ? "on" : ""} />
            ))}
          </div>
          <div className="block-body">
            <div className="block-head">
              <span className="n">{ph.n}</span>
              <h4>{ph.h}</h4>
            </div>
            <p>{ph.p}</p>
          </div>
        </motion.div>
      ))}
      <p className="blocks-note">
        We build on open, established technology — and adapt to the stack you
        already own.
      </p>
    </div>
  );
}
