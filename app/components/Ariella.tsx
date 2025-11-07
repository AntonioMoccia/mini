'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'
import Copy from './Copy'



function Ariella() {
    const bottleRef = useRef(null)
    const containerRef = useRef(null)
    const secondSectionRef = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()

        if (!bottleRef.current) return
        const mm = gsap.matchMedia(bottleRef.current)
        mm.add("(max-width: 640px)", (context) => {
            tl.to(bottleRef.current, {
                scale: 0.9,
                top: '30%',
                rotate: '10deg',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: true,
                }
            })
        })
        mm.add("(min-width: 641px)", (context) => {
            tl.to(bottleRef.current, {
                scale: 0.9,
                left: '70%',
                rotate: '10deg',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: true,
                }
            })
        })
    }, [])

    return (
        <>
            <div ref={containerRef} className='h-screen top-0 left-0 w-screen absolute z-20'>
                <div ref={bottleRef} className=' absolute top-[50%] left-[50%] mt-10 transform translate-x-[-50%] translate-y-[-50%] scale-150'>
                    <Image
                        className=' max-h-full mt-10'
                        src="/media/bottle.png"
                        alt="Next.js logo"
                        width={200}
                        height={250}
                        priority
                    />
                </div>
            </div>
            <div className='container'>
                {/* Hero section
                    bg-[url(/media/hero-bg.png)]
                */}
                <div className=' relative w-screen h-screen max-h-screen overflow-hidden'>
                    <Image
                        src="/media/hero-bg.png"
                        alt="Sfondo"
                        fill
                        priority
                        className="object-cover object-center z-10"
                    />
                </div>
                {/* Second section */}
                <div ref={secondSectionRef} className=' px-5 md:pb-0 pb-5 w-screen h-screen flex justify-center items-center flex-col'>

                    <div className=' w-full h-full grid grid-cols-12 max-w-[1442px]'>
                        <div className='  flex flex-col justify-end md:justify-center col-span-12 md:col-span-6 '>
                            <div className=' overflow-y-hidden'>
                                <Copy>
                                    <h1 className=' md:text-5xl text-2xl font-bold '>Un solo prodotto </h1>
                                </Copy>
                            </div>
                            <div className=' overflow-y-hidden'>
                                <Copy>

                                    <h1 className=' md:text-5xl text-2xl font-bold '>la nostra essenza.</h1>
                                </Copy>
                            </div>
                            <div className=' overflow-y-hidden'>
                                <Copy>
                                    <p className=' mt-5'>
                                        Ogni goccia del nostro olio extravergine d’oliva racchiude il lavoro di un anno intero, dalle nostre olive selezionate alla spremitura a freddo nel frantoio di famiglia.Dal colore verde intenso al profumo fruttato, fino al gusto equilibrato tra dolce e amaro, è un olio pensato per chi cerca autenticità e purezza.
                                    </p>
                                </Copy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ariella
