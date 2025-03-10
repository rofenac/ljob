import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const FlowchartSection = ({ loaded }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    if (!loaded) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    })

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(imageRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.3")

  }, [loaded])

  return (
    <section ref={sectionRef} className="py-12 mb-16">
      <h2 ref={titleRef} className="text-4xl font-bold text-center mb-12">
        The Path to Employment
      </h2>

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-6 pt-6">
          <img
            ref={imageRef}
            src="src/assets/flowchart.png"
            alt="Job Decision Flowchart"
            className="rounded-xl max-w-full h-auto"
          />
        </figure>
        <div className="card-body text-center">
          <h3 className="card-title justify-center text-2xl">
            Choose Your Activities Wisely
          </h3>
          <p>The decisions you make every day determine your future success.</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlowchartSection