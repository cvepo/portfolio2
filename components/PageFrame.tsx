import { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
  wide?: boolean;
};

export default function PageFrame({ children, wide = false }: PageFrameProps) {
  return (
    <main className="min-h-screen">
      <div className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-page"}`}>
        {children}
      </div>
    </main>
  );
}
