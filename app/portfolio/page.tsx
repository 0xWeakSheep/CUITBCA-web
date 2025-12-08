"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories = [
  { id: "all", label: "全部" },
  { id: "web", label: "网站设计" },
  { id: "brand", label: "品牌设计" },
  { id: "mobile", label: "移动应用" },
];

const portfolioItems = [
  {
    id: 1,
    title: "企业官网设计",
    category: "web",
    categoryLabel: "网站设计",
    image: "/picture/eric-stoynov-hsFMnOqdiTs-unsplash.jpg",
    description: "为知名科技企业打造的现代化官网，专注于展示企业文化与核心技术。",
  },
  {
    id: 2,
    title: "品牌视觉识别",
    category: "brand",
    categoryLabel: "品牌设计",
    image: "/picture/eugene-golovesov-3wTDwR9fVio-unsplash.jpg",
    description: "全面的品牌视觉识别系统设计，包括 Logo、色彩规范及应用延展。",
  },
  {
    id: 3,
    title: "移动电商 App",
    category: "mobile",
    categoryLabel: "移动应用",
    image: "/picture/leo_visions-jgNBV1jsAS0-unsplash.jpg",
    description: "用户体验流畅的移动电商应用界面设计，提升转化率与用户留存。",
  },
  {
    id: 4,
    title: "创意营销活动页",
    category: "web",
    categoryLabel: "网站设计",
    image: "/picture/tanya-barrow-coZqGN_BWhk-unsplash.jpg",
    description: "极具视觉冲击力的营销活动落地页，配合动效提升用户参与度。",
  },
  {
    id: 5,
    title: "产品包装设计",
    category: "brand",
    categoryLabel: "品牌设计",
    image: "/picture/tanya-barrow-KbrIt7dkimk-unsplash.jpg",
    description: "高端产品包装设计，通过材质与工艺传达品牌价值。",
  },
  {
    id: 6,
    title: "社交媒体应用",
    category: "mobile",
    categoryLabel: "移动应用",
    image: "/picture/tanya-barrow-S8IR-XgSC_o-unsplash.jpg",
    description: "专注于年轻群体的社交应用界面，采用活泼的配色与交互。",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  const selectedItem = portfolioItems.find((item) => item.id === selectedId);
  const selectedIndex = filteredItems.findIndex((item) => item.id === selectedId);

  const handleNext = useCallback(() => {
    if (selectedIndex === -1) return;
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedId(filteredItems[nextIndex].id);
  }, [selectedIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === -1) return;
    const prevIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedId(filteredItems[prevIndex].id);
  }, [selectedIndex, filteredItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, handleNext, handlePrev]);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="我们的作品" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-[#38bdf8] to-[#34d399] text-[#020617]"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-[#0f172a]"
                  onClick={() => setSelectedId(item.id)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[#38bdf8] text-sm uppercase tracking-wider mb-4">{item.categoryLabel}</p>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm backdrop-blur-sm transition-colors">
                        <Eye className="w-4 h-4" />
                        查看详情
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020617]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:flex"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:flex"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div 
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full md:w-1/3 text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={`title-${selectedItem.id}`}
                  className="text-3xl font-bold mb-4"
                >
                  {selectedItem.title}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  key={`cat-${selectedItem.id}`}
                  className="inline-block px-3 py-1 bg-[#38bdf8]/10 text-[#38bdf8] rounded-full text-xs uppercase tracking-wider mb-6"
                >
                  {selectedItem.categoryLabel}
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  key={`desc-${selectedItem.id}`}
                  className="text-white/70 leading-relaxed text-lg"
                >
                  {selectedItem.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

