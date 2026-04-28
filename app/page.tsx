'use client'

import Image from "next/image";
import Ariella from "./components/Ariella";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import NavBar from "./components/NavBar";
import History from "./components/History";
import { MediaQueryProvider } from "./context/responsive";
import Irpinia from "./components/Irpinia";
import Contattaci from "./components/Contattaci";
import Footer from "./components/Footer";


export default function Home() {


  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother)
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 0.8,
      effects: true,
      smoothTouch: 0.3,
    });
  }, [])


  return (
    <MediaQueryProvider>
      <div className=" min-h-screen  bg-zinc-50 font-sans ">
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="items-center min-h-screen w-screen bg-black ">
              <Ariella />
              <History />
              <Irpinia />
              <Contattaci />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </MediaQueryProvider>
  );
}
