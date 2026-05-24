'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'

export default function SmootherInit() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

        const smoother = ScrollSmoother.create({
            smooth: 0.8,
            effects: true,
            smoothTouch: 0.3,
        })

        if (typeof window !== 'undefined' && window.location.hash) {
            const hash = window.location.hash
            requestAnimationFrame(() => {
                smoother.scrollTo(hash, false)
            })
        }
    }, [])

    return null
}
