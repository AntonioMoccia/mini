import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

type Props = {
  url: string
  className?: string
}

function ImageReveal({ url, className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useGSAP(() => {
    if (!containerRef.current || !imageRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reset',
      },
    })

    tl.to(containerRef.current, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 1,
      ease: 'power2.out',
    })

    tl.to(
      imageRef.current,
      {
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      },
      '<'
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }}
    >
      <Image
        ref={imageRef}
        src={url}
        alt="image"
        fill
        className="object-cover object-center scale-[1.15] will-change-transform"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
    </div>
  )
}

export default ImageReveal
