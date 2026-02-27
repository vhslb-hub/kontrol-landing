"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange glow top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-100 rounded-full opacity-60 blur-3xl" />
        {/* Subtle orange circle bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-50 rounded-full opacity-80 blur-2xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(to right, #F97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              14 dias grátis • Sem cartão de crédito
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
            >
              Suas finanças.{" "}
              <span className="gradient-text">Simplificadas.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              O Kontrol é o app que te dá controle total sobre receitas,
              despesas, investimentos e metas — tudo em um só lugar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://kontrol.base44.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
              >
                Começar Grátis — 14 dias free
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#funcionalidades"
                className="group inline-flex items-center justify-center gap-2.5 border-2 border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:bg-orange-50"
              >
                <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play size={12} fill="currentColor" className="text-orange-500 ml-0.5" />
                </div>
                Ver Funcionalidades
              </a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["J", "M", "R", "A", "L"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{
                      backgroundColor: [
                        "#F97316",
                        "#16A34A",
                        "#3B82F6",
                        "#8B5CF6",
                        "#EC4899",
                      ][i],
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  10.000+ usuários ativos
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4.8 avaliação média</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-12 top-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-10 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-sm">↑</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Economizado</p>
                    <p className="text-sm font-black text-gray-900">R$ 4.320</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -right-10 bottom-32 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-10 hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-orange-600 text-sm">🎯</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Meta ativa</p>
                    <p className="text-sm font-black text-gray-900">36% concluído</p>
                  </div>
                </div>
              </motion.div>

              <PhoneMockup screen="overview" perspective={true} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
