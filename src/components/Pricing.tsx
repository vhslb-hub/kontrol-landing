"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Crown, Sparkles } from "lucide-react";

interface Plan {
  name: string;
  icon: typeof Zap;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
}

const plans: Plan[] = [
  {
    name: "Grátis",
    icon: Zap,
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfeito para começar sua jornada financeira",
    features: [
      "Visão geral do saldo",
      "Até 3 categorias de gastos",
      "1 meta de economia ativa",
      "Registro manual de transações",
      "Suporte por e-mail",
    ],
    cta: "Começar Grátis",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    icon: Crown,
    monthlyPrice: 14.9,
    annualPrice: 10.43,
    description: "Para quem quer controle financeiro de verdade",
    features: [
      "Tudo do plano Grátis",
      "Categorias ilimitadas",
      "Metas ilimitadas",
      "Módulo de Investimentos completo",
      "Relatórios mensais detalhados",
      "Horizonte de saldos (calendário)",
      "Gestão de dívidas e empréstimos",
      "Exportação CSV e PDF",
    ],
    cta: "Assinar Pro",
    highlighted: true,
    badge: "Mais popular",
  },
  {
    name: "Premium",
    icon: Sparkles,
    monthlyPrice: 29.9,
    annualPrice: 20.93,
    description: "Experiência máxima com inteligência artificial",
    features: [
      "Tudo do plano Pro",
      "IA personalizada para insights",
      "Notificações inteligentes",
      "Previsão de gastos com IA",
      "Suporte prioritário 24/7",
      "Acesso antecipado a novas funções",
      "Multi-perfil familiar",
      "Consultoria financeira mensal",
    ],
    cta: "Assinar Premium",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            Preços
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Planos que cabem{" "}
            <span className="gradient-text">no seu bolso</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-xl mx-auto mb-10"
          >
            Comece grátis. Evolua quando quiser.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !isAnnual
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isAnnual
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Anual
              <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                -30%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white border-2 border-orange-500 shadow-2xl shadow-orange-100 lg:-mt-4 lg:pb-12"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      ⭐ {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.highlighted
                      ? "bg-orange-500"
                      : "bg-gray-100"
                  }`}
                >
                  <Icon
                    size={22}
                    className={plan.highlighted ? "text-white" : "text-gray-600"}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-black text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {price === 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-gray-900">R$ 0</span>
                      <span className="text-gray-500">/mês</span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-5xl font-black text-gray-900">
                          {price.toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-gray-500">/mês</span>
                      </div>
                      {isAnnual && (
                        <p className="text-green-600 text-sm font-semibold mt-1">
                          Cobrado anualmente · Economize 30%
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="https://kontrol.base44.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-full font-bold text-base transition-all duration-200 mb-8 ${
                    plan.highlighted
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200 hover:-translate-y-0.5"
                      : "bg-gray-900 hover:bg-gray-800 text-white hover:-translate-y-0.5"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "bg-orange-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <Check
                          size={11}
                          strokeWidth={3}
                          className={plan.highlighted ? "text-orange-500" : "text-gray-500"}
                        />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Todos os planos incluem 14 dias de trial gratuito do Pro. Sem cartão de crédito.
          Cancele a qualquer momento.
        </motion.p>
      </div>
    </section>
  );
}
