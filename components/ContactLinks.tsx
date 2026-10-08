import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import CopyEmail from "@/components/CopyEmail";
import { links } from "@/data/portfolio";

export default function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-links ${compact ? "contact-links-compact" : ""}`}>
      <a className="social-button" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" title="GitHub">
        <Github size={20} strokeWidth={1.7} aria-hidden="true" />
        {!compact ? <span>GitHub</span> : null}
      </a>
      <a className="social-button" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" title="LinkedIn">
        <Linkedin size={20} strokeWidth={1.7} aria-hidden="true" />
        {!compact ? <span>LinkedIn</span> : null}
      </a>
      <CopyEmail email={links.email} compact={compact}>
        <Image src="/gmail.png" alt="" width={24} height={24} unoptimized aria-hidden="true" />
      </CopyEmail>
    </div>
  );
}
