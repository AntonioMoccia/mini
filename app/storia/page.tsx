'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { MediaQueryProvider } from '../context/responsive';
import Gallery, { GalleryImage } from '../components/Gallery';

const galleryOliveti: GalleryImage[] = [
    { src: '/media/GBI01622.jpg', alt: 'Oliveto 1' },
    { src: '/media/GBI01691.jpg', alt: 'Oliveto 2' },
    { src: '/media/olio-1012.jpg', alt: 'Oliveto 3' },
];

const galleryProduzione: GalleryImage[] = [
    { src: '/media/history_image.jpg', alt: 'Produzione 1' },
    { src: '/media/hero-bg.png', alt: 'Produzione 2' },
    { src: '/media/bottle_with_olive.png', alt: 'Produzione 3' },
];

export default function Storia() {
    const headingRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <MediaQueryProvider>
            <div className="min-h-screen bg-black flex flex-col">
                <NavBar />

                <main className="flex-1 py-32 flex flex-col items-center">
                    <div className="w-full md:w-[80vw] max-w-[1442px] px-5">

                        {/* Heading */}
                        <div ref={headingRef} className="mb-16">
                            <p className="text-xs tracking-widest uppercase text-[#D6AB5D] font-light mb-4">
                                La nostra storia
                            </p>
                            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
                                Radici, famiglia<br />e territorio.
                            </h1>
                        </div>

                        {/* Prima gallery */}
                        <section className="mb-20">
                            <h2 className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light mb-8">
                                I nostri oliveti
                            </h2>
                            <Gallery images={galleryOliveti} />
                        </section>

                        {/* Testo intermedio */}
                        <section className="mb-20 max-w-xl">
                            <p className="text-white/70 font-light leading-relaxed">
                                Tutto nasce da una famiglia e da un pezzo di terra che profuma di ulivi e vento.
                                Tre generazioni di mani che hanno imparato a leggere il frutto prima ancora di raccoglierlo,
                                a rispettare i ritmi della natura senza mai forzarli.
                            </p>
                        </section>

                        {/* Seconda gallery */}
                        <section className="mb-20">
                            <h2 className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light mb-8">
                                La produzione
                            </h2>
                            <Gallery images={galleryProduzione} />
                        </section>

                    </div>
                </main>

                <Footer />
            </div>
        </MediaQueryProvider>
    );
}
