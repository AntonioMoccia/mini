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
        mm.add("(max-width: 640px)", (context) => {
            tl.to(bottleRef.current, {
                scale: 0.8,
                top: '35vh',
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
            <div ref={bottleRef} className=' absolute top-[50%] left-[50%] mt-3 transform translate-x-[-50%] translate-y-[-50%] scale-150'>
                <Image
                    className=' max-h-[65vh] w-auto'
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
            <div ref={secondSectionRef} className=' px-5 md:pb-0 pb-10 w-screen h-screen flex justify-center items-center flex-col'>

                <div className=' w-full h-full grid grid-cols-12 max-w-[1442px]'>
                    <div className='  flex flex-col justify-end md:justify-center col-span-12 md:col-span-6 '>
                        <div className=' overflow-y-hidden'>
                            <AnimatedText>
                                <h1 className=' md:text-4xl text-xl font-bold '>Un solo prodotto </h1>
                            </AnimatedText>
                        </div>
                        <div className=' overflow-y-hidden'>
                            <AnimatedText>

                                <h1 className=' md:text-4xl text-xl font-bold '>la nostra essenza.</h1>
                            </AnimatedText>
                        </div>
                        <div className=' overflow-y-hidden'>
                            <AnimatedText>
                                <p className=' text-base md:text-lg mt-5'>
                                    Ogni goccia del nostro olio extravergine d’oliva racchiude il lavoro di un anno intero, dalle nostre olive selezionate alla spremitura a freddo nel frantoio di famiglia.Dal colore verde intenso al profumo fruttato, fino al gusto equilibrato tra dolce e amaro, è un olio pensato per chi cerca autenticità e purezza.
                                </p>
                            </AnimatedText>
                        </div>
                    </div>
                </div>
            </div>


            <div className='px-5 md:pb-0 pb-10 w-screen flex justify-center items-center flex-col'>
                <div className='  w-full h-full max-w-[1442px] flex justify-center items-center px-5'>
                    <div className=' w-full grid grid-cols-12  '>

                        <div className='col-span-8 col-start-1  flex justify-start items-center '>
                            <div className=' max-w-lg'>
                                <div className='w-full '>
                                    <AnimatedText>
                                        <h1 className=' md:text-4xl text-xl font-bold'>
                                            OLIO EXTRAVERGINE
                                            D’OLIVA 100% <span>ITALIANO</span>
                                        </h1>
                                    </AnimatedText>
                                </div>
                                <div className='w-full '>
                                    <AnimatedText>
                                        <p>
                                            Olio d’oliva di categoria superiore ottenuto esclusivamente mediante procedimenti cannici.
                                            Estratto a freddo.
                                        </p>
                                    </AnimatedText>
                                </div>
                            </div>
                        </div>



                        <div className=' col-span-4 col-start-9 '>
                            <ImageReveal url={'/media/bottle_with_olive.png'} className=' w-[530px] h-[660px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Ariella

