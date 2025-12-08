"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

const categories = [
  { id: "all", label: "全部" },
  { id: "design", label: "设计" },
  { id: "development", label: "开发" },
  { id: "marketing", label: "营销" },
];

const articles = [
  {
    id: 1,
    title: "如何设计令人难忘的用户体验",
    excerpt: "用户体验设计不仅仅是让界面好看，更重要的是创造有意义的交互体验...",
    category: "design",
    categoryLabel: "设计",
    date: "2024年12月1日",
    readTime: "8 分钟阅读",
    author: "李明",
    image: "/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg",
  },
  {
    id: 2,
    title: "Next.js 14 新特性深度解析",
    excerpt: "深入探讨 Next.js 14 带来的革命性变化，包括 Server Actions 和 Partial Prerendering...",
    category: "development",
    categoryLabel: "开发",
    date: "2024年11月28日",
    readTime: "12 分钟阅读",
    author: "张伟",
    image: "/picture/eugene-golovesov-3wTDwR9fVio-unsplash.jpg",
  },
  {
    id: 3,
    title: "2024 数字营销趋势展望",
    excerpt: "随着 AI 技术的普及，数字营销正在经历前所未有的变革...",
    category: "marketing",
    categoryLabel: "营销",
    date: "2024年11月15日",
    readTime: "6 分钟阅读",
    author: "王芳",
    image: "/picture/leo_visions-jgNBV1jsAS0-unsplash.jpg",
  },
  {
    id: 4,
    title: "构建可扩展的前端架构",
    excerpt: "在大型项目中，如何保持代码的可维护性和扩展性是每个前端工程师面临的挑战...",
    category: "development",
    categoryLabel: "开发",
    date: "2024年11月10日",
    readTime: "15 分钟阅读",
    author: "赵强",
    image: "/picture/tanya-barrow-coZqGN_BWhk-unsplash.jpg",
  },
];

export default function BlogPage() {
  const [filter, setFilter] = useState("all");

  const filteredArticles = articles.filter(
    (article) => filter === "all" || article.category === filter
  );

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <Navigation />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">最新文章</h1>
              <p className="text-white/60 text-lg">探索技术、设计与商业的最新洞见</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-[#38bdf8] to-[#34d399] text-[#020617]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article) => (
                <motion.article
                  layout
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col bg-[#0f172a]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#38bdf8]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#38bdf8]/10"
                >
                  <Link href={`/blog/${article.id}`} className="block relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#020617]/80 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                      {article.categoryLabel}
                    </div>
                  </Link>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#38bdf8] transition-colors">
                      <Link href={`/blog/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#34d399] flex items-center justify-center text-[#020617] text-xs font-bold">
                          {article.author[0]}
                        </div>
                        <span className="text-sm font-medium text-white/80">{article.author}</span>
                      </div>
                      <Link 
                        href={`/blog/${article.id}`}
                        className="flex items-center gap-1 text-sm font-bold text-[#38bdf8] hover:gap-2 transition-all"
                      >
                        阅读全文
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
