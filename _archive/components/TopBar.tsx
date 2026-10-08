import Link from "next/link";

type TopBarProps = {
  left: string;
  leftHref?: string;
  right: string;
};

export default function TopBar({ left, leftHref, right }: TopBarProps) {
  const leftEl = leftHref ? (
    <Link
      href={leftHref}
      className="font-mono text-xs text-plum hover:text-ink transition-colors"
    >
      {left}
    </Link>
  ) : (
    <span className="font-mono text-xs text-plum tracking-wide">{left}</span>
  );

  return (
    <div className="flex items-center justify-between px-6 sm:px-8 pt-8 pb-4">
      {leftEl}
      <span className="font-mono text-xs text-warmgray">{right}</span>
    </div>
  );
}
