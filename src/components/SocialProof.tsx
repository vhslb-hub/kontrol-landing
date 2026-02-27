"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "10k+",
    label: "Usuários ativos",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Star,
    value: "4.8 ★",
    label: "avaliação média",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: TrendingUp,
    value: "R$ 2M+",
    label: "Economizados",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-500 font-medium mb-10 text-base"
        >
          Mais de{" "}
          <span className="text-orange-500 font-bold">10.000 pessoas</span> já
          organizaram suas finanças com o Kontrol
        </motion.p>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className={`w-12 h-12 ${metric.bg} rounded-2xl flex items-center justify-center`}>
                  <Icon size={22} className={metric.color} />
                </div>
                <div>
                  <p className={`text-3xl font-black ${metric.color}`}>
                    {metric.value}
                  </p>
                  <p className="text-gray-500 text-sm font-medium">{metric.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* App link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <a
            href="https://kontrol.base44.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
            Acessar o App
          </a>
          <p className="text-gray-400 text-xs flex items-center gap-1.5">
            <span>💡</span>
            Adicione à tela inicial para usar como app nativo — sem precisar de App Store ou Google Play
          </p>
        </motion.div>
      </div>
    </section>
  );
}
