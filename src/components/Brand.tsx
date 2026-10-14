import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return <Link href="/" aria-label="Azultech Engenharia — início" className="original-brand">
    <Image src="/logo-original.png" alt="Azultech Engenharia" width={685} height={308} priority className="h-[52px] w-auto" />
  </Link>;
}
