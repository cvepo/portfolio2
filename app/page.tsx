import TocRow from "@/components/TocRow";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute top-8 left-6 font-mono text-xs text-plum">
        enzohiu.com
      </div>
      <div className="absolute top-8 right-6 font-mono text-xs text-warmgray">
        ithaca, ny
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center">
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
              Enzo Hiu
            </h1>
            <p className="font-sans text-base text-body leading-relaxed mt-5">
              Hi, I&apos;m studying CS @ Cornell and interning as a SWE at
              OneStream.
            </p>
          </div>

          <div className="mt-10 text-left">
            <div className="border-t border-hairline">
              <TocRow label="About" page="02" href="/about" />
              <TocRow label="Experiences" page="03" href="/experiences" />
              <TocRow label="Projects" page="04" href="/projects" />
              <TocRow label="Contact" page="05" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
