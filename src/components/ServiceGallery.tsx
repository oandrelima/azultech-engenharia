"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "./Icon";

export function ServiceGallery({ title, images }: { title: string; images: { src: string; illustrative: boolean }[] }) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const next = (index + images.length) % images.length;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.current?.scrollTo({ left: next * track.current.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  }

  function onKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
  }

  return <section className="service-gallery" aria-label={"Fotos de " + title} aria-roledescription="carrossel">
    <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
      <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-orange-600">Inspiração para o seu projeto</p><h2 className="mt-1 text-lg font-bold text-slate-900">Veja os detalhes</h2></div>
      <div className="flex gap-2">
        <button type="button" aria-label="Foto anterior" aria-controls={id} onClick={() => goTo(active - 1)} className="gallery-arrow"><Icon name="chevron" className="h-5 w-5 rotate-90" /></button>
        <button type="button" aria-label="Próxima foto" aria-controls={id} onClick={() => goTo(active + 1)} className="gallery-arrow"><Icon name="chevron" className="h-5 w-5 -rotate-90" /></button>
      </div>
    </div>
    <div ref={track} id={id} tabIndex={0} onKeyDown={onKey} className="gallery-track"
      onScroll={() => { if (track.current) setActive(Math.min(images.length - 1, Math.round(track.current.scrollLeft / track.current.clientWidth))); }}>
      {images.map((photo, index) => <figure key={photo.src} className="gallery-slide" role="group" aria-label={`Foto ${index + 1} de ${images.length}`}>
        <Image src={photo.src} alt={`${title} — foto ${index + 1}`} fill quality={90} sizes="(max-width: 1023px) 100vw, 65vw" className="object-cover" />
      </figure>)}
    </div>
    <div className="flex items-center gap-3 px-5 py-4 sm:px-6">
      <div className="flex flex-1 gap-2">{images.map((photo, i) => <button type="button" key={photo.src} aria-label={`Ver foto ${i+1}`} aria-current={active === i ? "true" : undefined} onClick={() => goTo(i)} className={`gallery-thumb ${active === i ? "is-active" : ""}`}>
        <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" />
      </button>)}</div>
      <span className="text-xs tabular-nums text-slate-500" aria-live="polite">{String(active + 1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span>
    </div>
  </section>;
}
