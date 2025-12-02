import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react"

export default function SocialMedia() {
  const platforms = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      description: "查看我们的代码仓库和项目",
      color: "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: "职业发展和行业信息",
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      description: "关注我们的活动和更新",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      name: "WeChat",
      icon: MessageCircle,
      url: "#wechat",
      description: "加入我们的微信公众号",
      color: "bg-green-600 hover:bg-green-700",
    },
  ]

  return (
    <section id="social" className="w-full py-20 md:py-32 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">社交媒体</h2>
          <p className="text-muted-foreground text-lg">在各大平台关注我们，获取最新资讯</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${platform.color} text-white rounded-lg p-8 transition flex flex-col items-center gap-4 group`}
              >
                <Icon size={48} className="group-hover:scale-110 transition" />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{platform.name}</h3>
                  <p className="text-sm opacity-90">{platform.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">更多联系方式</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground mb-2">📧 邮箱：</p>
              <a href="mailto:contact@example.com" className="text-primary hover:underline font-medium">
                contact@example.com
              </a>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">📱 微信公众号：</p>
              <p className="text-foreground font-medium">链协-Link Chain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
