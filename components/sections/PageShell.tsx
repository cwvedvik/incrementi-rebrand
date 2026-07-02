import Link from "next/link";

export const PAGE_NAV = [
  { href: "/journey", label: "The Journey" },
  { href: "/what-we-build", label: "What we build" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/people", label: "People" },
  { href: "/about", label: "About" },
];

/**
 * Shell for the static, crawlable pages behind the homepage experience.
 * Minimal chrome, no footer — every page routes back into the living
 * experience via a deep link.
 */
export default function PageShell({
  children,
  experienceTopic,
}: {
  children: React.ReactNode;
  experienceTopic?: string;
}) {
  return (
    <div className="page-shell">
      <div className="glow" aria-hidden="true" />
      <header className="topbar page-topbar">
        <Link href="/" className="logo">
          <img src="/incrementi-logo.png" alt="Incrementi" />
          <small>A 99x Company</small>
        </Link>
        <nav className="nav" aria-label="Pages">
          {PAGE_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="start" href="/start">
            Start
          </Link>
        </nav>
      </header>
      <main className="page-main">
        {children}
        <p className="page-exp-link">
          <Link href={experienceTopic ? `/?t=${experienceTopic}` : "/"}>
            ← Open the live experience
          </Link>
        </p>
      </main>
    </div>
  );
}
