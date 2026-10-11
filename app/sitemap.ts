import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
            images: [`${SITE_URL}/media/bottle.png`, `${SITE_URL}/media/olio-1012.jpg`, `${SITE_URL}/media/GBI01691.jpg`],
        },
        {
            url: `${SITE_URL}/storia`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.8,
            images: [
                `${SITE_URL}/media/old/GBI05355.jpg`,
                `${SITE_URL}/media/new/GBI05337.jpg`,
                `${SITE_URL}/media/new/GBI05400.jpg`,
                `${SITE_URL}/media/new/GBI05410.jpg`,
            ],
        },
    ];
}
