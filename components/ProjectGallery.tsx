"use client";

import Image from "next/image";
import { useState } from "react";
import type { WebShot } from "@/data/portfolio";

export default function ProjectGallery({ title, images }: { title: string; images: WebShot[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="project-gallery">
      <div className="gallery-toolbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <div className="gallery-controls" role="group" aria-label={`${title} screenshots`}>
          {images.map((shot, index) => (
            <button key={shot.src} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>
              {shot.label}
            </button>
          ))}
        </div>
        <span className="gallery-count" aria-hidden="true">0{active + 1} / 0{images.length}</span>
      </div>
      <div className="gallery-stage" aria-live="polite" aria-atomic="true">
        <Image
          key={images[active].src}
          src={images[active].src}
          alt={images[active].alt ?? `${title} — ${images[active].label}`}
          width={images[active].width}
          height={images[active].height}
          // Serve the original JPGs: Next's default q=75 WebP re-encode smears the small UI text.
          unoptimized
          className="gallery-image"
        />
      </div>
    </div>
  );
}
