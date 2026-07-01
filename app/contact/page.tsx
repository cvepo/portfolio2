import TopBar from "@/components/TopBar";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const links = [
  { label: "email", value: "hi@enzohiu.com", href: "mailto:hi@enzohiu.com", Icon: Mail },
  { label: "linkedin", value: "@hiuenzo", href: "https://linkedin.com/in/hiuenzo", Icon: Linkedin },
  { label: "github", value: "github.com/enzohiu", href: "https://github.com/enzohiu", Icon: Github },
  { label: "instagram", value: "@hiuenzo", href: "https://instagram.com/hiuenzo", Icon: Instagram },
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      <TopBar left="← index" leftHref="/" right="contact" />

      <div className="max-w-page mx-auto px-6 pt-12 pb-2">
        <h1 className="font-display font-semibold text-4xl text-ink mb-2">
          Let&apos;s talk.
        </h1>
        <p className="font-sans text-sm text-body max-w-[380px] leading-relaxed">
          Reach out about roles, projects, or anything else — I&apos;ll get
          back to you.
        </p>
      </div>

      <div className="max-w-page mx-auto px-6 pt-10 pb-16">
        <div className="border-t border-hairline">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-between py-3.5 border-b border-hairline"
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
    </main>
  );
}
