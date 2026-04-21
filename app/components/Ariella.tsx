'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'
import AnimatedText from './AnimatedText'

import ImageReveal from './ImageReveal'



function Ariella() {
    const bottleRef = useRef(null)
    const containerRef = useRef(null)
    const secondSectionRef = useRef(null)
    const animatedImageContainerRef = useRef(null)
    const animatedImageRef = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)
        const tl = gsap.timeline()

        if (!bottleRef.current) return
        const mm = gsap.matchMedia(bottleRef.current)

        //mobile
        mm.add("(max-width: 767px)", (context) => {
            tl.to(bottleRef.current, {
                scale: 0.6,
                top: '30vh',
                rotate: '10deg',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: true,
                }
            })
        })

        //desktop
        mm.add("(min-width: 768px)", (context) => {
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
            <div ref={containerRef} id="ariella-container" className='h-screen top-0 left-0 w-screen absolute z-20'>
                <div ref={bottleRef} className=' absolute top-[50%] left-[50%] mt-3 transform translate-x-[-50%] translate-y-[-50%] scale-150'>
                    <Image
                        className=' max-h-[50vh] w-auto'
                        src="/media/bottle.png"
                        alt="Next.js logo"
                        width={150}
                        height={200}
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
                <div ref={secondSectionRef} className=' p px-5 md:pb-0 pb-10 w-screen min-h-screen flex justify-center items-center flex-col'>


                    <div className=' md:w-[80vw] md:mt-0 mt-[60vh] h-full grid grid-cols-12 max-w-[1442px]'>
                        <div className='  flex flex-col justify-end md:justify-center col-span-12 md:col-span-6 '>
                            <div className=' overflow-y-hidden'>
                                <AnimatedText>
                                    <h1 className=' md:text-3xl text-xl font-bold '>
                                        Ariella – Il nome, l’origine, l’emozione
                                    </h1>
                                </AnimatedText>
                            </div>

                            <div className=' overflow-y-hidden'>
                                <AnimatedText>
                                    <p className=' text-base md:text-lg mt-5'>
                                        Il nome Ariella racchiude la nostra storia di famiglia e, allo stesso tempo, la sensazione che desideriamo regalare a chi assaggia il nostro olio: leggerezza, armonia, autenticità. Un nome che richiama l’aria, il vento e il respiro profondo delle colline irpine.
                                        Ariella nasce a Grottaminarda, nel cuore dell’Irpinia, tra colline verdi e oliveti esposti a costante ventilazione, a un’altitudine che favorisce forti escursioni termiche tra giorno e notte. Questo microclima unico, unito a terreni argilloso-calcarei, contribuisce allo sviluppo di profili aromatici intensi e ben definiti, preservando freschezza e complessità nel frutto.

                                    </p>
                                </AnimatedText>

                            </div>
                        </div>
                    </div>



                </div>


                {/** TERZA SEZIONE */}
                <div className='px-5 relative md:pb-10 my-15 w-screen min-h-screen flex justify-center items-center flex-col'>
                    <div className='  md:w-[80vw] h-full max-w-[1442px] flex justify-center items-center'>
                        <div className=' w-full grid grid-cols-12  '>
                            {/** IMAGE */}
                            <div className="col-span-12 md:col-span-4 md:col-start-1 flex justify-center md:justify-end">
                                <ImageReveal
                                    url="/media/olio-1012.jpg"
                                    className="relative overflow-hidden rounded-md w-full max-w-none md:max-w-[474px] aspect-[4/5] sm:aspect-[3/4] mt-8 md:mt-0"
                                />
                            </div>
                            <div className='mt-10 md:mt-0 md:col-span-8 md:col-start-8 col-span-12 flex  justify-start items-center '>
                                <div className=' max-w-lg'>
                                    <div className='w-full '>
                                        <AnimatedText>
                                            <h1 className=' md:text-4xl text-xl font-bold'>
                                                OLIO EXTRAVERGINE
                                                D’OLIVA 100% <span className=' text-[#D6AB5D]'>ITALIANO</span>
                                            </h1>
                                        </AnimatedText>
                                    </div>
                                    <div className='w-full '>
                                        <AnimatedText>
                                            <p>
                                                È un blend equilibrato ottenuto dall’unione di tre cultivar: Olivastra e Ogliarola Avellinese, varietà autoctone che esprimono l’anima più autentica del territorio irpino, e Leccino, cultivar non autoctona selezionata per conferire rotondità, armonia ed eleganza al profilo sensoriale dell’olio.
                                                Dall’unione di queste tre varietà nasce un olio extra vergine di oliva medio fruttato, armonico ed elegante, caratterizzato da sentori di pomodoro acerbo, erba verde e mandorla fresca, con un amaro e un piccante equilibrati e persistenti, tipici degli oli di alta qualità.
                                                Ariella è l’incontro tra natura, vento e sapere familiare, racchiuso in una bottiglia.

                                            </p>
                                        </AnimatedText>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ariella

