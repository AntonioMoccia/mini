import type { Metadata } from 'next';
import { OG_IMAGE } from '../lib/site';

const title = 'Shop';
const description =
    "Lo shop online di Ariella è in arrivo: presto potrai acquistare l'olio extravergine d'oliva dell'Irpinia direttamente dall'Oleificio Minichiello.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/shop' },
    openGraph: { locale: 'it_IT', url: '/shop', title: `${title} | Oleificio Minichiello`, description, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: `${title} | Oleificio Minichiello`, description, images: [OG_IMAGE.url] },
    // Pagina "in arrivo": contenuto troppo scarno per l'indice. Rimuovere quando lo shop è online.
    robots: { index: false, follow: true },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return children;
}
