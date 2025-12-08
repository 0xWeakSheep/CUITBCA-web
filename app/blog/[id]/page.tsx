"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38bdf8] to-[#34d399] origin-left z-50"
      style={{ scaleX }}
    />
  );
}

export default function BlogPost() {
  // Mock data for the article
  const article = {
    title: "如何设计令人难忘的用户体验",
    category: "设计",
    date: "2024年12月1日",
    readTime: "8 分钟阅读",
    author: "李明",
    image: "/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg",
    content: `
      <p>用户体验设计不仅仅是让界面好看，更重要的是创造有意义的交互体验。在当今的数字时代，用户每天面对海量的信息和应用，如何让你的产品脱颖而出？答案就在于"体验"。</p>
      
      <h2>什么是用户体验？</h2>
      <p>用户体验（User Experience，简称 UX）是指用户在使用产品、系统或服务过程中建立起来的心理感受。它涉及到用户的需求、价值观、能力和局限性。</p>
      
      <h2>设计的核心原则</h2>
      <p>1. <strong>以用户为中心</strong>：始终站在用户的角度思考问题，解决他们的痛点。</p>
      <p>2. <strong>一致性</strong>：保持界面和交互的一致性，减少用户的学习成本。</p>
      <p>3. <strong>反馈机制</strong>：对用户的每一个操作给予及时的反馈，让他们感到掌控感。</p>
      
      <h2>动效在 UX 中的作用</h2>
      <p>动效不仅仅是装饰，它是交互设计的重要组成部分。合理的动效可以：</p>
      <ul>
        <li>引导用户视线</li>
        <li>解释界面变化</li>
        <li>提供操作反馈</li>
        <li>增强品牌个性</li>
      </ul>
      
      <h2>结语</h2>
      <p>好的设计是看不见的，它自然地融入用户的生活，解决问题于无形之中。</p>
    `
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <ReadingProgress />
      <Navigation />

      <article className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-[#38bdf8] mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            返回文章列表
          </Link>

          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#38bdf8]">
              {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#34d399] flex items-center justify-center text-[#020617] font-bold">
                  {article.author[0]}
                </div>
                <span className="text-white font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#38bdf8] prose-strong:text-white prose-code:text-[#34d399]">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="text-white/60 text-sm">
              标签: 设计, UX, 动效
            </div>
            <button className="flex items-center gap-2 text-white/80 hover:text-[#38bdf8] transition-colors">
              <Share2 className="w-5 h-5" />
              分享文章
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

