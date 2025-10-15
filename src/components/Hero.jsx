import React from 'react';

const Hero = ({ scrollY = 0 }) => {
  return (
    <section id="inicio" className="relative overflow-hidden h-[75vh] flex items-center">
      {/* Background - Compatible con GitHub Pages */}
      <div className="absolute inset-0 z-0">
        {/* Video background con fallback mejorado */}
        <video 
          className="w-full h-full object-cover hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          onError={(e) => {
            // Si el video falla, mostrar el div de fallback
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
        >
          <source src="./videos/hero/WhatsApp%20Video%202025-10-07%20at%206.19.11%20PM.mp4" type="video/mp4" />
          <source src="./videos/hero/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background mejorado - siempre visible en GitHub Pages */}
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 flex items-center justify-center"
             style={{
               backgroundImage: `
                 radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 40% 60%, rgba(29, 78, 216, 0.2) 0%, transparent 50%)
               `,
               backgroundSize: '100% 100%'
             }}>
          {/* Pattern overlay para más textura */}
          <div className="absolute inset-0 opacity-10" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
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
                src="./images/logo/logo.png" 
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