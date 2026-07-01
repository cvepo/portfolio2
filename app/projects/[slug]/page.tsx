import { notFound } from "next/navigation";
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
    <main className="min-h-screen">
      <TopBar
        left="← projects"
        leftHref="/projects"
        right={`${project.order} / ${total}`}
      />

      <div className="max-w-page mx-auto px-6 pt-8">
        <h1 className="font-display font-semibold text-3xl sm:text-[34px] text-ink">
          {project.title}
        </h1>
        <p className="font-display italic text-base text-plum mt-1 mb-6">
          {project.hook}
        </p>
      </div>

      <div className="max-w-page mx-auto px-6">
        <PlaceholderImage className="w-full h-56 sm:h-[260px]" iconSize={36} />
      </div>

      <div className="max-w-page mx-auto px-6 py-9 flex flex-col sm:flex-row gap-8">
        <div className="flex-[1.4] flex flex-col gap-4">
          {project.body.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-sm text-body leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex-1 sm:border-l border-hairline sm:pl-6 flex flex-col gap-4 font-mono text-xs text-body">
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
          {(project.liveUrl || project.githubUrl) && (
            <div>
              <div className="text-warmgray text-[10px] mb-1">links</div>
              <span className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="text-plum hover:text-ink">
                    live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-plum hover:text-ink">
                    github ↗
                  </a>
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
