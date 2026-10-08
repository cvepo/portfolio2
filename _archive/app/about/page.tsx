import Image from "next/image";
import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import { getCurrentlyTags } from "@/lib/currentlyTags";

export default function About() {
  const currentlyTags = getCurrentlyTags();
  return (
    <PageFrame>
      <TopBar left="← enzohiu.com" leftHref="/" right="about" />

      <div className="px-6 sm:px-8 pt-6 pb-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden shrink-0 bg-placeholder">
          <Image
            src="/headshot.jpg"
            alt="Enzo Hiu"
            fill
            className="object-cover object-top"
            sizes="128px"
            priority
          />
        </div>
        <div>
          <h1 className="font-display font-semibold text-3xl text-ink mb-3">
            About
          </h1>
          <div className="font-sans text-sm text-body leading-relaxed space-y-4">
            <p>
              I&apos;m a junior studying CS at Cornell and I like building
              things that are useful, clean, and maybe a little overthought
              in the best way.
            </p>
            <p>
              I started at community college before transferring to Cornell,
              so a lot of my path has been figuring things out as I go. In my
              free time I&apos;m usually trying new restaurants, cooking for
              friends, or snowboarding.
            </p>
          </div>
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
