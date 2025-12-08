"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, Loader2, AlertCircle } from "lucide-react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CinematicCanvas } from "@/components/landing/CinematicCanvas";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "此字段为必填项";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "请输入有效的邮箱地址";
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formState).forEach((key) => {
      const error = validateField(key, formState[key as keyof typeof formState]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormState({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("提交失败，请稍后重试");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-[#38bdf8] selection:text-[#020617]">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
           <SectionHeader 
            title="让我们开始合作" 
            subtitle="填写表单，我们将在 24 小时内回复您"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-[#0f172a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Success Message */}
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0f172a] p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#34d399] to-[#10b981] rounded-full flex items-center justify-center mb-6"
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">提交成功！</h3>
                  <p className="text-white/60 text-lg mb-8">感谢您的咨询，我们将尽快与您联系。</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                  >
                    发送另一条消息
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-white/80">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 bg-[#020617]/50 border ${
                          errors.name ? 'border-red-500/50' : 'border-white/10'
                        } rounded-lg text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300`}
                        placeholder="请输入您的姓名"
                      />
                      {errors.name && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-white/80">
                      邮箱 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 bg-[#020617]/50 border ${
                          errors.email ? 'border-red-500/50' : 'border-white/10'
                        } rounded-lg text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Service Field */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-bold text-white/80">
                      感兴趣的服务 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 bg-[#020617]/50 border ${
                          errors.service ? 'border-red-500/50' : 'border-white/10'
                        } rounded-lg text-white appearance-none focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300`}
                      >
                        <option value="" className="bg-[#020617]">请选择</option>
                        <option value="web" className="bg-[#020617]">网站开发</option>
                        <option value="design" className="bg-[#020617]">品牌设计</option>
                        <option value="marketing" className="bg-[#020617]">数字营销</option>
                        <option value="consulting" className="bg-[#020617]">咨询服务</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                        ▼
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-sm text-red-400 mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-white/80">
                      项目描述 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        className={`w-full px-4 py-4 bg-[#020617]/50 border ${
                          errors.message ? 'border-red-500/50' : 'border-white/10'
                        } rounded-lg text-white resize-none focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all duration-300`}
                        placeholder="请简要描述您的需求..."
                      />
                      <div className={`absolute bottom-3 right-3 text-xs ${
                        formState.message.length > 500 ? 'text-red-500' : 'text-white/30'
                      }`}>
                        {formState.message.length} / 500
                      </div>
                    </div>
                    {errors.message && (
                      <p className="text-sm text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#38bdf8] to-[#34d399] hover:from-[#38bdf8]/90 hover:to-[#34d399]/90 text-[#020617] font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-[#38bdf8]/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="tracking-widest">发送中...</span>
                      </>
                    ) : (
                      <>
                        <span className="tracking-widest">发送消息</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 right-0 h-screen pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#34d399]/10 rounded-full blur-[120px]" />
      </div>

      <Footer />
    </div>
  );
}

