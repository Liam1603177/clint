import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

  const services = [
    'Sillones',
    'Sofás',
    'Colchones',
    'Alfombras',
    'Cortinas',
    'Tapicería Automotriz',
    'Otro (especificar en mensaje)'
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50 bg-opacity-90 backdrop-blur-sm relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-18 h-18 bg-cyan-200 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute top-1/3 right-32 w-14 h-14 bg-blue-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-24 w-10 h-10 bg-cyan-300 rounded-full opacity-25 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Solicita tu <span className="text-gradient">Presupuesto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y te contactaremos en menos de 24 horas para 
            brindarte un presupuesto personalizado sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-50">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                      placeholder="291 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio Requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                    placeholder="Dirección completa para el servicio"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Horario Preferido
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona horario</option>
                      <option value="morning">Mañana (8:00 - 12:00)</option>
                      <option value="afternoon">Tarde (12:00 - 18:00)</option>
                      <option value="evening">Noche (18:00 - 20:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje Adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clint-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Describe el estado actual de tu tapizado, manchas específicas, o cualquier detalle importante..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center py-4 text-lg"
                >
                  Enviar Solicitud de Presupuesto
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-600 mb-4">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <div className="bg-clint-blue-50 rounded-lg p-4">
                  <p className="text-sm text-clint-blue-800">
                    <strong>¿Necesitas respuesta inmediata?</strong><br />
                    Llámanos al (11) 1234-5678 o escríbenos por WhatsApp
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white border-opacity-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-clint-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-clint-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">(291) 1234-5678</p>
                    <p className="text-sm text-clint-blue-600">Lunes a Sábado: 8:00 - 20:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clint-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-clint-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+54 9 291 1234-5678</p>
                    <p className="text-sm text-clint-blue-600">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clint-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-clint-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@clintlimpieza.com</p>
                    <p className="text-sm text-clint-blue-600">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-clint-blue-100 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-clint-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Área de Servicio</h4>
                    <p className="text-gray-600">Bahia Blanca provincia de Buenos Aires</p>
                    <p className="text-sm text-clint-blue-600">Consultá por alrededores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 border-2 border-clint-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-clint-blue-700">¿Por qué elegir Clint?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">Presupuesto gratuito y sin compromiso</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">Productos ecológicos y seguros</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">Garantía en todos nuestros trabajos</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">Técnicos especializados y equipamiento profesional</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 font-medium">Flexibilidad de horarios y días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;