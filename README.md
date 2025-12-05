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
```
components/
├── landing/                    # 落地页相关组件
│   ├── LandingPage.tsx        # 主页面组件（组合所有组件）
│   ├── Navigation.tsx         # 导航栏组件
│   ├── Hero.tsx               # 英雄区域组件
│   ├── Footer.tsx             # 页脚组件
│   ├── CinematicCanvas.tsx    # 背景画布组件
│   └── sections/              # 各个内容区块
│       ├── index.ts           # 统一导出文件
│       ├── AboutSection.tsx   # 关于我们区块
│       ├── MembersSection.tsx # 成员区块
│       ├── ResourcesSection.tsx # 资源区块
│       └── SocialMediaSection.tsx # 社交媒体区块
└── ui/                        # 通用UI组件
    ├── Card.tsx               # 卡片组件
    └── SectionHeader.tsx      # 区块标题组件
```

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.
