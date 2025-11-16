# Kyle Hancock - Portfolio

A modern, responsive portfolio website showcasing professional experience, technical skills, and certifications. Built with **Astro**, **React**, and **Tailwind CSS**, featuring elegant glassmorphism effects and smooth animations.

## 🌐 Live Site

👉 **[www.kylehancock.com](https://www.kylehancock.com)**

Alternative URLs:
- [kylehancock.com](https://kylehancock.com) (redirects to www)
- [kahancock.github.io/portfolio](https://kahancock.github.io/portfolio) (redirects to custom domain)

## ✨ Features

- **🌙 Dark Mode Default** – Professional dark theme with light mode toggle
- **📱 Fully Responsive** – Optimized for mobile, tablet, and desktop
- **⚡ Blazing Fast** – Powered by Astro for superior performance
- **🎨 Modern Design** – Clean layout with glassmorphism effects
- **✨ Smooth Animations** – Interactive UI powered by Framer Motion
- **🔍 SEO Optimized** – Structured content and meta tags
- **🎓 License Tracking** – Dedicated section for certifications and licenses

## 🏗️ Architecture

### Tech Stack
- **Framework**: Astro 5.x (Static Site Generator)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Content**: MDX for case studies
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

### Project Structure
```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── HeroSection.tsx     # Landing section with profile
│   ├── ExperienceSection.tsx # Professional experience
│   ├── SkillsSection.tsx   # Technical skills
│   ├── LicensesSection.tsx # Certifications & licenses
│   ├── EducationSection.tsx # Academic background
│   └── Footer.tsx          # Contact information
├── layouts/
│   └── Layout.astro        # Base layout with theme system
├── pages/
│   ├── index.astro         # Homepage
├── lib/
│   └── data.ts            # Content configuration
└── styles/
    └── global.css         # Global styles and theme
```

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- npm

### Setup
```bash
# Clone the repository
git clone https://github.com/kahancock/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Customization

All content is managed through `src/lib/data.ts`:

## 🚀 Deployment

The site uses GitHub Actions for automatic deployment to GitHub Pages:

1. **Push to `GH_Pages` branch** triggers deployment
2. **Custom domain** configured via `public/CNAME`
3. **HTTPS** managed automatically by GitHub Pages
4. **DNS** configured with CNAME and A records


## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

**Template Credits:**
- Original portfolio template by **Rishikesh S** ([rishikesh2003](https://github.com/rishikesh2003))
- Template repository: [my-portfolio](https://github.com/rishikesh2003/my-portfolio)

**Technologies:**
- [Astro](https://astro.build/) - Static Site Generator
- [React](https://reactjs.org/) - UI Library  
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [GitHub Pages](https://pages.github.com/) - Hosting

---

## 📞 Contact

**Kyle Hancock**
- 🌐 Website: [www.kylehancock.com](https://www.kylehancock.com)
- 📧 Email: [kyle@kylehancock.com](mailto:kyle@kylehancock.com)
- 💼 LinkedIn: [kyle-a-hancock](https://www.linkedin.com/in/kyle-a-hancock/)
- 🐙 GitHub: [kahancock](https://github.com/kahancock)

---

*Built with ❤️ using modern web technologies*