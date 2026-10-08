import Arrow from "@/components/Arrow";
import ContactLinks from "@/components/ContactLinks";
import IosAppCard from "@/components/IosAppCard";
import WebsiteCard from "@/components/WebsiteCard";
import { iosProjects, webProjects } from "@/data/portfolio";

export default function Home() {
  const featuredWebProjects = webProjects.filter((project) => project.images?.length);
  const otherProjects = webProjects.filter((project) => !project.images?.length);

  return (
    <>
      <a className="skip-link" href="#work">Skip to projects</a>
      <div className="page-shell" id="top">
        <header className="site-header">
          <a href="#top" className="wordmark" aria-label="Enzo Hiu, back to top">eh<span>.</span></a>
          <nav aria-label="Main navigation">
            <a href="#work">Projects</a>
            <ContactLinks compact />
          </nav>
        </header>

        <main>
          <section className="intro" aria-labelledby="intro-title">
            <div>
              <p className="eyebrow intro-kicker">Computer science student at Cornell</p>
              <h1 id="intro-title">Enzo Hiu<span>.</span></h1>
            </div>
            <div className="intro-note">
              <p>I build web applications<br />and work on mobile products.</p>
              <p className="intro-description">My projects include apps for reserving study rooms, checking gym schedules, tracking collections, and managing job applications.</p>
              <a href="#work" className="text-link">View projects <span className="arrow-down"><Arrow /></span></a>
            </div>
          </section>

          <section id="work" aria-labelledby="work-title" className="work-section">
            <div className="section-heading">
              <h2 id="work-title">Selected projects</h2>
              <span className="eyebrow">Web and iOS applications <span className="work-count">{String(iosProjects.length + webProjects.length).padStart(2, "0")}</span></span>
            </div>
            <div className="app-grid">
              {iosProjects.map((project) => <IosAppCard key={project.title} project={project} />)}
            </div>
            <div className="web-projects">
              {featuredWebProjects.map((project, index) => <WebsiteCard key={project.title} project={project} index={`0${index + 3}`} />)}
            </div>
            <div className="other-projects">
              {otherProjects.map((project, index) => <WebsiteCard key={project.title} project={project} index={`0${index + 5}`} />)}
            </div>
          </section>

          <section className="contact-section" aria-labelledby="contact-title">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Get in touch</h2>
            <p className="contact-description">Email me about a project, a role, or a question about my work.</p>
            <ContactLinks />
          </section>
        </main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Enzo Hiu</span>
          <a href="#top">Back to top <span className="arrow-up"><Arrow /></span></a>
        </footer>
      </div>
    </>
  );
}
