"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Tag, Target, TrendingUp } from "lucide-react";
import PhoneMockup, { ScreenType } from "./PhoneMockup";

const tabs = [
  {
    id: "overview" as ScreenType,
    label: "Visão Geral",
    icon: LayoutDashboard,
    title: "Controle total na palma da mão",
    description:
      "Dashboard completo com saldo total, evolução patrimonial, diário médio e resumo das categorias — tudo visível de uma vez. Chega de planilhas complicadas.",
    bullets: [
      "Saldo total atualizado em tempo real",
      "Gráfico de receitas vs. despesas",
      "Diário médio e projeção do mês",
      "Resumo visual por categorias",
    ],
    color: "bg-orange-500",
  },
  {
    id: "categories" as ScreenType,
    label: "Categorias",
    icon: Tag,
    title: "Saiba para onde cada real vai",
    description:
      "Organize seus gastos por categorias personalizadas. Defina orçamentos mensais e veja em tempo real se está dentro do limite. Simples assim.",
    bullets: [
      "Categorias personalizáveis",
      "Orçamento mensal por categoria",
      "Alertas quando está perto do limite",
      "Histórico mês a mês",
    ],
    color: "bg-blue-500",
  },
  {
    id: "goals" as ScreenType,
    label: "Metas",
    icon: Target,
    title: "Conquiste seus objetivos financeiros",
    description:
      "Defina metas de economia — viagem, carro, emergência — e acompanhe o progresso. O Kontrol te motiva a guardar mais a cada mês.",
    bullets: [
      "Metas com prazo e valor-alvo",
      "Barra de progresso visual",
      "Contribuição automática sugerida",
      "Celebrações ao atingir metas",
    ],
    color: "bg-rose-500",
  },
  {
    id: "investments" as ScreenType,
    label: "Investimentos",
    icon: TrendingUp,
    title: "Seu portfólio em um só lugar",
    description:
      "Acompanhe ações, fundos, CDB, cripto e mais. Visualize rentabilidade, diversificação e evolução do patrimônio de forma clara e intuitiva.",
    bullets: [
      "Múltiplos tipos de investimento",
      "Gráfico de diversificação",
      "Rentabilidade mensal e acumulada",
      "Patrimônio total consolidado",
    ],
    color: "bg-green-600",
  },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<ScreenType>("overview");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="showcase"
      ref={ref}
      className="py-24 bg-[#0F172A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/10 text-white/70 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            Screenshots
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Veja o Kontrol em ação
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Interface clean e intuitiva, pensada para o seu dia a dia
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-2 mb-14 overflow-x-auto pb-1 justify-start sm:justify-center scrollbar-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white/8 text-slate-400 hover:bg-white/12 hover:text-white border border-white/10"
                }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <PhoneMockup screen={activeTab} />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${currentTab.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {(() => {
                    const Icon = currentTab.icon;
                    return <Icon size={26} className="text-white" />;
                  })()}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  {currentTab.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  {currentTab.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {currentTab.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-orange-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
