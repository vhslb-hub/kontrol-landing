"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Settings, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Baixe o app",
    description:
      "Disponível para iOS e Android. Cadastro em 30 segundos, sem burocracia e sem precisar de cartão de crédito.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    circleBg: "bg-orange-500",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure seu perfil",
    description:
      "O Kontrol adapta o dashboard ao seu perfil: estudante, autônomo ou família. Personalize categorias e metas.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    circleBg: "bg-blue-500",
  },
  {
    number: "03",
    icon: Zap,
    title: "Assuma o controle",
    description:
      "Registre gastos, defina metas e veja seus investimentos crescerem. Em pouco tempo você terá clareza financeira total.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    circleBg: "bg-green-600",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            Como funciona
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Comece em{" "}
            <span className="gradient-text">3 passos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-xl mx-auto"
          >
            De zero ao controle financeiro total em menos de 5 minutos
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) — centered over the circles */}
          <div className="hidden lg:block absolute top-[22px] left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-orange-200 via-blue-200 to-green-200 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Número em círculo colorido */}
                  <div
                    className={`w-11 h-11 ${step.circleBg} rounded-full flex items-center justify-center mb-5 shadow-md flex-shrink-0`}
                  >
                    <span className="text-white font-black text-base leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div
                    className={`w-16 h-16 ${step.bg} border-2 ${step.border} rounded-2xl flex items-center justify-center mb-5`}
                  >
                    <Icon size={28} className={step.color} strokeWidth={1.75} />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-0.5"
          >
            Começar agora — é grátis
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Sem cartão de crédito • 14 dias free • Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
