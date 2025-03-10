import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

const FlowchartSection = ({ loaded }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const chartRef = useRef(null)
  const [activeTab, setActiveTab] = useState('unproductive')

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
      .from(chartRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.3")

  }, [loaded])

  const handleTabChange = (tab) => {
    setActiveTab(tab)

    // Animate the tab change
    gsap.fromTo(
      ".flowchart-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
  }

  return (
    <section ref={sectionRef} className="py-12 mb-16">
      <h2 ref={titleRef} className="text-4xl font-bold text-center mb-12">
        The Path to Employment
      </h2>

      <div className="tabs tabs-boxed justify-center mb-8">
        <a
          className={`tab tab-lg ${activeTab === 'unproductive' ? 'tab-active' : ''}`}
          onClick={() => handleTabChange('unproductive')}
        >
          Unproductive Activities
        </a>
        <a
          className={`tab tab-lg ${activeTab === 'productive' ? 'tab-active' : ''}`}
          onClick={() => handleTabChange('productive')}
        >
          Productive Activities
        </a>
      </div>

      <div ref={chartRef} className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flowchart-content">
            {activeTab === 'unproductive' ? (
              <div className="flow-chart unproductive">
                <div className="alert alert-error shadow-lg">
                  <h3 className="text-2xl font-bold">Unproductive Activities</h3>
                </div>

                <ul className="menu bg-base-200 rounded-box mt-4">
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">1</div>
                      <div>
                        <p className="font-bold">Sleeping all day</p>
                        <p className="text-sm opacity-70">Excessive sleep beyond what's healthy isn't helping your career</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">2</div>
                      <div>
                        <p className="font-bold">Playing video games excessively</p>
                        <p className="text-sm opacity-70">Gaming can be fun, but it's not building your resume</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">3</div>
                      <div>
                        <p className="font-bold">BSing with friends</p>
                        <p className="text-sm opacity-70">Social time is important, but not when it's your only activity</p>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="divider">The Result</div>

                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Does it lead to a job?</div>
                    <div className="stat-value text-error">NO</div>
                    <div className="stat-desc">Try something else</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flow-chart productive">
                <div className="alert alert-success shadow-lg">
                  <h3 className="text-2xl font-bold">Productive Activities</h3>
                </div>

                <ul className="menu bg-base-200 rounded-box mt-4">
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">1</div>
                      <div>
                        <p className="font-bold">Resume Polishing</p>
                        <p className="text-sm opacity-70">Create a professional resume that highlights your skills</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">2</div>
                      <div>
                        <p className="font-bold">Interview Practice</p>
                        <p className="text-sm opacity-70">Prepare for common questions and practice your responses</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">3</div>
                      <div>
                        <p className="font-bold">Job Applications</p>
                        <p className="text-sm opacity-70">Submit applications to positions that match your skills</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">4</div>
                      <div>
                        <p className="font-bold">Following Up</p>
                        <p className="text-sm opacity-70">Contact employers after applying to show initiative</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-4">
                      <div className="badge badge-lg">5</div>
                      <div>
                        <p className="font-bold">Job Fairs & Networking</p>
                        <p className="text-sm opacity-70">Connect with potential employers in person</p>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="divider">The Result</div>

                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Does it lead to a job?</div>
                    <div className="stat-value text-success">YES</div>
                    <div className="stat-desc">You're on the right track!</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlowchartSection