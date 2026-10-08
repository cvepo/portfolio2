import Image from "next/image";
import Arrow from "@/components/Arrow";
import type { IosProject } from "@/data/portfolio";

export default function IosAppCard({ project }: { project: IosProject }) {
  const booked = project.title === "Booked";

  return (
    <article className={`app-project ${booked ? "app-project-booked" : "app-project-uplift"}`}>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="app-preview" aria-label={`${project.linkLabel} (opens in a new tab)`}>
        {!booked ? <div className="preview-heading">
          <span>{project.category}</span>
          <span className="preview-platform">iOS app</span>
        </div> : null}
        <div className={booked ? "booked-panels" : "phone-lineup"}>
          {project.screens.map((screen) => (
            <div className="phone" key={screen.src}>
              <Image
                src={screen.src}
                alt={screen.alt}
                width={screen.width}
                height={screen.height}
                sizes={booked ? "(min-width: 1360px) 167px, (min-width: 800px) 13vw, 23vw" : "(min-width: 800px) 190px, 38vw"}
                priority={booked}
              />
            </div>
          ))}
        </div>
        {!booked ? <span className="preview-caption">{project.features}</span> : null}
      </a>
      <div className="project-caption">
        <div>
          <p className="eyebrow">{booked ? "01" : "02"} / Cornell AppDev</p>
          <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}<Arrow diagonal /></a></h3>
        </div>
        <span className={`project-status ${booked ? "" : "status-live"}`}>{project.meta}</span>
      </div>
      <p className="project-summary">{project.summary}</p>
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-link project-action">{project.linkLabel}<Arrow diagonal /></a>
    </article>
  );
}
