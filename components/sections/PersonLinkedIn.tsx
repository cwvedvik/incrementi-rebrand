import { IconLinkedIn } from "@/components/icons";

export default function PersonLinkedIn({
  name,
  href,
  className,
}: {
  name: string;
  href?: string;
  className?: string;
}) {
  if (!href) return null;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
    >
      <IconLinkedIn />
    </a>
  );
}
