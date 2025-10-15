import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                {/* Logo actual de Clint */}
                <img 
                  src="./images/logo/logo.png" 
                  alt="Clint Logo" 
                  className="w-14 h-14 object-contain"
                />
                <span 
                  className="text-2xl font-bold text-blue-800"
                  style={{
                    textShadow: '0 0 5px #ccc'
                  }}
                >
                  Clint
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Galería
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonios
              </a>
              <a href="#contacto" className="btn-primary">
                Contacto
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
              <a 
                href="#inicio" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Servicios
              </a>
              <a 
                href="#galeria" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Galería
              </a>
              <a 
                href="#testimonios" 
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Testimonios
              </a>
              <a 
                href="#contacto" 
                onClick={closeMenu}
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors mx-3 mt-4 text-center"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;