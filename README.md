# Plantilla de Portafolios Grupal Moderno

Un sitio web de portafolios elegante y responsivo, construido con Astro, React y Tailwind CSS, que incluye animaciones modernas y efectos de glassmorphism.

![Portfolio Screenshot](https://github.com/user-attachments/assets/4f2466f1-1ebe-4cbe-857c-40eccd63c384)

## Características

- ✨ **Diseño Moderno**: Diseño limpio y profesional con efectos de glassmorphism
- 🎨 **Animaciones**: Transiciones suaves y elementos interactivos utilizando Framer Motion
- 🌙 **Modo Oscuro/Claro**: Cambio de tema fluido con detección de preferencia del sistema
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos y tamaños de pantalla
- 🚀 **Enfocado en el Rendimiento**: Construido con Astro para una excelente velocidad de carga
- 🧩 **Estructura Modular**: Fácil de personalizar y extender
- 🌈 **Fondo con Partículas**: Efectos sutiles de partículas interactivas
- 🔍 **Amigable con SEO**: Contenido estructurado para mejor visibilidad en buscadores

## Demo

[Live Demo](https://rishilol.vercel.app/)

## Empezando

### Prerequisitos

- Node.js (v18 or higher recommended)
- npm or yarn or bun

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Instalar dependencias:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Abra su navegador y visite `http://localhost:4321`

## Personalización de los portafolios

Este proyecto está diseñado para ser fácilmente personalizable principalmente mediante la edición de los datos en el archivo `src/lib/data.ts`:

1. **Información Personal**: Actualiza tu nombre, ubicación, correo electrónico y links a redes sociales.

   ```typescript
   export const personalInfo = {
     name: "Tu Nombre",
     location: "Tu Ubicación",
     email: "tu.email@ejemplo.com",
     github: "https://github.com/tunombredeusuario",
     linkedin: "https://www.linkedin.com/in/tunombredeusuario/",
   };
   ```

2. **Espacio del Usuario**: Añadir o modificar su información a mostrar. En lugar de 'usuario', buscar su apellido. En el campo 'company:' poner el nombre de la universidad. En el campo 'position:' poner la carrera que sigue. En 'period:' poner la fecha de ingreso y fecha de fin de la carrera (en caso de no precisar poner 'a la fecha'). En 'github:' poner el link a github del usuario. En 'achievements:' poner la descripción personal.

   ```typescript
   export const informacionYProyectosUsuario = [
     {
       company: "Universidad Continental",
       location: "Ubicación",
       position: "Ingeniería de Sistemas e Informática",
       period: "Start Date - End Date",
       github: "https://github.com/tunombredeusuario",
       achievements: [
         "Achievement 1",
         "Achievement 2",
         // ...
       ],
     },
     
   ];
   ```
  

## Compilando para producción

Para crear una compilación de producción:

```bash
npm run build
# o
yarn build
# o
bun run build
```

Para obtener una vista previa de la compilación de producción localmente:

```bash
npm run preview
# or
yarn preview
```

## Despliegue

Este proyecto se puede implementar en cualquier servicio de alojamiento de sitios estáticos como Vercel, Netlify, GitHub Pages, etc.

## Licencia 

Este proyecto está licenciado bajo la licencia MIT License - consulte el archivo [LICENSE](LICENSE) para más detalles.

## Copyright

© 2025 Rishikesh S. All rights reserved.

Esta plantilla está diseñada para servir como punto de partida para su portafolio grupal. Puede usarla libremente para su propio portafolio simplemente modificando el archivo `data.ts` y haciendo los ajustes de diseño necesarios. Sin embargo, le rogamos que incluya la atribución al autor original al usar esta plantilla.

## Reconocimientos

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [tsParticles](https://particles.js.org/)
