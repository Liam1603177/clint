import React, { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BubbleBackground from './components/BubbleBackground'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
        <div className="App relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 global-bg" style={{backgroundAttachment: 'fixed'}}>
      <BubbleBackground scrollY={scrollY} />
      
      {/* Content with higher z-index */}
      <div className="relative z-20">
        <Header />
        <Hero scrollY={scrollY} />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  )
}

export default App
