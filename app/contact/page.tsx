import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import { Mail, Linkedin, Github, Instagram, Calendar } from "lucide-react";

const links = [
  {
    label: "email",
    value: "emh274@cornell.edu",
    href: "mailto:emh274@cornell.edu",
    Icon: Mail,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/enzo-hiu",
    href: "https://linkedin.com/in/enzo-hiu-123750245",
    Icon: Linkedin,
  },
  {
    label: "github",
    value: "github.com/cvepo",
    href: "https://github.com/cvepo",
    Icon: Github,
  },
  {
    label: "calendly",
    value: "book a chat",
    href: "https://calendly.com/enzohiu06/30min",
    Icon: Calendar,
  },
  {
    label: "instagram",
    value: "@hiuenzo",
    href: "https://instagram.com/hiuenzo",
    Icon: Instagram,
  },
];

export default function Contact() {
  return (
    <PageFrame>
      <TopBar left="← index" leftHref="/" right="contact" />

      <div className="px-6 sm:px-8 pt-8 pb-4">
        <h1 className="font-display font-semibold text-4xl text-ink mb-3">
          Let&apos;s talk.
        </h1>
        <p className="font-sans text-sm text-body max-w-[380px] leading-relaxed">
          Open to conversations about software, sports, or anything else —
          reach out anytime.
        </p>
      </div>

      <div className="px-6 sm:px-8 pt-8 pb-20">
        <div className="border-t border-hairline">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between py-4 border-b border-hairline"
            >
              <span className="flex items-center gap-2.5 font-mono text-sm text-ink">
                <Icon size={16} className="text-warmgray" strokeWidth={1.5} />
                {label}
              </span>
              <span className="font-mono text-[13px] text-plum group-hover:text-ink transition-colors">
                {value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
