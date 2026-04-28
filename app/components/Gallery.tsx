'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type GalleryImage = { src: string; alt: string };

interface GalleryProps {
    images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const prev = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    }, [images.length]);

    const next = useCallback(() => {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
    }, [images.length]);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, prev, next]);

    // lock body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    return (
        <>
            {/* Grid */}
            <div className="columns-2 md:columns-3 gap-3 space-y-3">
                {images.map((img, i) => (
                    <div
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="break-inside-avoid relative overflow-hidden cursor-pointer group rounded-sm"
                    >
                        <div className="relative w-full">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        {/* hover overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Image */}
                    <div
                        className="relative max-w-5xl w-full mx-4 max-h-[85vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[lightboxIndex].src}
                            alt={images[lightboxIndex].alt}
                            width={1200}
                            height={900}
                            className="max-h-[85vh] w-auto object-contain rounded-sm"
                        />
                    </div>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        <ChevronRight size={40} strokeWidth={1} />
                    </button>

                    {/* Close */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white hover:rotate-90 transition-all duration-200 cursor-pointer"
                    >
                        <X size={28} strokeWidth={1.5} />
                    </button>

                    {/* Counter */}
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
                        {lightboxIndex + 1} / {images.length}
                    </p>
                </div>
            )}
        </>
    );
}
