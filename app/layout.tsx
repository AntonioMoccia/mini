import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL, LOGO_PNG, OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleificio Minichiello",
    template: "%s | Oleificio Minichiello",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "olio extravergine d'oliva",
    "olio evo Irpinia",
    "olio Grottaminarda",
    "Olivella di Grottaminarda",
    "Ogliarola",
    "Leccino",
    "olio 100% italiano",
    "frantoio Irpinia",
    "Oleificio Minichiello",
    "Ariella",
  ],
  authors: [{ name: "Oleificio Minichiello" }],
  creator: "Oleificio Minichiello",
  publisher: "Oleificio Minichiello",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: SITE_NAME,
    title: "Oleificio Minichiello – Olio Extravergine d'Oliva Ariella dell'Irpinia",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleificio Minichiello – Olio Extravergine d'Oliva Ariella dell'Irpinia",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  appleWebApp: { title: SITE_NAME },
  // Codice di verifica Google Search Console (variabile d'ambiente, opzionale)
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: "food",
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Oleificio Minichiello",
      alternateName: "Ariella",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${LOGO_PNG.url}`,
        width: LOGO_PNG.width,
        height: LOGO_PNG.height,
      },
      image: `${SITE_URL}${OG_IMAGE.url}`,
      email: CONTACT_EMAIL,
      foundingDate: "1976",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Grottaminarda",
        addressRegion: "AV",
        addressCountry: "IT",
      },
      sameAs: [SOCIAL_LINKS.facebook],
      brand: { "@type": "Brand", name: "Ariella" },
      knowsAbout: ["Olio extravergine d'oliva", "Molitura a freddo", "Olivella di Grottaminarda", "Ogliarola", "Leccino"],
      areaServed: { "@type": "AdministrativeArea", name: "Irpinia" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "Ariella",
      inLanguage: "it-IT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
