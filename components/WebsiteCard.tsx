import Arrow from "@/components/Arrow";
import ProjectGallery from "@/components/ProjectGallery";
import type { WebProject } from "@/data/portfolio";

export default function WebsiteCard({ project, index }: { project: WebProject; index: string }) {
  const external = project.href.startsWith("http");
  const linkProps = {
    href: project.href,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
  };

  return (
    <article className={project.images?.length ? "web-project" : "small-project"}>
      <div className="web-project-copy">
        <p className="eyebrow">{index} / {project.category}</p>
        <h3><a {...linkProps}>{project.title}{!project.images?.length ? <Arrow diagonal /> : null}</a></h3>
        <p className="project-summary">{project.summary}</p>
        {project.detail ? <p className="project-detail">{project.detail}</p> : null}
        <a {...linkProps} className="text-link project-action">{project.meta === "Live" ? `Open ${project.title} demo` : `View ${project.title} on GitHub`}<Arrow diagonal /></a>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      {project.images?.length ? <ProjectGallery title={project.title} images={project.images} /> : null}
    </article>
  );
}
