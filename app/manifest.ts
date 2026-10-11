import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_NAME } from './lib/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: 'Oleificio Minichiello',
        description: SITE_DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        lang: 'it',
        icons: [
            { src: '/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
            { src: '/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
            { src: '/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
            { src: '/android-icon-96x96.png', sizes: '96x96', type: 'image/png' },
            { src: '/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
            { src: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
    };
}
