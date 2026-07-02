import { PEOPLE } from "@/lib/people";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function PeopleGrid() {
  return (
    <div className="people-grid">
      {PEOPLE.map((p, i) => (
        <div className="person" key={i}>
          <div className="avatar" aria-hidden="true">
            {initials(p.name)}
          </div>
          <h4>{p.name}</h4>
          <div className="role">{p.role}</div>
          <p>{p.focus}</p>
          {p.linkedin && (
            <a
              className="li"
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
