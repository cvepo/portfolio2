import TopBar from "@/components/TopBar";
import TocRow from "@/components/TocRow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar left="enzohiu.com" right="ithaca, ny / washington, dc" />

      <div className="max-w-page mx-auto px-6 pt-11 pb-2">
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
          Enzo Hiu
        </h1>
      </div>

      <div className="max-w-page mx-auto px-6 pb-12">
        <p className="font-sans text-base text-body leading-relaxed max-w-[420px]">
          Hi, I&apos;m studying CS @ Cornell and interning as a SWE at
          OneStream.
        </p>
      </div>

      <div className="max-w-page mx-auto px-6 pb-16">
        <div className="border-t border-hairline">
          <TocRow label="Projects" page="02" href="/projects" />
          <TocRow label="About" page="03" href="/about" />
          <TocRow label="Contact" page="04" href="/contact" />
        </div>
      </div>
    </main>
  );
}
