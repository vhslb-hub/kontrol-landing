"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-white/30">
                🚀 Comece hoje mesmo
              </span>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Pronto pra assumir o controle?
              </h2>

              <p className="text-xl text-orange-100 leading-relaxed mb-10 max-w-lg">
                Junte-se a mais de{" "}
                <strong className="text-white">10.000 pessoas</strong> que já
                transformaram sua vida financeira com o Kontrol.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-full font-black text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Smartphone size={22} />
                  Baixar Grátis — 14 dias free
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* Store badges */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl px-4 py-2.5 cursor-pointer transition-all duration-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-white/70 text-[9px] leading-none">Baixar na</p>
                    <p className="text-white font-bold text-sm leading-none">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl px-4 py-2.5 cursor-pointer transition-all duration-200">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="white" d="M3.18 23.76c.3.17.64.24.97.24.4 0 .8-.11 1.16-.31l14.2-8.2-3.14-3.14-13.19 11.41zm-1.62-21.4C1.21 2.76 1 3.24 1 3.79V20.2c0 .55.21 1.03.56 1.43L9.37 12 1.56 2.36zM20.97 9.58l-2.7-1.56L14.9 12l3.38 3.38 2.7-1.56c.77-.44 1.22-1.15 1.22-1.91 0-.77-.45-1.48-1.23-1.33zM4.15.55C3.79.35 3.39.24 2.99.24c-.33 0-.67.07-.97.24L9.37 12 4.15.55z"/>
                  </svg>
                  <div>
                    <p className="text-white/70 text-[9px] leading-none">Disponível no</p>
                    <p className="text-white font-bold text-sm leading-none">Google Play</p>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  "✓ Sem cartão de crédito",
                  "✓ 14 dias grátis",
                  "✓ Cancele quando quiser",
                ].map((item) => (
                  <span key={item} className="text-orange-100 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 3 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-xl scale-95 -z-10" />
              <PhoneMockup screen="goals" small={false} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
