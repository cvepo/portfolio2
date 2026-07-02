import { notFound } from "next/navigation";
import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import PlaceholderImage from "@/components/PlaceholderImage";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const total = projects.length.toString().padStart(2, "0");

  return (
    <PageFrame>
      <TopBar
        left="← projects"
        leftHref="/projects"
        right={`${project.order} / ${total}`}
      />

      <div className="px-6 sm:px-8 pt-6 pb-8">
        <h1 className="font-display font-semibold text-3xl sm:text-[34px] text-ink">
          {project.title}
        </h1>
        <p className="font-display italic text-base text-plum mt-2 mb-8">
          {project.hook}
        </p>
      </div>

      <div className="px-6 sm:px-8">
        <PlaceholderImage className="w-full h-56 sm:h-[260px]" iconSize={36} />
      </div>

      <div className="px-6 sm:px-8 py-10 pb-20 flex flex-col sm:flex-row gap-10">
        <div className="flex-[1.4] flex flex-col gap-5">
          {project.body.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-sm text-body leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex-1 sm:border-l border-hairline sm:pl-8 flex flex-col gap-5 font-mono text-xs text-body">
          <div>
            <div className="text-warmgray text-[10px] mb-1">role</div>
            {project.role}
          </div>
          <div>
            <div className="text-warmgray text-[10px] mb-1">stack</div>
            {project.stack}
          </div>
          <div>
            <div className="text-warmgray text-[10px] mb-1">highlight</div>
            <span className="text-plum">{project.highlight}</span>
          </div>
          {(project.liveUrl ||
            project.githubUrl ||
            (project.links && project.links.length > 0)) && (
            <div>
              <div className="text-warmgray text-[10px] mb-1">links</div>
              <span className="flex flex-col gap-2">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-plum hover:text-ink">
                    live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-plum hover:text-ink"
                  >
                    github ↗
                  </a>
                )}
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-plum hover:text-ink"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </PageFrame>
  );
}
