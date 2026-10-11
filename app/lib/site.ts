// Dati centrali del sito usati per metadata, sitemap e dati strutturati.
// Imposta NEXT_PUBLIC_SITE_URL in produzione con il dominio definitivo.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.oleificiominichiello.it').replace(/\/$/, '');

export const SITE_NAME = 'Oleificio Minichiello';

export const SITE_DESCRIPTION =
    "Ariella è l'olio extravergine d'oliva 100% italiano dell'Oleificio Minichiello: un blend di Olivella di Grottaminarda, Ogliarola e Leccino, prodotto in Irpinia dal 1976.";

export const OG_IMAGE = {
    url: '/media/og-ariella.jpg',
    width: 1200,
    height: 630,
    alt: "Ariella – olio extravergine d'oliva dell'Irpinia, Oleificio Minichiello",
};

// Logo raster per Google (non accetta SVG nei dati strutturati)
export const LOGO_PNG = { url: '/ms-icon-310x310.png', width: 310, height: 310 };

export const CONTACT_EMAIL = 'info@oleificiominichiello.it';

export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/share/191GXzLYB8/?mibextid=wwXIfr',
};
