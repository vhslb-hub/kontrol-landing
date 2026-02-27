"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Estudante, 24 anos",
    avatar: "L",
    avatarBg: "bg-orange-500",
    text: "Nunca imaginei que ia conseguir juntar dinheiro pra minha viagem. Com o Kontrol, já economizei R$ 4.500 em 6 meses. A função de metas é sensacional — ver o progresso todo dia me motiva demais.",
    rating: 5,
    highlight: "R$ 4.500 economizados em 6 meses",
  },
  {
    name: "Mariana Costa",
    role: "Autônoma, 31 anos",
    avatar: "M",
    avatarBg: "bg-blue-500",
    text: "Como freelancer, minha renda varia muito todo mês. O Kontrol me ajudou a ter previsibilidade e parar de ficar no vermelho. O horizonte de saldos é exatamente o que eu precisava.",
    rating: 5,
    highlight: "Acabou com o estresse de renda variável",
  },
  {
    name: "Roberto Alves",
    role: "Pai de família, 45 anos",
    avatar: "R",
    avatarBg: "bg-green-600",
    text: "Finalmente consigo ver todas as contas da casa em um lugar só. O controle de dívidas é sensacional — saber exatamente quando cada financiamento termina me deu muita paz de espírito.",
    rating: 5,
    highlight: "Organização financeira familiar simplificada",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-200"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
            className="inline-block bg-yellow-50 text-yellow-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide border border-yellow-200"
          >
            ⭐ Depoimentos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            O que dizem{" "}
            <span className="gradient-text">nossos usuários</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 max-w-xl mx-auto"
          >
            Histórias reais de pessoas que transformaram sua vida financeira
          </motion.p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-6 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-orange-100">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Rating */}
              <StarRating count={testimonial.rating} />

              {/* Highlight */}
              <div className="inline-block bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full w-fit">
                {testimonial.highlight}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed flex-1 text-[15px] italic relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className={`w-11 h-11 ${testimonial.avatarBg} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-black text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-center gap-8 border border-gray-100"
        >
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500">10k+</p>
            <p className="text-gray-700 font-semibold mt-1">usuários ativos</p>
            <p className="text-gray-500 text-sm">e crescendo</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500">4.8</p>
            <StarRating count={5} />
            <p className="text-gray-500 text-sm mt-1">avaliação média</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500">98%</p>
            <p className="text-gray-700 font-semibold mt-1">de satisfação</p>
            <p className="text-gray-500 text-sm">entre usuários ativos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
