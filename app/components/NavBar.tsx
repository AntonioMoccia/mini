'use client';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/all'

const socialLinks = [
    {
        name: 'Instagram',
        href: '#',
        hidden: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/191GXzLYB8/?mibextid=wwXIfr',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
    },
];

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const pathname = usePathname();
    const NavItems = [
        { label: "Home", href: "/", section: 'home' },
        { label: "La nostra storia", href: "/#storia", section: 'storia' },
        { label: "Shop", href: "/shop", section: 'shop' },
        { label: "Contattaci", href: "/#contattaci", section: 'contattaci' },
    ];
    const navItemRef = React.useRef<HTMLDivElement[] | null>([]);
    const navContentRef = React.useRef(null);

    const handleOpenMenu = () => setIsMenuOpen(true);
    const handleCloseMenu = () => setIsMenuOpen(false);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        const hashIndex = href.indexOf('#');
        if (hashIndex === -1) {
            handleCloseMenu();
            return;
        }
        const hash = href.slice(hashIndex);
        if (pathname === '/') {
            e.preventDefault();
            const smoother = ScrollSmoother.get();
            if (smoother) {
                smoother.scrollTo(hash, true);
            }
        }
        handleCloseMenu();
    };

    useEffect(() => {
        if (pathname !== '/') return;

        const handleScroll = () => {
            const sections = ['contattaci', 'irpinia', 'storia'];
            const scrollY = window.scrollY + window.innerHeight * 0.4;

            let current = 'home';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop) {
                    current = id;
                    break;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const tl = React.useRef<gsap.core.Timeline | null>(null);
    useGSAP(() => {
        tl.current = gsap
            .timeline({ paused: true })
            .to(navContentRef.current, { x: 0, duration: 0.8, ease: 'power3.out' })
            .fromTo(
                navItemRef.current,
                { y: '100%', opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
                '-=0.3'
            );
    }, []);

    useEffect(() => {
        if (tl.current === null) return;
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <header className="h-20 w-screen fixed top-0 left-0 z-50 isolate transition-colors duration-500"
            style={{ backgroundColor: activeSection === 'storia' ? '#000000' : 'transparent' }}
        >
            <nav className="w-full h-full px-8 md:px-12">
                <div className="flex justify-between h-full items-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image width={32} height={32} alt="logo" src="/media/logo.svg" />
                    </Link>

                    {/* Desktop: nav items + social icons */}
                    <div className="hidden md:flex items-center gap-10">
                        <ul className="flex items-center gap-10">
                            {NavItems.map(({ label, href, section }) => {
                                const isActive = pathname === '/'
                                    ? activeSection === section
                                    : pathname === href;
                                return (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            onClick={(e) => handleNavClick(e, href)}
                                            className="flex flex-col items-center gap-1"
                                        >
                                            <span
                                                className="text-xs tracking-widest uppercase font-light transition-colors duration-300"
                                                style={{ color: isActive ? '#D6AB5D' : '#ffffff' }}
                                            >
                                                {label}
                                            </span>
                                            <span
                                                className="block h-[1.5px] transition-all duration-300"
                                                style={{
                                                    width: isActive ? '100%' : '0%',
                                                    backgroundColor: '#D6AB5D',
                                                }}
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Social icons desktop */}
                        <div className="flex items-center gap-4 border-l border-white/10 pl-10">
                            {socialLinks.filter(link => !link.hidden).map(({ name, href, icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="text-white hover:text-[#D6AB5D] transition-colors duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={handleOpenMenu}
                        className="md:hidden cursor-pointer text-white text-sm tracking-widest uppercase font-light"
                    >
                        Menu
                    </button>

                    {/* Mobile drawer */}
                    <div
                        ref={navContentRef}
                        className="md:hidden absolute h-screen flex flex-col justify-between bg-black top-0 left-0 w-full py-16 px-10"
                        style={{ transform: 'translateX(-100%)' }}
                    >
                        {/* Nav items */}
                        <div className="flex flex-col justify-center flex-1 gap-4">
                            {NavItems.map(({ label, href, section }, index) => {
                                const isActive = activeSection === section;
                                return (
                                    <Link href={href} key={label} onClick={(e) => handleNavClick(e, href)}>
                                        <div className="overflow-hidden py-2">
                                            <div
                                                ref={(el) => {
                                                    if (el && navItemRef.current) navItemRef.current[index] = el;
                                                }}
                                                className="text-[42px] transition-colors duration-300"
                                                style={{
                                                    transform: 'translateY(110%)',
                                                    opacity: 0,
                                                    color: isActive ? '#D6AB5D' : '#ffffff',
                                                }}
                                            >
                                                {label}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Social icons mobile — bottom */}
                        <div className="flex items-center gap-6">
                            {socialLinks.filter(link => !link.hidden).map(({ name, href, icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="text-[#9e9e9e] hover:text-[#D6AB5D] transition-colors duration-300"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={handleCloseMenu}
                            className="absolute hover:rotate-90 transition-all duration-150 right-6 top-6 cursor-pointer text-white"
                        >
                            <X size={30} />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
