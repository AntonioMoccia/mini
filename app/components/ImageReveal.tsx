import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'

function ImageReveal({ url, className }: { url: string, className?:string }) {

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reset"
            }
        })

        tl.to(containerRef.current, {
            ease: "power2",
            duration: 1.2,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        })
        tl.to(imageRef.current, {
            scale: 1,
            duration: 1.2
        }, "<")


    }, [])

    //clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    return (
            <div
                ref={containerRef}
                className={`relative ${className}`}
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    transformOrigin:"top"
                }} >
                <Image
                    ref={imageRef}
                    alt="image"
                    className="object-cover object-top z-10 scale-300"
                    style={{
                        scale: 1.3
                    }}
                    fill
                    src={url} />
            </div>
 
    )
}

export default ImageReveal