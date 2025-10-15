import React from 'react';

const Hero = ({ scrollY = 0 }) => {
  return (
    <section id="inicio" className="relative overflow-hidden h-[75vh] flex items-center">
      {/* Video background - Full screen */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          onError={(e) => {
            // Si el video falla, mostrar el div de fallback
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        >
          <source src="/videos/hero/WhatsApp%20Video%202025-10-07%20at%206.19.11%20PM.mp4" type="video/mp4" />
          <source src="/videos/hero/WhatsApp Video 2025-10-07 at 6.19.11 PM.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback content - se muestra si el video no carga */}
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 items-center justify-center hidden">
          <img 
            src="/images/logo/WhatsApp%20Image%202025-10-07%20at%206.20.39%20PM.jpeg" 
            alt="Clint Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          {/* Logo section */}
          <div 
            className="mb-8"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <img 
                src="/images/logo/logo.png" 
                alt="Clint Logo" 
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>

          {/* Main heading and content */}
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8"
              style={{
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)'
              }}
            >
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Limpieza</span> de
              <br />
              Tapizados
              <br />
              <span className="text-blue-300">Profesional</span>
            </h1>
            
            <p 
              className="text-xl lg:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.4)'
              }}
            >
              Le devolvemos la vida a tus tapizados con técnicas profesionales y productos especializados en Bahía Blanca. 
              Resultados garantizados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#contacto" 
                className="btn-primary text-center text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)'
                }}
              >
                Solicitar Presupuesto
              </a>
              <a 
                href="#servicios" 
                className="btn-secondary text-center text-lg px-8 py-4 bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;