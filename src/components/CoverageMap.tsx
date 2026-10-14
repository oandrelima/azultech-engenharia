"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Circle } from "leaflet";
import { company } from "~/lib/company";
import { coverage } from "~/lib/coverage";

export function CoverageMap() {
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const circle = useRef<Circle | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let disposed = false;
    let observer: ResizeObserver | undefined;
    import("leaflet").then(L => {
      if (disposed || !container.current) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const instance = L.map(container.current, { center: coverage.center, zoom: 10, zoomControl: false, scrollWheelZoom: false, zoomSnap: .25, dragging: !L.Browser.mobile, zoomAnimation: !reducedMotion, fadeAnimation: !reducedMotion });
      L.control.zoom({ zoomInTitle: "Aproximar", zoomOutTitle: "Afastar" }).addTo(instance);
      map.current = instance;
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(instance);
      const area = L.circle(coverage.center, {
        radius: coverage.radiusKm * 1000, color: "#f97316", weight: 2,
        fillColor: "#0c3561", fillOpacity: .13, dashArray: "6 7",
      }).addTo(instance);
      circle.current = area;
      L.circleMarker(coverage.center, { radius: 8, color: "#fff", weight: 3, fillColor: "#f97316", fillOpacity: 1 })
        .addTo(instance).bindTooltip("Azultech Engenharia", { direction: "top" });
      instance.fitBounds(area.getBounds(), { padding: [22,22] });
      observer = new ResizeObserver(() => {
        instance.invalidateSize();
        instance.fitBounds(area.getBounds(), { padding: [22,22], animate: false });
      });
      observer.observe(container.current);
    }).catch(error => { console.error("Coverage map initialization failed", error); if (!disposed) setError(true); });
    return () => { disposed = true; observer?.disconnect(); map.current?.remove(); map.current = null; };
  }, []);

  function reset() {
    if (map.current && circle.current) map.current.fitBounds(circle.current.getBounds(), { padding: [22,22] });
  }

  return <div className="coverage-map-shell">
    <div ref={container} className="coverage-map" role="region" aria-label={`Mapa com raio de referência de ${coverage.radiusKm} km a partir da Azultech Engenharia`} data-radius-km={coverage.radiusKm} />
    <div className="coverage-map-footer">
      <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" />Sede no Jardim Umarizal</span>
      <button type="button" onClick={reset} className="font-semibold text-[#0c3561] underline-offset-4 hover:underline">Ver área completa</button>
    </div>
    {error && <p className="p-4 text-sm text-slate-600">Não foi possível carregar o mapa. <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer" className="underline">Ver localização</a></p>}
  </div>;
}

