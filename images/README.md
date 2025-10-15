# Estructura de Assets - Clint Limpieza de Tapizados

## 📁 Organización de Carpetas

### `/public/images/`
Imágenes estáticas accesibles directamente desde el navegador.

#### `/public/images/logo/`
- Logo principal de Clint
- Variaciones del logo (blanco, azul, etc.)
- Favicon
- **Formatos recomendados**: PNG, SVG
- **Ejemplo**: `clint-logo.png`, `clint-logo-white.svg`

#### `/public/images/gallery/`
Imágenes de la galería de trabajos realizados.

##### `/public/images/gallery/before/`
- Fotos de "antes" de los trabajos
- **Nomenclatura**: `before-[tipo]-[numero].jpg`
- **Ejemplo**: `before-sofa-01.jpg`, `before-alfombra-02.jpg`

##### `/public/images/gallery/after/`
- Fotos de "después" de los trabajos
- **Nomenclatura**: `after-[tipo]-[numero].jpg`
- **Ejemplo**: `after-sofa-01.jpg`, `after-alfombra-02.jpg`

#### `/public/images/testimonials/`
- Fotos de clientes para testimonios
- **Nomenclatura**: `client-[nombre].jpg`
- **Ejemplo**: `client-maria.jpg`, `client-carlos.jpg`

### `/public/videos/`
Videos estáticos del proyecto.

#### `/public/videos/hero/`
- Video de fondo para la sección hero (opcional)
- **Formatos**: MP4, WebM
- **Ejemplo**: `hero-background.mp4`

#### `/public/videos/testimonials/`
- Video testimonios de clientes
- **Nomenclatura**: `testimonial-[nombre].mp4`
- **Ejemplo**: `testimonial-maria.mp4`

### `/src/assets/`
Assets importados directamente en componentes React.

#### `/src/assets/images/`
- Íconos
- Imágenes que necesitan optimización de Vite
- **Uso**: `import logo from '@/assets/images/logo.png'`

#### `/src/assets/videos/`
- Videos que necesitan optimización de Vite
- **Uso**: `import heroVideo from '@/assets/videos/hero.mp4'`

## 🔧 Cómo Usar las Imágenes

### En componentes React:
```jsx
// Para imágenes en /public/
<img src="/images/logo/clint-logo.png" alt="Clint Logo" />

// Para imágenes en /src/assets/
import logo from '../assets/images/logo.png';
<img src={logo} alt="Clint Logo" />
```

### Optimización recomendada:
- **Fotos de galería**: JPG, calidad 80-90%, máximo 1200px ancho
- **Logo**: SVG o PNG con transparencia
- **Testimonios**: JPG, 400x400px, optimizadas para web
- **Videos**: MP4, H.264, máximo 1080p para web

## 📝 Pasos para Reemplazar Placeholders

1. **Sube tus imágenes** a las carpetas correspondientes
2. **Actualiza las rutas** en los componentes:
   - `Gallery.jsx` - rutas de before/after
   - `Testimonials.jsx` - fotos de clientes
   - `Header.jsx` y `Hero.jsx` - logo
3. **Mantén la nomenclatura** para fácil organización