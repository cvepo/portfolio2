import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import TocRow from "@/components/TocRow";

export default function Home() {
  return (
    <PageFrame>
      <TopBar left="enzohiu.com" right="ithaca, ny / washington, dc" />

      <div className="px-6 sm:px-8 pt-10 pb-3">
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
          Enzo Hiu
        </h1>
      </div>

      <div className="px-6 sm:px-8 pb-14">
        <p className="font-sans text-base text-body leading-relaxed max-w-[420px]">
          Hi, I&apos;m studying CS @ Cornell and interning as a SWE at
          OneStream.
        </p>
      </div>

      <div className="px-6 sm:px-8 pb-20">
        <div className="border-t border-hairline">
          <TocRow label="About" page="02" href="/about" />
          <TocRow label="Experiences" page="03" href="/experiences" />
          <TocRow label="Projects" page="04" href="/projects" />
          <TocRow label="Contact" page="05" href="/contact" />
        </div>
      </div>
    </PageFrame>
  );
}
