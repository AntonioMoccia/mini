'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'



function Ariella() {
    const bottleRef = useRef(null)
    const containerRef = useRef(null)


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()


        tl.to(bottleRef.current, {
            scale: 2,
            left: '30%',
            rotate: '-10deg',
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: true
            }
        })

    }, [])

    return (
        <>
            <div ref={containerRef} className='h-screen top-0 left-0 w-screen absolute'>
                <div ref={bottleRef} className=' absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rotate-[20deg] scale-[250%]'>
                    <Image
                        src="/media/bottle.png"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                </div>
            </div>
            <div className='container'>
                {/* Hero section */}
                <div className=' w-screen h-screen '>
                    <h1 className=' uppercase text-[15rem] w-full text-center'>
                        Arie<span className=' text-amber-400 text-[16rem]'>ll</span>a
                    </h1>
                </div>
                {/* Second section */}
                <div className=' w-screen h-screen grid grid-cols-12'>
                    <div className='  flex flex-col justify-center px-4 col-span-6 col-end-13'>
                        <div className=' overflow-y-hidden'>
                            <h1 className=' text-5xl font-bold '>Un solo prodotto </h1>
                        </div>
                        <div className=' overflow-y-hidden'>
                            <h1 className=' text-5xl font-bold '>la nostra <span>essenza.</span></h1>
                        </div>
                        <p className=' mt-5'>
                            Ogni goccia del nostro olio extravergine d’oliva racchiude il lavoro di un anno intero, dalle nostre olive selezionate alla spremitura a freddo nel frantoio di famiglia.Dal colore verde intenso al profumo fruttato, fino al gusto equilibrato tra dolce e amaro, è un olio pensato per chi cerca autenticità e purezza.
                        </p>
                    </div>
                </div>
                {/* terza  section */}
                <div className=' w-screen h-screen grid grid-cols-12'>
                    <div className='  flex flex-col justify-center px-4 col-span-6 col-end-13'>
                        <div className=' overflow-y-hidden'>
                            <h1 className=' text-5xl font-bold '>Un solo prodotto </h1>
                        </div>
                        <div className=' overflow-y-hidden'>
                            <h1 className=' text-5xl font-bold '>la nostra <span>essenza.</span></h1>
                        </div>
                        <p className=' mt-5'>
                            Ogni goccia del nostro olio extravergine d’oliva racchiude il lavoro di un anno intero, dalle nostre olive selezionate alla spremitura a freddo nel frantoio di famiglia.Dal colore verde intenso al profumo fruttato, fino al gusto equilibrato tra dolce e amaro, è un olio pensato per chi cerca autenticità e purezza.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ariella