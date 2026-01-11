import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedText from './AnimatedText'
import { ArrowRight } from 'lucide-react'
function FullScreenVideo() {
    const videoRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        if (!videoRef.current) return

        gsap.from(
            videoRef.current,
            {
                scale: 0.8,
                borderRadius: '50px',
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top bottom",       // inizia quando il wrapper entra nella viewport
                    end: "+=90%",       // termina quando il wrapper esce dalla viewport
                    scrub: true,
                },
            }
        )
    }, [])

    return (
        <div className=' w-screen my-20 '>
            <div
                ref={videoRef}
                className="w-screen rounded-0 h-screen overflow-hidden"
                style={{ transformOrigin: "center center" }}
            >
                <video
                    className="w-screen h-screen object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/media/hero_video.mp4" type="video/mp4" />
                </video>
            </div>
            {/*PAGE CONTENT*/}

                <div className=" my-10 w-screen flex items-center relative justify-center top-0 left-0 pointer-events-none">
                    <div className='max-w-[1442px] py-5 md:w-[50vw] '>
                        <AnimatedText >
                            <h1 className="text-white text-3xl font-bold">IRPINIA</h1>
                        </AnimatedText>
                        <AnimatedText >
                            <p>
                                L’Irpinia è il cuore verde della Campania, una terra interna di colline, montagne e acque limpide, dove la natura domina ancora il ritmo della vita, scandendo stagioni, silenzi e orizzonti aperti.
                                Il suo nome nasce dal Hirpus, il lupo degli antichi Irpini: simbolo di forza, libertà e legame con il territorio. Un’eredità che vive ancora oggi nei borghi, nei boschi e nello spirito fiero di questa terra.
                                Lontana dai percorsi più battuti, l’Irpinia è un luogo che si svela lentamente, a chi sa osservare e ascoltare. Un paesaggio vero, profondo, che racconta una storia millenaria fatta di natura, memoria e identità.

                            </p>
                        </AnimatedText>
                    </div>
                </div>
{/*                 <div className=' w-screen h-screen flex items-center justify-center '>
                    <div className=' border w-40 h-40 flex items-center justify-center rounded-full text-sm font-medium text-black bg-white pointer-events-auto cursor-pointer hover:bg-gray-200 transition'>
                        La nostra storia <ArrowRight className=" inline-block ml-2 w-4 h-4" />
                    </div>
                </div> */}

        </div>
    )
}

export default FullScreenVideo
