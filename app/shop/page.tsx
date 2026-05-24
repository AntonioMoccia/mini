'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { MediaQueryProvider } from '../context/responsive';

export default function Shop() {
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <MediaQueryProvider>
            <div className="min-h-screen bg-black flex flex-col">
                <NavBar />

                <main className="flex-1 flex items-center justify-center px-5">
                    <div ref={contentRef} className="max-w-2xl text-center">
                        <p className="text-xs tracking-widest uppercase text-[#D6AB5D] font-light mb-6">
                            Shop
                        </p>
                        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8">
                            Arriverà presto.
                        </h1>
                        <p className="text-white/70 font-light leading-relaxed mb-12">
                            Stiamo preparando con cura il nostro shop online per portare l&apos;olio
                            Ariella direttamente a casa tua. Torna a trovarci tra poco.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex flex-col items-center gap-1 group"
                        >
                            <span className="text-xs tracking-widest uppercase font-light text-white group-hover:text-[#D6AB5D] transition-colors duration-300">
                                Torna alla home
                            </span>
                            <span className="block h-[1.5px] w-full bg-[#D6AB5D]" />
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        </MediaQueryProvider>
    );
}
