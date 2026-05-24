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
    { src: '/media/GBI01622.jpg', alt: 'Nuovo frantoio 1' },
    { src: '/media/GBI01691.jpg', alt: 'Nuovo frantoio 2' },
    { src: '/media/olio-1012.jpg', alt: 'Nuovo frantoio 3' },
    { src: '/media/hero-bg.png', alt: 'Nuovo frantoio 4' },
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
                                            src="/media/history_image.jpg"
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
                                        Il vecchio frantoio è il cuore antico della nostra famiglia. Tra mura
                                        di pietra e macine in granito, generazioni di Minichiello hanno premuto
                                        le olive raccolte a mano sulle colline di Grottaminarda, custodendo
                                        un sapere tramandato senza fretta, di padre in figlio.
                                    </p>
                                    <p className="text-white/70 font-light leading-relaxed">
                                        Ogni gesto era misurato, ogni stagione un rito. Qui è nata l&apos;idea
                                        di un olio che non fosse soltanto un prodotto, ma il racconto di una
                                        terra e delle persone che la abitano.
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
                                    Il nuovo frantoio nasce dall&apos;esigenza di proteggere ciò che la natura
                                    ci offre, senza tradire il gesto antico. Tecnologie a ciclo continuo e a
                                    bassa temperatura ci permettono di estrarre l&apos;olio entro poche ore
                                    dalla raccolta, preservando aromi, polifenoli e la freschezza del frutto.
                                </p>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Acciaio, controllo della temperatura e attenzione maniacale ad ogni
                                    passaggio: la stessa cura che metteva nostro nonno, raccontata oggi con
                                    il linguaggio della precisione. Perché il rispetto per la materia prima
                                    non conosce epoca.
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
