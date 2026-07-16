import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

function Svg({ title, children, className, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      {...base}
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** 00 Direction — bearing plot */
export function IconDirection(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" opacity="0.55" />
      <path d="M12 4.2v1.6M12 18.2v1.6M4.2 12h1.6M18.2 12h1.6" opacity="0.7" />
      <path d="M12 12L16.2 7.8" className="icon-accent" stroke="var(--copper-bright)" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/** 01 Prototype */
export function IconPrototype(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="5" width="14" height="4" rx="0.5" strokeDasharray="2 1.5" />
      <rect x="5" y="10.5" width="11" height="4" rx="0.5" />
      <rect x="5" y="16" width="8" height="3.5" rx="0.5" />
      <path d="M7 12.5h7" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

/** 02 Data foundation — manifold */
export function IconData(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 6v2M3 11v2M3 16v2" opacity="0.55" />
      <path d="M3 7h5M3 12h5M3 17h5" opacity="0.55" />
      <rect x="8" y="6" width="7" height="12" rx="0.5" />
      <path d="M9.5 9h4M9.5 12h4M9.5 15h4" opacity="0.5" />
      <path d="M15 12h6" className="icon-accent" stroke="var(--copper-bright)" strokeWidth="1.6" />
      <path d="M19.5 10v4" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

/** 03 Operating system — bulkhead */
export function IconOs(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M12 4v16M4 12h16" opacity="0.55" />
      <rect x="5.5" y="5.5" width="5" height="5" rx="0.3" className="icon-accent" fill="var(--copper)" fillOpacity="0.18" stroke="var(--copper-bright)" />
      <circle cx="6.2" cy="6.2" r="0.45" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="17.8" cy="6.2" r="0.45" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="6.2" cy="17.8" r="0.45" fill="currentColor" stroke="none" opacity="0.5" />
      <circle cx="17.8" cy="17.8" r="0.45" fill="currentColor" stroke="none" opacity="0.5" />
    </Svg>
  );
}

/** 04 Context — governed lattice */
export function IconContext(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="7" cy="8" r="1.4" />
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="17" cy="9" r="1.3" />
      <circle cx="9" cy="15" r="1.3" />
      <circle cx="15" cy="16" r="1.5" />
      <path d="M8.2 8.8L10.6 6.8M13.4 6.8L15.8 8.6M8.2 14.2L7.6 9.4M13.4 15.2L16.2 10.2M10.2 14.8L13.6 15.4" opacity="0.65" />
      <path d="M18.5 7.5c2 2.2 2 7.2 0 9.5" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

/** 05 Agents — console + key */
export function IconAgents(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="14" width="11" height="4.5" rx="0.6" />
      <path d="M6 14v4.5M9 14v4.5M12 14v4.5" opacity="0.45" />
      <circle cx="17.5" cy="8" r="2.4" className="icon-accent" stroke="var(--copper-bright)" />
      <path d="M17.5 10.4v6.2M16.2 14.2h2.6M16.2 16.2h2.2" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

export function IconMaritime(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 14.5c2.5-1 4.2-3.2 5.5-5.5 1.2 2 2.8 3.8 5 4.8 1.8.8 3.8 1.2 5.5 1.2" />
      <path d="M5 14.5h14l-1.2 2.8H6.2z" opacity="0.85" />
      <path d="M8 17.5c1.5 1.8 3.2 2.8 4.5 2.8s3-1 4.5-2.8" opacity="0.45" />
      <path d="M10 20c1 .9 2 1.4 2.5 1.4s1.5-.5 2.5-1.4" className="icon-accent" stroke="var(--copper-bright)" opacity="0.9" />
    </Svg>
  );
}

export function IconIndustrial(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 20V6h2.5v14" />
      <path d="M6 8h12.5" />
      <path d="M18.5 8v3" />
      <circle cx="18.5" cy="13.5" r="1.6" className="icon-accent" stroke="var(--copper-bright)" />
      <path d="M18.5 15.2c-2.2 1.4-4.5 2.2-6.5 2.2" strokeDasharray="2 1.5" opacity="0.5" />
    </Svg>
  );
}

export function IconFinance(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h12M4 12h12M4 17h10" />
      <path d="M17 6.5v11" opacity="0.55" />
      <path d="M17 6.5h3.5v3.2c0 1.4-1.1 2.3-2.2 2.3h-1.3" className="icon-accent" stroke="var(--copper-bright)" />
      <rect x="18.2" y="8.2" width="1.4" height="1.6" rx="0.2" fill="var(--copper-bright)" stroke="none" />
    </Svg>
  );
}

export function IconOwnership(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="10" width="11" height="8" rx="0.6" />
      <path d="M5.5 10V7.5h2v2.5M8.5 10V6h2v4M11.5 10V8h2v2" opacity="0.7" />
      <circle cx="17.5" cy="9" r="2.2" className="icon-accent" stroke="var(--copper-bright)" />
      <path d="M17.5 11.2v6.5M16.2 14.5h2.6M16.2 16.5h2" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

export function IconConsulting(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 18V6" />
      <path d="M4 12h16" opacity="0.45" />
      <path d="M8 8h10M8 16h10" />
      <circle cx="18" cy="12" r="1.4" className="icon-accent" stroke="var(--copper-bright)" />
    </Svg>
  );
}

export function IconStrategy(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path
        d="M12 3.5a8.5 8.5 0 0 1 7.2 4.2"
        className="icon-accent"
        stroke="var(--copper-bright)"
        strokeWidth="1.8"
      />
      <path d="M12 12L15.5 8.2" stroke="var(--copper-bright)" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

const MAP = {
  direction: IconDirection,
  prototype: IconPrototype,
  data: IconData,
  os: IconOs,
  context: IconContext,
  agents: IconAgents,
  maritime: IconMaritime,
  industrial: IconIndustrial,
  finance: IconFinance,
  ownership: IconOwnership,
  consulting: IconConsulting,
  strategy: IconStrategy,
} as const;

export type IconName = keyof typeof MAP;

export function ConceptIcon({
  name,
  className,
  ...rest
}: { name: IconName } & IconProps) {
  const Comp = MAP[name];
  return <Comp className={className} {...rest} />;
}
