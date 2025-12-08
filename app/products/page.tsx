"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, Zap, Shield, Rocket } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

const products = [
  {
    title: "企业网站开发",
    description: "专业的企业网站设计与开发，响应式布局，SEO 优化，助力品牌数字化转型。",
    price: "¥9,999",
    features: ["响应式设计", "SEO 优化", "快速加载"],
    image: "/picture/tanya-barrow-y4CBx5GOlEM-unsplash.jpg",
    tag: "热门",
  },
  {
    title: "电商平台搭建",
    description: "功能强大的 B2C/B2B 电商系统，包含支付、订单管理、会员系统等全套功能。",
    price: "¥29,999",
    features: ["全渠道支付", "库存管理", "会员营销"],
    image: "/picture/tanya-barrow-coZqGN_BWhk-unsplash.jpg",
    tag: "推荐",
  },
  {
    title: "定制软件开发",
    description: "根据业务需求量身定制的软件解决方案，提升企业运营效率。",
    price: "定制报价",
    features: ["需求分析", "系统架构", "长期维护"],
    image: "/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg",
    tag: "专业",
  },
];

const plans = [
  {
    name: "基础版",
    price: "¥9,999",
    features: {
      pages: "5 页",
      design: true,
      seo: false,
      support: "邮件支持",
      cms: false,
    },
  },
  {
    name: "专业版",
    price: "¥19,999",
    featured: true,
    features: {
      pages: "15 页",
      design: true,
      seo: true,
      support: "7x24小时",
      cms: true,
    },
  },
  {
    name: "企业版",
    price: "定制报价",
    features: {
      pages: "无限制",
      design: true,
      seo: true,
      support: "专属顾问",
      cms: true,
    },
  },
];

const comparisonRows = [
  { key: "pages", label: "页面数量" },
  { key: "design", label: "自定义设计", type: "boolean" },
  { key: "seo", label: "SEO 优化", type: "boolean" },
  { key: "cms", label: "后台管理系统", type: "boolean" },
  { key: "support", label: "技术支持" },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <Navigation />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Products Grid */}
          <section>
            <SectionHeader title="我们的服务产品" subtitle="为您提供全方位的数字解决方案" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#0f172a]/50 rounded-2xl border border-white/5 overflow-hidden hover:border-[#38bdf8]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#38bdf8]/10"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#38bdf8] to-[#34d399] rounded-full text-xs font-bold text-[#020617]">
                      {product.tag}
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#020617]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="px-6 py-2 bg-white text-[#020617] rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        查看详情
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#38bdf8] transition-colors">{product.title}</h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-white/50">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-xs text-white/40">起步价</span>
                        <span className="text-xl font-bold text-[#38bdf8]">{product.price}</span>
                      </div>
                      <button className="p-2 rounded-full bg-white/5 hover:bg-[#38bdf8] hover:text-[#020617] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <SectionHeader title="选择最适合您的方案" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <div className="min-w-[800px] bg-[#0f172a]/50 rounded-2xl border border-white/5 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 bg-white/5">
                  <div className="p-6 text-white/60 font-medium flex items-center">功能对比</div>
                  {plans.map((plan, index) => (
                    <div key={index} className={`p-6 text-center relative ${plan.featured ? 'bg-[#38bdf8]/10' : ''}`}>
                      {plan.featured && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#38bdf8] to-[#34d399] text-[#020617] text-[10px] font-bold px-2 py-0.5 rounded-b-lg">
                          推荐
                        </div>
                      )}
                      <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                      <p className={`text-xl font-bold ${plan.featured ? 'text-[#34d399]' : 'text-[#38bdf8]'}`}>
                        {plan.price}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                <div className="divide-y divide-white/5">
                  {comparisonRows.map((row, rowIndex) => (
                    <div 
                      key={rowIndex} 
                      className="grid grid-cols-4 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="p-6 text-white/80 font-medium flex items-center">
                        {row.label}
                      </div>
                      {plans.map((plan, colIndex) => {
                        const value = plan.features[row.key as keyof typeof plan.features];
                        return (
                          <div 
                            key={colIndex} 
                            className={`p-6 flex items-center justify-center text-white/60 ${plan.featured ? 'bg-[#38bdf8]/5' : ''}`}
                          >
                            {row.type === "boolean" ? (
                              value ? (
                                <div className="w-6 h-6 rounded-full bg-[#34d399]/20 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-[#34d399]" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                  <div className="w-2 h-0.5 bg-white/20" />
                                </div>
                              )
                            ) : (
                              <span className="text-sm">{value as string}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}

