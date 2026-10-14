import Image from "next/image";
import Link from "next/link";
export function Brand() {
  return <Link href="/" aria-label="Azultech Engenharia — início" className="brand-lockup">
    <span className="brand-symbol"><Image src="/logo.png" alt="" width={685} height={308} priority /></span>
    <span className="brand-wordmark">azultech<span>ENGENHARIA</span></span>
  </Link>;
}
