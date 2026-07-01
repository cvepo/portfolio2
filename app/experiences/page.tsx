import TopBar from "@/components/TopBar";
import { currentRoles, previousRoles } from "@/data/experience";

function RoleList({ items }: { items: { role: string; date: string }[] }) {
  return (
    <div className="border-t border-hairline">
      {items.map((item) => (
        <div
          key={item.role}
          className="flex justify-between gap-4 py-3 border-b border-hairline"
        >
          <span className="font-sans text-[13px] text-ink">{item.role}</span>
          <span className="font-mono text-xs text-warmgray shrink-0">
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Experiences() {
  return (
    <main className="min-h-screen">
      <TopBar left="← index" leftHref="/" right="experiences" />

      <div className="max-w-page mx-auto px-6 pt-9 pb-8">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
          Experiences
        </h1>
      </div>

      <div className="max-w-page mx-auto px-6 pb-8">
        <p className="font-mono text-[11px] text-warmgray mb-3">current</p>
        <RoleList items={currentRoles} />
      </div>

      {previousRoles.length > 0 && (
        <div className="max-w-page mx-auto px-6 pb-16">
          <p className="font-mono text-[11px] text-warmgray mb-3">previous</p>
          <RoleList items={previousRoles} />
        </div>
      )}

      {previousRoles.length === 0 && <div className="pb-16" />}
    </main>
  );
}
