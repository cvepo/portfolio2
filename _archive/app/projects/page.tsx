import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import PlaceholderImage from "@/components/PlaceholderImage";
import { projects } from "@/data/projects";

export default function ProjectsIndex() {
  return (
    <PageFrame wide>
      <TopBar left="← enzohiu.com" leftHref="/" right="index" />

      <div className="px-6 sm:px-8 lg:px-10 pt-6 pb-4">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-ink">
          Projects
        </h1>
      </div>

      <div className="px-6 sm:px-8 lg:px-10 pb-20 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block border border-hairline rounded-lg overflow-hidden bg-sand/20 hover:border-plum/40 transition-colors"
            >
              <PlaceholderImage
                className="w-full aspect-[16/10] rounded-none"
                iconSize={36}
              />
              <div className="p-5 sm:p-7">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="font-display text-xl sm:text-2xl text-ink group-hover:text-plum transition-colors">
                    {project.title}
                  </p>
                  <span className="font-mono text-xs text-warmgray shrink-0">
                    {project.order}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-body leading-relaxed">
                  {project.hook}
                </p>
                <p className="font-mono text-xs text-plum mt-4">
                  {project.tags.join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
