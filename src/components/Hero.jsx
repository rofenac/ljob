import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Hero = ({ loaded }) => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const btnRef = useRef(null)

  useGSAP(() => {
    if (!loaded) return

    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from(btnRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.2")

  }, [loaded])

  return (
    <div ref={heroRef} className="hero min-h-[70vh] py-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 ref={titleRef} className="text-5xl font-bold text-primary mb-8">
            Your Path to Success Starts Now
          </h1>
          <p ref={subtitleRef} className="text-xl mb-8">
            Every choice you make today determines your future.
            Are your daily activities moving you toward your goals or keeping you stuck?
          </p>
          <button ref={btnRef} className="btn btn-primary btn-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero