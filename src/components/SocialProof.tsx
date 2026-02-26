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
    label: "na App Store",
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

        {/* Divider with logos/badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <span className="text-gray-300 text-xs font-medium uppercase tracking-widest">
            Disponível em
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-800">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">App Store</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#EA4335" d="M1.22 0h.59l10.2 10.2-10.2 10.2H1.22A1.22 1.22 0 010 19.18V1.22A1.22 1.22 0 011.22 0z"/>
                <path fill="#FBBC04" d="M15.3 10.2L4.27 21.24H1.81l10.2-10.2L15.3 10.2z"/>
                <path fill="#4285F4" d="M22.49 10.2c0 .67-.38 1.34-1.16 1.78l-4.22 2.44L15.3 10.2l1.81-4.22 4.22 2.44c.78.44 1.16 1.11 1.16 1.78z"/>
                <path fill="#34A853" d="M15.3 10.2L12.01 14.5 1.81 24l2.46-2.76L15.3 10.2z"/>
              </svg>
              <span className="text-sm font-semibold text-gray-700">Google Play</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
