import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full pt-32 pb-20 px-4 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          {/* Logo */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/images/logo-e9-93-be-e5-8d-8f-e6-97-a0-e5-ad-97-e7-89-88-pixian-ai.png"
              alt="链协 Logo"
              width={256}
              height={256}
              className="w-full h-full object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              <span className="text-primary">链协</span> - 链接未来
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
              探索区块链技术，共同学习成长。我们是一个充满热情的学生协会，致力于推动区块链技术的理解和应用。
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#members"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              了解我们
            </a>
            <a
              href="#resources"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition"
            >
              获取资源
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
