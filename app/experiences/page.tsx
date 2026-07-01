import PageFrame from "@/components/PageFrame";
import TopBar from "@/components/TopBar";
import { currentRoles, previousRoles } from "@/data/experience";

function RoleList({ items }: { items: { role: string; date: string }[] }) {
  return (
    <div className="border-t border-hairline">
      {items.map((item) => (
        <div
          key={item.role}
          className="flex justify-between gap-4 py-3.5 border-b border-hairline"
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
    <PageFrame>
      <TopBar left="← index" leftHref="/" right="experiences" />

      <div className="px-6 sm:px-8 pt-6 pb-10">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
          Experiences
        </h1>
      </div>

      <div className="px-6 sm:px-8 pb-10">
        <p className="font-mono text-[11px] text-warmgray mb-3">current</p>
        <RoleList items={currentRoles} />
      </div>

      {previousRoles.length > 0 && (
        <div className="px-6 sm:px-8 pb-20">
          <p className="font-mono text-[11px] text-warmgray mb-3">previous</p>
          <RoleList items={previousRoles} />
        </div>
      )}

      {previousRoles.length === 0 && <div className="pb-20" />}
    </PageFrame>
  );
}
