import type { Metadata } from 'next';
import { OG_IMAGE, SITE_URL } from '../lib/site';

const title = 'La nostra storia';
const description =
    "Dal 1976 l'Oleificio Minichiello produce olio extravergine d'oliva a Grottaminarda, in Irpinia. Tre generazioni, cultivar autoctone e molitura a freddo: la storia dietro Ariella.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/storia' },
    openGraph: {
        type: 'website',
        locale: 'it_IT',
        url: '/storia',
        title: `${title} | Oleificio Minichiello`,
        description,
        images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: `${title} | Oleificio Minichiello`, description, images: [OG_IMAGE.url] },
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'AboutPage',
            '@id': `${SITE_URL}/storia#webpage`,
            url: `${SITE_URL}/storia`,
            name: `${title} | Oleificio Minichiello`,
            description,
            inLanguage: 'it-IT',
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#organization` },
            primaryImageOfPage: `${SITE_URL}/media/old/GBI05355.jpg`,
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}/storia` },
            ],
        },
    ],
};

export default function StoriaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
