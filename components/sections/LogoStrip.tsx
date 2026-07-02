/* eslint-disable @next/next/no-img-element */
import { CLIENTS } from "@/lib/clients";

export default function LogoStrip({ dense = false }: { dense?: boolean }) {
  return (
    <div className={`logo-strip${dense ? " dense" : ""}`} aria-label="Clients">
      {CLIENTS.map((c) => (
        <span className="logo-mark" key={c.name}>
          {c.logoSrc ? (
            <img src={c.logoSrc} alt={c.name} />
          ) : (
            c.name
          )}
        </span>
      ))}
    </div>
  );
}
