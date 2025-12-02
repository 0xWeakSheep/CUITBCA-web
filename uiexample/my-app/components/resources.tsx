import { BookOpen, Code, FileText, Download } from "lucide-react"

export default function Resources() {
  const resources = [
    {
      title: "GitHub 代码仓库",
      description: "访问我们的 GitHub 账号获取最新的项目代码、教程和示例",
      icon: Code,
      url: "https://github.com",
      color: "from-gray-600 to-gray-900",
    },
    {
      title: "区块链研报",
      description: "深度分析报告和行业研究，了解最新的技术动向和市场趋势",
      icon: FileText,
      url: "#research",
      color: "from-blue-600 to-blue-900",
    },
    {
      title: "学习资料",
      description: "精选的教程、文档和最佳实践指南，帮助你快速入门",
      icon: BookOpen,
      url: "#materials",
      color: "from-purple-600 to-purple-900",
    },
    {
      title: "下载中心",
      description: "获取会议资料、演讲稿、工具和其他相关文件",
      icon: Download,
      url: "#downloads",
      color: "from-green-600 to-green-900",
    },
  ]

  return (
    <section id="resources" className="w-full py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">共学资源</h2>
          <p className="text-muted-foreground text-lg">整合最优质的学习资源，助力你的成长之旅</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <a
                key={index}
                href={resource.url}
                target={resource.url.startsWith("http") ? "_blank" : undefined}
                rel={resource.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group"
              >
                <div
                  className={`bg-gradient-to-br ${resource.color} rounded-lg p-8 h-full text-white hover:shadow-xl transition`}
                >
                  <Icon size={48} className="mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-white/90 leading-relaxed">{resource.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-white/80 group-hover:text-white transition">
                    <span>了解更多</span>
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Featured Resources */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8">精选资源</h3>
          <div className="space-y-4">
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-foreground mb-2">📚 区块链基础教程系列</h4>
              <p className="text-muted-foreground">从零开始学习区块链技术，包括密码学、共识算法、智能合约等核心内容</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-foreground mb-2">💻 Solidity 开发入门指南</h4>
              <p className="text-muted-foreground">掌握智能合约开发技能，包括项目实战和常见安全问题</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-foreground mb-2">🔗 DeFi 应用案例分析</h4>
              <p className="text-muted-foreground">深入理解去中心化金融应用，学习市场前沿项目的运作机制</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
