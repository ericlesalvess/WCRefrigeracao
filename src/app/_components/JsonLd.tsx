export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "WC Refrigeração e Climatização",
    alternateName: [
      "WC Refrigeração",
      "WC Ar-Condicionado",
      "WC Climatização",
    ],
    description:
      "Especialistas em ar-condicionado em Valença e região. Instalação, desinstalação, manutenção preventiva e corretiva, higienização com bolsa coletora e infraestrutura para residências, comércios, empresas, hospitais e laboratórios.",
    url: "https://www.wcrefrigeracao.com.br",
    telephone: "+55-24-99276-4964",
    logo: "https://www.wcrefrigeracao.com.br/logo.png",
    image: "https://www.wcrefrigeracao.com.br/og-image.jpg",
    priceRange: "$$",
    knowsAbout: [
      "Ar-condicionado Split",
      "Ar-condicionado Cassete",
      "Ar-condicionado Piso-Teto",
      "Instalação de ar-condicionado",
      "Manutenção de ar-condicionado",
      "Higienização de ar-condicionado com bolsa coletora",
      "Infraestrutura de climatização",
    ],
    areaServed: [
      { "@type": "City", name: "Valença" },
      { "@type": "City", name: "Conservatória" },
      { "@type": "City", name: "Rio das Flores" },
      { "@type": "City", name: "Barra do Piraí" },
      { "@type": "City", name: "Vassouras" },
      { "@type": "AdministrativeArea", name: "Região Sul Fluminense, RJ" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valença",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Ar-Condicionado e Climatização",
      itemListElement: [
        "Instalação de ar-condicionado Split, Cassete e Piso-Teto",
        "Desinstalação de ar-condicionado",
        "Manutenção preventiva de ar-condicionado",
        "Manutenção corretiva e conserto de ar-condicionado",
        "Higienização completa de ar-condicionado",
        "Higienização de ar-condicionado na bolsa coletora",
        "Projeto e infraestrutura de climatização",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}