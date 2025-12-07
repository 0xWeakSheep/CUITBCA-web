# CUIT Blockchain Association - Cinematic Landing Page

This project is a "Cinematic Sci-Fi" style landing page for the Blockchain Association, built with Next.js, Tailwind CSS, Three.js, and Framer Motion.

## Features

- **Cinematic Background**: 3D rotating particle field with Bloom and Vignette effects.
- **Glassmorphism UI**: Frosted glass transparency for cards and navigation.
- **Micro-interactions**: Hover effects, smooth reveals using Framer Motion.
- **Responsive Design**: Fully responsive layout.

## Tech Stack

- Next.js 15+ (App Router)
- Tailwind CSS v4
- Three.js / @react-three/fiber / @react-three/drei
- @react-three/postprocessing (Bloom, Vignette)
- Framer Motion
- Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
.
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── theme-provider.tsx
├── components
│   ├── landing
│   │   ├── CinematicCanvas.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Navigation.tsx
│   │   └── sections
│   │       ├── AboutSection.tsx
│   │       ├── MembersSection.tsx
│   │       ├── ResourcesSection.tsx
│   │       ├── SocialMediaSection.tsx
│   │       └── index.ts
│   └── ui
│       ├── Card.tsx
│       └── SectionHeader.tsx
├── i18n
│   ├── config.ts
│   ├── language-provider.tsx
│   └── locales
│       ├── en.json
│       └── zh.json
├── public
│   ├── logo
│   │   └── logo.png
│   └── picture
├── types
│   └── index.ts
└── ...
```
