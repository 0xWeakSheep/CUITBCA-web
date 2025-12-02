export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">链协</h3>
            <p className="text-primary-foreground/80 text-sm">
              致力于推动区块链技术的学习和应用，建立开放、包容的学生社区。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#members" className="hover:text-primary-foreground transition">
                  成员
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-primary-foreground transition">
                  资源
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">社交媒体</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  微信
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">联系方式</h4>
            <p className="text-sm text-primary-foreground/80 mb-2">📧 contact@example.com</p>
            <p className="text-sm text-primary-foreground/80">📱 微信公众号：链协-Link Chain</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 链协学生协会. 版权所有。</p>
        </div>
      </div>
    </footer>
  )
}
