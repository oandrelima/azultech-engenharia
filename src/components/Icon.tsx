import type { SVGProps } from "react";
const paths = {
  check: "m5 12 4 4L19 6", arrow: "M4 12h16m-6-6 6 6-6 6",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z",
  mail: "M3 5h18v14H3z m0 0 9 8 9-8", pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  clock: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0 M12 6v6l4 2",
  structure: "M3 21V3h18v18M3 12h18M8 3v18M16 3v18M1 21h22",
  chevron: "m6 9 6 6 6-6", menu: "M4 6h16M4 12h16M4 18h16", close: "m6 6 12 12M6 18 18 6",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5 M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17.5 6.5h.01",
};
export function Icon({ name, className = "h-5 w-5", ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
