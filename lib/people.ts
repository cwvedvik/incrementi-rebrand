export interface Person {
  name: string;
  role: string;
  focus: string;
  linkedin?: string;
}

// PLACEHOLDER PROFILES — replace with real partners, advisors and
// consultants (names, roles, focus lines, LinkedIn URLs, photos).
export const PEOPLE: Person[] = [
  {
    name: "Partner Name",
    role: "Managing Partner",
    focus:
      "Owns the client relationship end-to-end. 15+ years building enterprise platforms for operations-heavy firms.",
    linkedin: "#",
  },
  {
    name: "Partner Name",
    role: "Partner — Maritime & Ocean",
    focus:
      "Vessels, subsea and aquaculture. Led the Sebastian DP-checklist work now piloting internationally.",
    linkedin: "#",
  },
  {
    name: "Advisor Name",
    role: "Principal Advisor — Applied AI",
    focus:
      "Designs the context & control layer: knowledge graphs, MCP, governed retrieval. Makes enterprise AI safe.",
    linkedin: "#",
  },
  {
    name: "Advisor Name",
    role: "Principal Advisor — Data Platforms",
    focus:
      "Microsoft Fabric architect behind the NRC Group platform. Data first, lowest TCO, everything a building block.",
    linkedin: "#",
  },
  {
    name: "Consultant Name",
    role: "Senior Consultant — Financial & Professional",
    focus:
      "Compliance-bound, document-heavy workflows. Turns accounting and finance functions into governed-AI operations.",
    linkedin: "#",
  },
  {
    name: "Consultant Name",
    role: "Senior Consultant — Agent Enablement",
    focus:
      "Puts the capability in your people's hands — trains your teams to build and operate their own agents.",
    linkedin: "#",
  },
];
