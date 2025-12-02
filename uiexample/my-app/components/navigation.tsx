"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">链协</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition">
              首页
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition">
              关于
            </button>
            <button
              onClick={() => scrollToSection("members")}
              className="text-foreground hover:text-primary transition"
            >
              成员
            </button>
            <button onClick={() => scrollToSection("social")} className="text-foreground hover:text-primary transition">
              社交
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-foreground hover:text-primary transition"
            >
              资源
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary/10 rounded"
            >
              首页
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary/10 rounded"
            >
              关于
            </button>
            <button
              onClick={() => scrollToSection("members")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary/10 rounded"
            >
              成员
            </button>
            <button
              onClick={() => scrollToSection("social")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary/10 rounded"
            >
              社交
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary/10 rounded"
            >
              资源
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
