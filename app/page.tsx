import type { Metadata } from "next";
import Ariella from "./components/Ariella";
import NavBar from "./components/NavBar";
import History from "./components/History";
import { MediaQueryProvider } from "./context/responsive";
import Irpinia from "./components/Irpinia";
import Contattaci from "./components/Contattaci";
import Footer from "./components/Footer";
import SmootherInit from "./components/SmootherInit";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ariella – Olio Extravergine d'Oliva 100% Italiano",
  description:
    "Blend medio fruttato di Olivella di Grottaminarda, Ogliarola e Leccino, con sentori di pomodoro acerbo, erba verde e mandorla fresca. Prodotto in Irpinia.",
  image: [`${SITE_URL}/media/bottle.png`, `${SITE_URL}/media/olio-1012.jpg`],
  url: SITE_URL,
  brand: { "@type": "Brand", name: "Ariella" },
  manufacturer: { "@id": `${SITE_URL}/#organization` },
  category: "Olio extravergine d'oliva",
  countryOfOrigin: "IT",
};

export default function Home() {
  return (
    <MediaQueryProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className=" min-h-screen  bg-zinc-50 font-sans ">
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <SmootherInit />
            <main className="items-center min-h-screen  w-screen bg-black ">
              <Ariella />
              <History />
              <Irpinia />
              <Contattaci />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </MediaQueryProvider>
  );
}
