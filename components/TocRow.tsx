import Link from "next/link";

type TocRowProps = {
  label: string;
  page: string;
  href: string;
};

export default function TocRow({ label, page, href }: TocRowProps) {
  return (
    <Link
      href={href}
      className="group flex items-baseline justify-between py-3 border-t border-hairline first:border-t-0"
    >
      <span className="font-display text-lg text-ink group-hover:text-plum transition-colors">
        {label}
      </span>
      <span className="flex-1 mx-3 border-b border-dotted border-hairline group-hover:border-plum transition-colors translate-y-[-4px]" />
      <span className="font-mono text-sm text-plum group-hover:translate-x-0.5 transition-transform inline-block">
        {page}
      </span>
    </Link>
  );
}
