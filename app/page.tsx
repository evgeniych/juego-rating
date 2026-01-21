import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CasinoRanking } from "@/components/casino-ranking";
import { GuideSection } from "@/components/guide-section";
import { ComparisonTable } from "@/components/comparison-table";
import { PaymentMethods } from "@/components/payment-methods";
import { SecuritySection } from "@/components/security-section";
import { ResponsibleGaming } from "@/components/responsible-gaming";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollToTop } from "@/components/scroll-to-top";
import { AgeVerification } from "@/components/age-verification";
import { casinos } from "@/lib/casinos-data";

// JSON-LD Structured Data for SEO
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JuegoRating",
    url: "https://juegorating.site",
    description: "Comparamos bonos, licencias, pagos y juegos de los casinos legales en Colombia.",
    publisher: {
      "@type": "Organization",
      name: "JuegoRating",
      logo: {
        "@type": "ImageObject",
        url: "https://juegorating.site/logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://juegorating.site/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mejores Casinos Online en Colombia 2026",
    description: "Ranking de los mejores casinos online legales en Colombia",
    numberOfItems: casinos.length,
    itemListElement: casinos.slice(0, 10).map((casino, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: casino.name,
        url: `https://juegorating.site/casino/${casino.slug}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: casino.rating,
          bestRating: "5",
          worstRating: "1",
          ratingCount: casino.reviewCount || 100,
        },
      },
    })),
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Son legales los casinos online en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si, los casinos online son legales en Colombia siempre que tengan licencia de Coljuegos, la autoridad reguladora oficial del pais.",
        },
      },
      {
        "@type": "Question",
        name: "Como elegir el mejor casino online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Verifica que tenga licencia de Coljuegos, compara bonos y sus requisitos de apuesta, revisa los metodos de pago disponibles y lee opiniones de otros jugadores.",
        },
      },
      {
        "@type": "Question",
        name: "Cuanto tiempo tardan los retiros en casinos online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los tiempos varian segun el metodo: billeteras digitales como Nequi procesan en 24-48 horas, mientras que transferencias bancarias pueden tomar 24-72 horas.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <CasinoRanking />
          <GuideSection />
          <ComparisonTable />
          <PaymentMethods />
          <SecuritySection />
          <CTABanner />
          <ResponsibleGaming />
        </main>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
        <AgeVerification />
      </div>
    </>
  );
}
