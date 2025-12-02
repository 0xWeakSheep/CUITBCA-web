export default function Members() {
  const members = [
    {
      name: "张明",
      role: "会长",
      bio: "区块链技术爱好者，专注于智能合约开发",
      contact: "zhangming@example.com",
    },
    {
      name: "李芳",
      role: "副会长",
      bio: "数据分析专家，致力于区块链数据研究",
      contact: "lifang@example.com",
    },
    {
      name: "王伟",
      role: "技术负责人",
      bio: "全栈开发工程师，推动技术实践和创新",
      contact: "wangwei@example.com",
    },
    {
      name: "陈思",
      role: "运营负责人",
      bio: "市场营销专业，负责协会品牌建设",
      contact: "chensi@example.com",
    },
  ]

  return (
    <section id="members" className="w-full py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">协会成员</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <a href={`mailto:${member.contact}`} className="text-primary hover:underline text-sm">
                {member.contact}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">加入我们</h3>
          <p className="text-muted-foreground mb-6">我们欢迎所有对区块链技术感兴趣的学生加入链协大家庭！</p>
          <a
            href="mailto:join@example.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            立即加入
          </a>
        </div>
      </div>
    </section>
  )
}
