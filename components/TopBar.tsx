import Link from "next/link";

type TopBarProps = {
  left: string;
  leftHref?: string;
  right: string;
  wide?: boolean;
};

export default function TopBar({ left, leftHref, right, wide }: TopBarProps) {
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
    <div
      className={`flex items-center justify-between mx-auto px-6 lg:px-10 pt-8 ${
        wide ? "max-w-7xl" : "max-w-page"
      }`}
    >
      {leftEl}
      <span className="font-mono text-xs text-warmgray">{right}</span>
    </div>
  );
}
