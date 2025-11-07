'use client'

import Image from "next/image";
import Ariella from "./components/Ariella";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";


export default function Home() {

  
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother)
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, [])


  return (
    <div className=" min-h-screen  bg-zinc-50 font-sans ">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className=" min-h-screen w-screen  bg-black ">
            <Ariella />
          </main>
        </div>
      </div>
    </div>
  );
}
