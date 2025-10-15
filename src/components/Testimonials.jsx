import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Palermo, Buenos Aires",
      rating: 5,
      text: "Increíble el trabajo que hicieron con mi sofá de cuero. Parecía imposible de limpiar después de años de uso, pero quedó como nuevo. El equipo de Clint es muy profesional y puntual.",
      service: "Limpieza de sofá de cuero",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      location: "Recoleta, Buenos Aires",
      rating: 5,
      text: "Contraté el servicio para limpiar los tapizados de mi auto y el resultado fue excelente. Eliminaron manchas que pensé que eran permanentes. Muy recomendable.",
      service: "Tapicería automotriz",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Villa Crespo, Buenos Aires",
      rating: 5,
      text: "El mejor servicio de limpieza de alfombras que he probado. Mi alfombra persa recuperó todos sus colores originales. El trato fue excelente y muy cuidadoso.",
      service: "Limpieza de alfombra persa",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "San Telmo, Buenos Aires",
      rating: 5,
      text: "Limpiaron todo el juego de living de mi casa. La diferencia es notable, especialmente en los colores que se habían opacado con el tiempo. Servicio muy profesional.",
      service: "Limpieza de juego de living",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Laura Fernández",
      location: "Belgrano, Buenos Aires",
      rating: 5,
      text: "Excelente servicio. Limpiaron las cortinas de mi casa sin descolgarlas y quedaron perfectas. El equipo es muy respetuoso y cuidadoso con los muebles.",
      service: "Limpieza de cortinas",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Diego Martín",
      location: "Barracas, Buenos Aires",
      rating: 5,
      text: "Muy satisfecho con el resultado. Mi colchón tenía manchas y olores que parecían imposibles de quitar. Ahora está impecable y sin ningún olor. Súper recomendado.",
      service: "Limpieza de colchón",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonios" className="section-padding bg-white bg-opacity-75 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Lo que Dicen Nuestros <span className="text-gradient">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Lee las experiencias reales de quienes confiaron en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gradient-to-br from-clint-blue-50 to-clint-cyan-50 rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative testimonial-card"
            >
              {/* Quote icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 text-clint-blue-200">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-2 sm:mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6 italic line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Service tag */}
              <div className="mb-2 sm:mb-3 lg:mb-4">
                <span className="inline-block bg-clint-blue-100 text-clint-blue-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                  {testimonial.service}
                </span>
              </div>

              {/* Client info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover mr-2 sm:mr-3 lg:mr-4 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-xs lg:text-sm text-gray-600 truncate">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;