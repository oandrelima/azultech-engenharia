export const company = {
  companyName: "Azultech Engenharia Ltda", tradeName: "Azultech Engenharia",
  cnpj: "28.366.602/0001-86", founded: "2017-08-08", foundedLabel: "8 de agosto de 2017",
  phone: "(11) 93921-7592", whatsapp: "5511939217592", email: "contato@azultechengenharia.com.br",
  address: "Avenida Anacé, 136, Jardim Umarizal, São Paulo – SP",
  street: "Avenida Anacé", number: "136", neighborhood: "Jardim Umarizal", city: "São Paulo", state: "SP", cep: "05755-090",
  instagram: "https://www.instagram.com/azultechengenharia", website: "https://www.azultechengenharia.com.br/",
  paymentMethods: "Parcelamento em até 18x sem juros no cartão. Consulte as condições para o seu projeto.",
  workingHours: "Consulte a disponibilidade pelo WhatsApp.",
  coverageNeighborhoods: ["Campo Limpo", "Taboão da Serra", "Itapecerica da Serra", "Morumbi", "Butantã", "Lapa", "Vila Leopoldina", "Osasco", "Cotia", "Granja Viana", "Capão Redondo", "Santo Amaro", "Brooklin", "Berrini", "Vila Olímpia", "Moema", "Vila Nova Conceição", "Vila Mariana", "Saúde", "Paraíso", "Ipiranga", "Jabaquara", "Brás", "Bom Retiro", "Centro"],
};
export const googleMapsEmbedUrl = (query: string, zoom = 16) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}${/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(query) ? `&ll=${encodeURIComponent(query)}` : ""}&z=${zoom}&output=embed`;
export const mapsUrl = googleMapsEmbedUrl(company.address + ", " + company.cep);
export const organizationSchema = {
  "@context": "https://schema.org", "@type": "GeneralContractor", "@id": company.website + "#organization",
  name: company.tradeName, legalName: company.companyName, taxID: company.cnpj, foundingDate: company.founded,
  url: company.website, telephone: company.phone, email: company.email, sameAs: [company.instagram],
  address: { "@type": "PostalAddress", streetAddress: company.street + ", " + company.number, addressLocality: company.city, addressRegion: company.state, postalCode: company.cep, addressCountry: "BR" },
  areaServed: company.coverageNeighborhoods,
};
