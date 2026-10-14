import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

interface ServiceCardProps {
  service: { slug: string; title: string; shortDescription: string; imageUrl: string; categoryName: string };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return <Link href={`/servicos/${service.slug}`} className="service-card">
    <div className="service-card-photo">
      <Image src={service.imageUrl} alt={service.title} fill quality={85} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover" />
      <span className="service-card-category">{service.categoryName}</span>
    </div>
    <div className="service-card-body">
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      <span className="service-card-link">Conhecer serviço <span className="service-card-arrow"><Icon name="arrow" className="h-4 w-4" /></span></span>
    </div>
  </Link>;
}
