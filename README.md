# Clint - Landing Page para Limpieza de Tapizados

Una landing page moderna y profesional para "Clint", servicio especializado en limpieza de tapizados en Buenos Aires, Argentina.

## 🚀 Características

- **Diseño Moderno**: Interface clean con paleta de colores basada en el logo corporativo
- **Responsive**: Optimizado para todos los dispositivos (desktop, tablet, móvil)
- **Animaciones**: Efectos sutiles que mejoran la experiencia del usuario
- **Formulario de Contacto**: Sistema completo para solicitar presupuestos
- **Galería Interactiva**: Showcase de trabajos realizados con modal de vista ampliada
- **Testimonios**: Sección de reseñas de clientes con ratings visuales
- **WhatsApp Integrado**: Botón flotante para contacto directo

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y desarrollo
- **Tailwind CSS** - Framework de estilos
- **JavaScript ES6+** - Lógica del frontend

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza el build de producción

## 🎨 Personalización

### Colores
Los colores están definidos en `tailwind.config.js` y se basan en la paleta del logo:
- **clint-blue**: Azul principal (50-900)
- **clint-cyan**: Cian secundario (50-900)

### Contenido
Para modificar el contenido, edita los componentes en `src/components/`:
- `Hero.jsx` - Sección principal
- `Services.jsx` - Servicios ofrecidos
- `Gallery.jsx` - Galería de trabajos
- `Testimonials.jsx` - Testimonios de clientes
- `Contact.jsx` - Formulario de contacto

## 📱 Información de Contacto

- **Teléfono**: (11) 1234-5678
- **WhatsApp**: +54 9 11 1234-5678
- **Email**: info@clintlimpieza.com
- **Área**: Ciudad Autónoma de Buenos Aires

## � Estructura de Assets

Las carpetas para imágenes y videos ya están creadas:

```
public/
├── images/
│   ├── logo/           # Logo principal y variaciones
│   ├── gallery/
│   │   ├── before/     # Fotos "antes" de trabajos
│   │   └── after/      # Fotos "después" de trabajos
│   └── testimonials/   # Fotos de clientes
└── videos/
    ├── hero/           # Videos de fondo (opcional)
    └── testimonials/   # Video testimonios
```

## 🔧 Para Producción

1. **Assets**: Subir fotos reales a las carpetas en `/public/images/`
2. **Rutas**: Actualizar URLs en `Gallery.jsx` y `Testimonials.jsx`
3. **Formulario**: Configurar endpoint backend para envío
4. **SEO**: Agregar meta tags y structured data
5. **Analytics**: Integrar Google Analytics

---

Desarrollado con ❤️ para Clint Limpieza de Tapizados

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# clint
