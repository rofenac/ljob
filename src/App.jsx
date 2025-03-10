import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FlowchartSection from './components/FlowchartSection'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Header />
      <main className="container mx-auto px-4">
        <Hero loaded={loaded} />
        <FlowchartSection loaded={loaded} />
      </main>
      <Footer />
    </div>
  )
}

export default App