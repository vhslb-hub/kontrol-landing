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
                  href="https://kontrol.base44.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-full font-black text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <Smartphone size={22} />
                  Acessar o App Grátis
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              {/* PWA tip */}
              <div className="flex items-start gap-3 mt-8 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 max-w-sm">
                <span className="text-2xl flex-shrink-0">📲</span>
                <div>
                  <p className="text-white font-bold text-sm">Funciona como app nativo</p>
                  <p className="text-orange-100 text-xs mt-0.5 leading-relaxed">
                    Acesse pelo celular e toque em{" "}
                    <strong className="text-white">&ldquo;Adicionar à tela inicial&rdquo;</strong>{" "}
                    para instalar sem precisar de App Store ou Google Play.
                  </p>
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
