'use client';
import Image from 'next/image';

const socials = [
    {
        name: 'Instagram',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-black py-12 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo */}
                <Image
                    src="/media/logo.svg"
                    width={32}
                    height={32}
                    alt="logo"
                />

                {/* Copyright */}
                <p className="text-[#9e9e9e] text-xs tracking-widest uppercase font-light text-center">
                    © {new Date().getFullYear()} Oleificio Minichiello. Tutti i diritti riservati.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-6">
                    {socials.map(({ name, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            aria-label={name}
                            className="text-[#9e9e9e] hover:text-[#D6AB5D] transition-colors duration-300"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
