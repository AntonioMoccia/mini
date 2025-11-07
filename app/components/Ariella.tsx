'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'


function Ariella() {
    const bottleRef = useRef(null)
    const containerRef = useRef(null)
    const secondSectionRef = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)
        const tl = gsap.timeline()

        const texts = gsap.utils.toArray('.split')

          const split = new SplitText('.split', {
                type: "words, lines",
                linesClass: "line",
                wordsClass: "word"
            })
            const words = split.words

            tl.to(words, {
                y: 0,
                stagger: 0.08,

                scrollTrigger: {
                    trigger: secondSectionRef.current,
                    markers: true,
                    start: "top top",
                    end:"bottom top",
                   //toggleActions: "play none none reverse",
                }
            },"-=0.2")

        if (!bottleRef.current) return
        const mm = gsap.matchMedia(bottleRef.current)
        mm.add("(max-width: 640px)", (context) => {
            tl.to(bottleRef.current, {
                scale: 0.9,
                top: '+=15%',
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




        /*  tl.to(bottleRef.current, {
             scale: 0.7,
             left: '70%',
             rotate: '15deg',
             scrollTrigger: {
                 trigger: containerRef.current,
                 pin: true,
                 scrub: true,
             }
         }) */

    }, [])

    return (
        <>
            <div ref={containerRef} className='h-screen top-0 left-0 w-screen absolute'>
                <div ref={bottleRef} className=' absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] scale-150'>
                    <Image
                        src="/media/bottle.png"
                        alt="Next.js logo"
                        width={200}
                        height={350}
                        priority
                    />
                </div>
            </div>
            <div className='container'>
                {/* Hero section */}
                <div className=' w-screen h-screen bg-cover bg-center bg-[url(/media/hero-bg.png)]' />
                {/* Second section */}
                <div ref={secondSectionRef} className='  w-screen h-screen flex justify-center items-center flex-col'>

                    <div className=' w-full h-full grid grid-cols-12 max-w-[1442px]'>
                        <div className='  flex flex-col justify-center px-4 col-span-6 '>
                            <div className=' overflow-y-hidden'>
                                <h1 className=' split text-5xl font-bold '>Un solo prodotto </h1>
                            </div>
                            <div className=' overflow-y-hidden'>
                                <h1 className='split text-5xl font-bold '>la nostra essenza.</h1>
                            </div>
                            <div className=' overflow-y-hidden'>
                                <p className=' split mt-5'>
                                    Ogni goccia del nostro olio extravergine d’oliva racchiude il lavoro di un anno intero, dalle nostre olive selezionate alla spremitura a freddo nel frantoio di famiglia.Dal colore verde intenso al profumo fruttato, fino al gusto equilibrato tra dolce e amaro, è un olio pensato per chi cerca autenticità e purezza.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ariella
