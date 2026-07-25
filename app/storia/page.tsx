'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { MediaQueryProvider } from '../context/responsive';
import Image from 'next/image';
import Gallery, { GalleryImage } from '../components/Gallery';

const galleryNuovoFrantoio: GalleryImage[] = [
    { src: '/media/new/GBI05337.jpg', alt: 'Nuovo frantoio 1' },
    { src: '/media/new/GBI05400.jpg', alt: 'Nuovo frantoio 2' },
    { src: '/media/new/GBI05410.jpg', alt: 'Nuovo frantoio 3' },
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

                        {/* Il vecchio frantoio */}
                        <section className="mb-20">
                            <h2 className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light mb-8">
                                Il vecchio frantoio
                            </h2>

                            <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="relative w-full aspect-4/5 overflow-hidden rounded-sm">
                                        <Image
                                            src="/media/old/GBI05355.jpg"
                                            alt="Il vecchio frantoio di famiglia"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-6">
                                    <h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-6">
                                        Dove tutto è cominciato.
                                    </h3>
                                    <p className="text-white/70 font-light leading-relaxed mb-4">
                                        La nostra storia nasce negli anni ’70, nel cuore dell’Irpinia.
                                        Due fratelli, Nunziante e Onofrio, profondamente legati alla loro terra, scelgono di valorizzarne uno dei tesori più autentici: l’olivo. Acquistano nuovi oliveti e puntano su cultivar autoctone, con un obiettivo chiaro: trasformare la tradizione irpina in un olio di eccellenza.
                                    </p>
                                    <p className="text-white/70 font-light leading-relaxed">
                                        Nel 1976 aprono uno dei primi frantoi della zona, mettendo passione e competenza al servizio della comunità. Da quel momento, la crescita è continua: nuovi impianti, tecnologie sempre più evolute e una conoscenza che si affina anno dopo anno.
                                    </p>
                                </div>
                            </div>

                        </section>

                        {/* Il nuovo frantoio */}
                        <section className="mb-20">
                            <h2 className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light mb-8">
                                Il nuovo frantoio
                            </h2>

                            <div className="max-w-3xl mb-10">
                                <h3 className="text-2xl md:text-4xl font-light text-white leading-tight mb-6">
                                    Tradizione che incontra l&apos;innovazione.
                                </h3>
                                <p className="text-white/70 font-light leading-relaxed mb-4">
                                    Nel 2019, tradizione e innovazione si incontrano con l’installazione dell’impianto di molitura a freddo per centrifugazione, per garantire un olio ancora più puro, profumato e di alta qualità.
                                </p>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Nel 2025 abbiamo fatto un passo in più: racchiudere l’essenza dell’Irpinia in una bottiglia, portando sulla vostra tavola un olio che racconta territorio, famiglia e passione.
                                </p>
                            </div>

                            <Gallery images={galleryNuovoFrantoio} />
                        </section>

                    </div>
                </main>

                <Footer />
            </div>
        </MediaQueryProvider>
    );
}
