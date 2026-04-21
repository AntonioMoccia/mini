import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const NavItems = ["Home", "Identity", "Terroir", "Club"];
    const navItemRef = React.useRef<HTMLDivElement[] | null>([]);
    const navContentRef = React.useRef(null);
    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("isMenuOpen changed:", isMenuOpen);
    }, [isMenuOpen]);


    const tl = React.useRef<gsap.core.Timeline | null>(null);
    useGSAP(() => {
        tl.current = gsap
            .timeline({ paused: true })
            .to(navContentRef.current, {
                x: 0,
                duration: 1,
            })
            .to(navItemRef.current, {
                y: 0,
                stagger: 0.1,
                duration: 0.5,
            })
            .to(
                navItemRef.current,
                {
                    opacity: 1,
                    stagger: 0.1,
                },
                "-0.5"
            );
    }, []);
    useEffect(() => {
        if (isMenuOpen === undefined) return;
        if (tl.current === null) return;
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <header
            className="h-24 w-screen fixed top-0 left-0 z-50 bg-transparent isolate"
        >
            <nav className=' w-full h-full px-10'>
                <div className='flex justify-between h-full items-center'>
                    <div>
                        <Image
                            width={30}
                            height={30}
                            alt="logo"
                            src={'/media/logo.svg'}
                        />
                    </div>
                    <button
                        onClick={handleOpenMenu}
   className="cursor-pointer text-white mix-blend-difference relative z-[9999]"
                    >
                        Menu
                    </button>
                    <div
                        ref={navContentRef}
                        className="absolute h-screen flex justify-center bg-[#E7E3E1] top-0 left-0 translate-x-[-100%] w-full md:w-[80%]"
                    >
                        <div className="h-full  flex flex-col justify-center items-start md:px-48 gap-4 w-[80%] ">
                            {NavItems.map((menuItem, index) => {
                                return (
                                    <a href="#" key={`${menuItem}-${index}`}>
                                        <div className=" overflow-hidden py-2">
                                            <div
                                                ref={(el) => {
                                                    if (el && navItemRef.current) navItemRef.current[index] = el;
                                                }}
                                                className=" text-[42px] md:text-8xl translate-y-[150%] opacity-0"
                                            >
                                                {menuItem}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                        <button
                            onClick={handleCloseMenu}
                            className="absolute hover:rotate-90 transition-all duration-150 right-6 top-6 cursor-pointer"
                        >
                            <X className=" font-extralight" size={30} />
                        </button>
                    </div>


                </div>
            </nav>
        </header>
    )
}

export default NavBar


