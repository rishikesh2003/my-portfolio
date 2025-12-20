# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern portfolio website built with Astro, React, and Tailwind CSS featuring glassmorphism effects and animations. This is a template designed for easy customization through a single data file.

## Development Commands

```bash
# Development server (runs on http://localhost:4321)
bun dev

# Production build
bun run build

# Preview production build locally
bun run preview
```

## Architecture

### Core Structure

This is an Astro-based SSG portfolio with React islands for interactive components:

- **[src/lib/data.ts](src/lib/data.ts)** - **SINGLE SOURCE OF TRUTH for all portfolio content**. All customization happens here. Contains:
  - `personalInfo` - Name, location, email, social links, profile picture, hero description
  - `workExperience` - Array of work history with achievements
  - `education` - Educational background
  - `skills` - Categorized skill sets (languages, frontend, backend, cloud, tools)
  - `projects` - Portfolio projects with descriptions and links
  - `awards` - Awards and achievements

- **[src/pages/index.astro](src/pages/index.astro)** - Main page that composes all sections. All React components use `client:only="react"` directive for client-side hydration.

- **[src/layouts/Layout.astro](src/layouts/Layout.astro)** - Base layout with:
  - Theme system (dark/light mode with localStorage persistence)
  - Global styles and font loading (Inter)
  - Radial gradient background effect
  - Inline script for theme initialization (prevents flash)

### Component Organization

**Section Components** (all React with Framer Motion):
- `HeroSection` - Profile picture, name, description
- `ExperienceSection` - Work history timeline
- `EducationSection` - Education timeline
- `SkillsSection` - Skill categories with badges
- `ProjectsSection` - Project cards with descriptions
- `AwardsSection` - Awards grid

**UI Components** (shadcn/ui-inspired in [src/components/ui/](src/components/ui/)):
- `button.tsx` - Button with variants (using class-variance-authority)
- `card.tsx` - Base card component
- `glass-card.tsx` - Glassmorphism card variant
- `theme-toggle.tsx` - Dark/light mode toggle

**Shared Components**:
- `GlassHeader` - Navigation header with glassmorphism
- `TimelineItem` - Reusable timeline item for experience/education
- `MotionWrapper` - Wrapper for Framer Motion animations
- `Footer` - Site footer

### Path Aliases

TypeScript path aliases configured in [tsconfig.json](tsconfig.json):
- `@/` maps to `./src/`
- Example: `import { cn } from "@/lib/utils"`

### Styling System

- **Tailwind CSS v4** with Vite plugin ([astro.config.mjs](astro.config.mjs))
- **CSS Variables** for theming (defined in [src/styles/global.css](src/styles/global.css))
- **Glassmorphism** - Backdrop blur effects throughout
- **Dark/Light mode** - CSS class-based (`dark` class on `<html>`)
- Theme toggle persists to localStorage and respects system preference

### Integration Details

- **Astro + React**: React integration configured in [astro.config.mjs](astro.config.mjs)
- All React components are client-only (use `client:only="react"` in .astro files)
- **Framer Motion**: Used for entrance animations and interactive elements
- **Lucide React**: Icon library for consistent iconography

## Key Development Patterns

### Adding New Content

All content changes go through [src/lib/data.ts](src/lib/data.ts). Never hardcode content in components.

### Adding New UI Components

Place shadcn-style components in [src/components/ui/](src/components/ui/). Use the `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for conditional className merging.

### Theme Customization

- CSS variables in [src/styles/global.css](src/styles/global.css)
- Tailwind config uses `components.json` for shadcn/ui compatibility
- Background gradient defined in [Layout.astro](src/layouts/Layout.astro)

### Animation Patterns

Components use Framer Motion with consistent patterns:
- Stagger children animations for lists
- Fade + slide up entrance animations
- `initial`, `animate`, `transition` props

## Dependencies

Key runtime dependencies:
- `astro` - Static site generator
- `@astrojs/react` - React integration
- `react` & `react-dom` (v19)
- `framer-motion` - Animations
- `tailwindcss` & `@tailwindcss/vite` (v4)
- `lucide-react` - Icons
- `class-variance-authority` - Component variants
- `tailwind-merge` + `clsx` - Utility for className merging

## Package Manager

This project uses **Bun** (lockfile: `bun.lock`). Prefer `bun` commands over `npm`/`yarn`.
