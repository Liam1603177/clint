import React from 'react';

const Gallery = () => {
  // Trabajos reales de Clint - Fotos auténticas antes y después  
  const galleryItems = [
    {
      id: 1,
      title: "Sillones - Restauración Completa",
      before: "/images/gallery/real/sofa-morado-antes.jpeg",
      after: "/images/gallery/real/sofa-morado-despues.jpeg", 
      description: "Recuperación total de sillones con desgaste extremo. Eliminación de manchas profundas y restauración del color original."
    },
    {
      id: 2, 
      title: "Sillas - Renovación Profesional",
      before: "/images/gallery/real/sillas-antes.jpeg",
      after: "/images/gallery/real/sillas-despues.jpeg",
      description: "Limpieza especializada de sillas. Eliminación de suciedad acumulada y restauración de la textura original."
    },
    {
      id: 3,
      title: "Colchones - Eliminación de Manchas Difíciles", 
      before: "/images/gallery/real/sofa-gris-antes.jpeg",
      after: "/images/gallery/real/sofa-gris-despues.jpeg",
      description: "Tratamiento profundo para colchones con manchas persistentes. Recuperación completa del tono y suavidad original."
    },
    {
      id: 4,
      title: "Cortinas - Desinfección Profunda",
      before: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&h=300&fit=crop&sat=-60&brightness=0.5",
      after: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      description: "Desinfección completa y eliminación de ácaros y bacterias para un descanso saludable"
    },
    {
      id: 5,
      title: "Alfombra - Restauración Completa",
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&sat=-80&brightness=0.4",
      after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Restauración completa de alfombra con recuperación de colores y eliminación de olores"
    },
    {
      id: 6,
      title: "Tapicería Automotriz - Renovación",
      before: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&sat=-70&brightness=0.4",
      after: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
      description: "Limpieza profesional de asientos de vehículo con tratamiento especializado"
    }
  ];

  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <section id="galeria" className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 bg-opacity-90 backdrop-blur-sm relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-cyan-300 rounded-full opacity-25"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Galería de <span className="text-gradient">Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mira la transformación que logramos en cada uno de nuestros trabajos. 
            Cada pieza cuenta una historia de renovación y cuidado profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white border-opacity-50"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={item.before} 
                      alt={`${item.title} - Estado inicial antes del tratamiento`}
                      className="w-full h-48 sm:h-32 object-cover gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt={`${item.title} - Resultado final después del tratamiento profesional`}
                      className="w-full h-48 sm:h-32 object-cover gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-clint-blue-600 bg-opacity-0 hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-sm">Ver detalles</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged view */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="bg-white bg-opacity-98 backdrop-blur-md rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-white border-opacity-50">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedItem.title}
                  </h3>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-red-600 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Estado Inicial
                    </h4>
                    <img 
                      src={selectedItem.before} 
                      alt={`${selectedItem.title} - Estado inicial`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-600 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Resultado Final
                    </h4>
                    <img 
                      src={selectedItem.after} 
                      alt={`${selectedItem.title} - Resultado final`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      decoding="async"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-clint-blue-50 to-clint-cyan-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <a href="#contacto" className="btn-primary">
                    Solicitar Presupuesto Similar
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;