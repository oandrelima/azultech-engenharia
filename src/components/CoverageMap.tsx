import { company, googleMapsEmbedUrl } from "~/lib/company";
import { coverage } from "~/lib/coverage";

// Fixed Google embed: keeping its viewport fixed also keeps the radius aligned
// with the map's Web Mercator scale. Full interaction is available at the link.
export function CoverageMap() {
  const zoom = 10;
  const metersPerPixel = 156543.03392804097 * Math.cos(coverage.center[0] * Math.PI / 180) / 2 ** zoom;
  const diameter = coverage.radiusKm * 2000 / metersPerPixel;
  const location = coverage.center.join(",");
  return <div className="coverage-map-shell">
    <div className="coverage-map" role="region" aria-label={`Mapa Google com raio de ${coverage.radiusKm} km a partir da Azultech Engenharia`} data-radius-km={coverage.radiusKm}>
      <iframe src={googleMapsEmbedUrl(location, zoom)} title="Área de atendimento da Azultech Engenharia" className="h-full w-full border-0 pointer-events-none" tabIndex={-1} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div aria-hidden="true" className="coverage-radius" style={{ width: diameter, height: diameter }}><span>{coverage.radiusKm} km</span></div>
    </div>
    <div className="coverage-map-footer">
      <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" />Sede no Jardim Umarizal</span>
      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0c3561] underline-offset-4 hover:underline">Explorar no Google Maps ↗</a>
    </div>
  </div>;
}
