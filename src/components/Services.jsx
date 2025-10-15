import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10h16v10a1 1 0 01-1 1H5a1 1 0 01-1-1V10zM6 6h12v4H6V6zM8 4h8v2H8V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2v6H3zM19 10h2v6h-2z" />
        </svg>
      ),
      title: "Sillones",
      description: "Limpieza profunda de sillones individuales, recuperando su textura y color original.",
      features: ["Eliminación de manchas", "Desinfección completa", "Secado rápido"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16v4H4V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12h2v4H1zM21 12h2v4h-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12v2H6z" />
        </svg>
      ),
      title: "Sofás",
      description: "Tratamiento especializado para sofás de todos los tamaños y materiales.",
      features: ["Limpieza en seco", "Protección antimanchas", "Renovación de fibras"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="12" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h10M7 16h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18v2H3z" />
        </svg>
      ),
      title: "Colchones",
      description: "Limpieza higiénica de colchones para un descanso saludable.",
      features: ["Eliminación de ácaros", "Desodorización", "Tratamiento antibacterial"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10h12M6 14h8M6 18h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6l2-2M22 6l-2-2M2 20l2 2M22 20l-2 2" />
        </svg>
      ),
      title: "Alfombras",
      description: "Limpieza especializada de alfombras persas, sintéticas y de lana.",
      features: ["Restauración de colores", "Eliminación de olores", "Secado controlado"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 2h16v18H4V2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2v18M10 2v18M14 2v18M18 2v18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 4h2M2 8h2M2 12h2M2 16h2" />
        </svg>
      ),
      title: "Cortinas",
      description: "Limpieza cuidadosa de cortinas sin necesidad de descolgarlas.",
      features: ["Limpieza in situ", "Mantenimiento de pliegues", "Protección UV"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18l-2 4H5l-2-4zM7 13V9a5 5 0 0110 0v4" />
          <circle cx="6.5" cy="17" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="17.5" cy="17" r="2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13h8v4H8z" />
        </svg>
      ),
      title: "Tapicería Automotriz",
      description: "Limpieza profesional de asientos y tapizados de vehículos.",
      features: ["Limpieza de cuero", "Eliminación de manchas difíciles", "Protección UV"]
    }
  ];

  return (
    <section id="servicios" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de limpieza para todo tipo de tapizados, 
            utilizando técnicas avanzadas y productos especializados.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-clint-blue-50 to-clint-cyan-50 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-clint-blue-600 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  {React.cloneElement(service.icon, {
                    className: "w-full h-full"
                  })}
                </div>
              </div>
              
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 line-clamp-3">
                {service.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-xs lg:text-sm text-gray-600">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-clint-blue-600 mr-1 sm:mr-1.5 lg:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary">
            Solicitar Presupuesto Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;