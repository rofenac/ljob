import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Header = () => {
  const headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
  }, [])

  return (
    <header ref={headerRef} className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl sm:text-2xl">Career Path</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-primary text-primary-content grid place-items-center">
              <span className="text-xl font-bold">JP</span>
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a>About This App</a></li>
            <li><a>Resources</a></li>
            <li><a>Settings</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header