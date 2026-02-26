"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O Kontrol é gratuito?",
    answer:
      "Sim! O plano gratuito dá acesso à visão geral, até 3 categorias de gastos e 1 meta de economia. Para funcionalidades avançadas como investimentos, categorias ilimitadas e relatórios, conheça nossos planos Pro e Premium.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos todas as diretrizes da LGPD. Seus dados financeiros nunca são compartilhados com terceiros. Backups automáticos garantem que você nunca perca nenhuma informação.",
  },
  {
    question: "Funciona em iPhone e Android?",
    answer:
      "Sim! O Kontrol está disponível na App Store (iOS 14+) e Google Play (Android 8+). Também temos versão web para acessar pelo computador com todas as funcionalidades sincronizadas em tempo real.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem multa e sem burocracia. Você pode cancelar direto no app com apenas 2 cliques e continua usando todas as funcionalidades do plano contratado até o fim do período pago. Sem letras miúdas.",
  },
  {
    question: "Como funciona o trial de 14 dias?",
    answer:
      "Ao se cadastrar, você ganha 14 dias grátis do plano Pro completo — sem restrições, sem precisar de cartão de crédito. Após o trial, você escolhe se quer assinar o Pro, o Premium, ou continuar gratuitamente no plano básico.",
  },
  {
    question: "O Kontrol conecta com meu banco?",
    answer:
      "No momento, o registro de transações é manual para garantir maior consciência financeira — ao registrar cada gasto, você desenvolve hábitos melhores. Estamos desenvolvendo integração bancária via Open Finance para lançamento em breve.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? "border-orange-200 bg-orange-50/50"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-gray-900 text-base leading-snug">
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            isOpen
              ? "bg-orange-500 text-white rotate-0"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gray-200 text-gray-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide"
          >
            FAQ
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500"
          >
            Tem alguma dúvida? A gente responde.
          </motion.p>
        </div>

        {/* Accordion */}
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            Ainda tem dúvidas?{" "}
            <a
              href="#"
              className="text-orange-500 font-semibold hover:underline"
            >
              Fale com nosso suporte
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
