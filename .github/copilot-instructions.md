# Clint - Landing Page para Limpieza de Tapizados

## Arquitectura del Proyecto

Esta es una landing page moderna construida con **React + Vite + Tailwind CSS** para "Clint", un servicio de limpieza de tapizados en Buenos Aires, Argentina.

### Estructura de Componentes

- **Header**: Navegación sticky con logo y menú responsive
- **Hero**: Sección principal con video de fondo, CTA, animaciones CSS y indicadores de confianza
- **Services**: Grid de servicios con iconos SVG y hover effects
- **Gallery**: Galería de antes/después con modal interactivo
- **Testimonials**: Testimonios de clientes con ratings y fotos
- **Contact**: Formulario de contacto completo con validación
- **Footer**: Información de contacto y redes sociales

## Convenciones de Diseño

### Paleta de Colores
- **Azules principales**: `clint-blue-*` (de 50 a 900)
- **Cian secundario**: `clint-cyan-*` (de 50 a 900)
- Colores definidos en `tailwind.config.js` basados en el logo

### Clases CSS Personalizadas
```css
.btn-primary - Botón principal azul con hover effects
.btn-secondary - Botón secundario con border
.section-padding - Espaciado consistente de secciones
.text-gradient - Gradiente de texto azul a cian
.bubble - Elementos de fondo animados
```

### Animaciones
- `animate-float`: Flotación suave para elementos principales
- `animate-bubble-*`: Burbujas de fondo con diferentes velocidades
- Hover effects con `transform hover:scale-105` y transiciones

## Patrones de Desarrollo

### Formularios
- Estado local con `useState` para todos los campos
- Validación básica con `required` attributes
- Feedback visual con estados de éxito/error
- Reset automático después del envío

### Responsive Design
- Mobile-first approach con Tailwind
- Grid layouts que colapsan en móvil
- Menú hamburguesa para navegación móvil
- Imágenes optimizadas con `object-cover`

### Modales e Interactividad
- Gallery modal con overlay y cierre por click
- Estados de hover para todas las cards
- Smooth scroll para navegación entre secciones
- WhatsApp floating button fijo

## Contenido Específico

### Servicios Ofrecidos
1. Sillones - Limpieza profunda individual
2. Sofás - Tratamiento especializado por tamaños
3. Colchones - Limpieza higiénica y desinfección
4. Alfombras - Especialización en persas y sintéticas
5. Cortinas - Limpieza in situ sin descolgar
6. Tapicería Automotriz - Cuero y tela de vehículos

### Información de Contacto
- Teléfono: (11) 1234-5678
- WhatsApp: +54 9 11 1234-5678
- Email: info@clintlimpieza.com
- Área: Ciudad Autónoma de Buenos Aires

## Comandos de Desarrollo

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo (http://localhost:5173)
npm run build   # Build de producción
npm run preview # Preview del build
```

## Configuración Técnica

### Dependencias Clave
- **React 18** - Framework principal
- **Vite 7.x** - Build tool y servidor de desarrollo
- **Tailwind CSS 3.4.x** - Framework de estilos (¡importante usar v3, no v4!)
- **PostCSS & Autoprefixer** - Procesamiento de CSS

### Estructura de Archivos CSS
- `@import` statements deben ir ANTES de `@tailwind` directives
- Tailwind config usa `module.exports` (CommonJS) no ES modules
- PostCSS config usa ES modules (`export default`)

## Consideraciones Importantes

- **Tailwind**: Usar versión 3.4.x, la v4 causa conflictos con la configuración actual
- **Imágenes**: Actualmente usa Unsplash placeholders - reemplazar con fotos reales del cliente
- **Formulario**: Backend no implementado - configurar endpoint para envío
- **SEO**: Agregar meta tags, sitemap y structured data
- **Performance**: Optimizar imágenes y lazy loading para galería
- **Analytics**: Integrar Google Analytics o similar

## Mejoras Futuras

- Sistema de citas online
- Chat en vivo
- Blog de consejos de limpieza
- Calculadora de precios automática
- Integración con CRM
- Testimonios en video