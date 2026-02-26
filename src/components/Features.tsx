"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutDashboard,
  Tag,
  CalendarDays,
  TrendingUp,
  Target,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Visão Geral",
    description:
      "Dashboard completo com saldo total, economia do mês, custo de vida e diário médio. Tudo em uma tela.",
    gradient: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    border: "border-orange-100",
    hoverBorder: "hover:border-orange-200",
    tag: "Mais usado",
  },
  {
    icon: Tag,
    title: "Gastos por Categoria",
    description:
      "Orçamento inteligente por categoria: Casa, Pessoal, Cartão, Investimento. Saiba onde cada real vai.",
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-200",
    tag: null,
  },
  {
    icon: CalendarDays,
    title: "Horizonte de Saldos",
    description:
      "Planejamento dia a dia. Visualize entradas e saídas no calendário e nunca seja pego de surpresa.",
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    border: "border-purple-100",
    hoverBorder: "hover:border-purple-200",
    tag: null,
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description:
      "Acompanhe seu portfólio: Fundos, Ações, Cripto, CDB. Rentabilidade e diversificação em tempo real.",
    gradient: "from-green-500 to-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    border: "border-green-100",
    hoverBorder: "hover:border-green-200",
    tag: null,
  },
  {
    icon: Target,
    title: "Metas de Economia",
    description:
      "Eurotrip, carro novo, reserva de emergência. Defina metas, acompanhe o progresso e conquiste seus objetivos.",
    gradient: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-500",
    border: "border-rose-100",
    hoverBorder: "hover:border-rose-200",
    tag: null,
  },
  {
    icon: CreditCard,
    title: "Dívidas e Empréstimos",
    description:
      "Gerencie financiamentos e empréstimos. Visualize o que já pagou, o que falta e quando termina.",
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
    hoverBorder: "hover:border-amber-200",
    tag: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 } as const,
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="funcionalidades"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            Funcionalidades
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Tudo que você precisa{" "}
            <span className="gradient-text">em um só app</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Seis módulos poderosos para transformar sua vida financeira
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative bg-white rounded-2xl p-6 border ${feature.border} ${feature.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 cursor-default group`}
              >
                {/* Tag */}
                {feature.tag && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {feature.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className={feature.iconColor} strokeWidth={1.75} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
