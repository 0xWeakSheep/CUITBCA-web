export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">关于链协</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">我们的使命</h3>
              <p className="text-muted-foreground leading-relaxed">
                链协致力于推动校园内区块链技术的理解和应用，为学生提供学习、交流和实践的平台。我们相信区块链技术将改变未来。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">我们的愿景</h3>
              <p className="text-muted-foreground leading-relaxed">
                建立一个开放、包容、创新的学习社区，帮助学生掌握区块链技术，为行业输送优秀人才。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">我们的价值观</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>开放性 - 欢迎所有对区块链感兴趣的学生</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>创新性 - 不断探索新的学习方式</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>实用性 - 将理论与实践相结合</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
              <h4 className="font-bold text-primary mb-2">成立时间</h4>
              <p className="text-foreground">2020年</p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
              <h4 className="font-bold text-accent mb-2">会员数量</h4>
              <p className="text-foreground">500+ 活跃成员</p>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded">
              <h4 className="font-bold text-secondary mb-2">活动频率</h4>
              <p className="text-foreground">每周举办线上分享和实践活动</p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded">
              <h4 className="font-bold text-primary mb-2">发展方向</h4>
              <p className="text-foreground">致力于推动区块链技术在校园的应用和普及</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
