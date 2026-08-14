'use client'

import Ariella from "./components/Ariella";
import NavBar from "./components/NavBar";
import History from "./components/History";
import { MediaQueryProvider } from "./context/responsive";
import Irpinia from "./components/Irpinia";
import Contattaci from "./components/Contattaci";
import Footer from "./components/Footer";
import SmootherInit from "./components/SmootherInit";


export default function Home() {
  return (
    <MediaQueryProvider>
      <div className=" min-h-screen  bg-zinc-50 font-sans ">
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <SmootherInit />
            <main className="items-center min-h-screen  w-screen bg-black ">
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
