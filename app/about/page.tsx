import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import { User } from "lucide-react";

const currentlyTags = [
  "studying @ cornell",
  "swe intern @ onestream",
  "apm @ cornell appdev",
  "backend @ hack4impact",
  "ai/ml fellow @ break through tech",
];

export default function About() {
  return (
    <PageFrame>
      <TopBar left="← index" leftHref="/" right="about" />

      <div className="px-6 sm:px-8 pt-6 pb-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        <div className="w-28 h-28 rounded-lg bg-placeholder flex items-center justify-center shrink-0">
          <User size={28} className="text-warmgray" strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="font-display font-semibold text-3xl text-ink mb-3">
            About
          </h1>
          <p className="font-sans text-sm text-body leading-relaxed">
            I&apos;m a sophomore studying CS at Cornell, currently interning
            as a SWE at OneStream. Most of what&apos;s on this site started
            as a small idea that got a little out of hand — a card tracker
            that grew a real accounting engine, a fitness app that turned
            into a whole engagement system.
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-8 pb-20">
        <p className="font-mono text-[11px] text-warmgray mb-3">currently</p>
        <div className="flex gap-2 flex-wrap">
          {currentlyTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-plum bg-sand px-2.5 py-1.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
