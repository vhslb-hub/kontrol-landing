"use client";

import { AnimatePresence, motion } from "framer-motion";

export type ScreenType = "overview" | "categories" | "goals" | "investments";

interface PhoneMockupProps {
  screen?: ScreenType;
  perspective?: boolean;
  small?: boolean;
}

export default function PhoneMockup({
  screen = "overview",
  perspective = false,
  small = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative select-none ${small ? "w-52" : "w-72"}`}
      style={perspective ? { perspective: "1200px" } : {}}
    >
      {/* Side buttons */}
      <div className="absolute -left-[5px] top-[72px] w-[4px] h-7 bg-gray-700 rounded-full z-10" />
      <div className="absolute -left-[5px] top-[112px] w-[4px] h-10 bg-gray-700 rounded-full z-10" />
      <div className="absolute -left-[5px] top-[160px] w-[4px] h-10 bg-gray-700 rounded-full z-10" />
      <div className="absolute -right-[5px] top-[100px] w-[4px] h-14 bg-gray-700 rounded-full z-10" />

      {/* Phone frame */}
      <div
        className="bg-gray-900 rounded-[3rem] p-[14px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        style={
          perspective
            ? { transform: "rotateY(-18deg) rotateX(6deg)" }
            : {}
        }
      >
        {/* Screen glass */}
        <div
          className="bg-[#0F172A] rounded-[2.5rem] overflow-hidden relative"
          style={{ aspectRatio: "9/19.5" }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-[22px] bg-black rounded-full z-20" />

          {/* Status bar */}
          <div className="flex justify-between items-center px-7 pt-[52px] pb-1 text-white text-[10px] font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-0.5 text-[10px]">
              <span>▲▲▲</span>
              <span className="ml-1">WiFi</span>
              <span className="ml-1">🔋</span>
            </div>
          </div>

          {/* Screen content with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pt-[80px] overflow-hidden"
            >
              {screen === "overview" && <OverviewScreen />}
              {screen === "categories" && <CategoriesScreen />}
              {screen === "goals" && <GoalsScreen />}
              {screen === "investments" && <InvestmentsScreen />}
            </motion.div>
          </AnimatePresence>

          {/* Bottom home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full z-20" />
        </div>
      </div>
    </div>
  );
}

function OverviewScreen() {
  return (
    <div className="px-4 space-y-3 pb-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-[10px]">Olá, João 👋</p>
          <p className="text-slate-500 text-[10px]">Fevereiro 2026</p>
        </div>
        <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-[10px] font-black">J</span>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-4 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
        <div className="absolute -right-2 -bottom-8 w-28 h-28 bg-white/5 rounded-full" />
        <p className="text-orange-200 text-[10px] mb-0.5 relative z-10">Saldo Total</p>
        <p className="text-white text-2xl font-black relative z-10">
          R$ 12.480
          <span className="text-base">,25</span>
        </p>
        <div className="flex gap-4 mt-3 relative z-10">
          <div>
            <p className="text-orange-200 text-[9px]">↑ Receitas</p>
            <p className="text-white font-bold text-xs">R$ 8.500</p>
          </div>
          <div>
            <p className="text-orange-200 text-[9px]">↓ Despesas</p>
            <p className="text-white font-bold text-xs">R$ 4.250</p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-500/15 border border-green-500/20 rounded-xl p-3">
          <p className="text-green-400 text-[9px] font-medium">Economizado</p>
          <p className="text-white font-bold text-sm">R$ 4.320</p>
          <p className="text-green-400 text-[9px]">↑ 18% vs mês ant.</p>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-3">
          <p className="text-slate-400 text-[9px] font-medium">Diário médio</p>
          <p className="text-white font-bold text-sm">R$ 235,40</p>
          <p className="text-slate-500 text-[9px]">28 dias restantes</p>
        </div>
      </div>

      {/* Category Bars */}
      <div>
        <p className="text-slate-400 text-[10px] font-medium mb-2">Categorias</p>
        <div className="space-y-2.5">
          {[
            { name: "Casa", value: "R$ 1.800", pct: 65, color: "bg-blue-500" },
            { name: "Pessoal", value: "R$ 850", pct: 42, color: "bg-green-500" },
            { name: "Investimentos", value: "R$ 2.000", pct: 80, color: "bg-purple-500" },
          ].map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-slate-400">{item.name}</span>
                <span className="text-white font-medium">{item.value}</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full">
                <div
                  className={`h-1.5 ${item.color} rounded-full`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around pt-3 border-t border-slate-700/50">
        {[
          { icon: "⊞", active: true },
          { icon: "◎", active: false },
          { icon: "✦", active: false },
          { icon: "📈", active: false },
          { icon: "◉", active: false },
        ].map((item, i) => (
          <div
            key={i}
            className={`text-base ${item.active ? "opacity-100" : "opacity-30"}`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoriesScreen() {
  const categories = [
    { name: "Casa", icon: "🏠", spent: "R$ 1.800", budget: "R$ 2.500", pct: 72, color: "bg-blue-500" },
    { name: "Pessoal", icon: "👤", spent: "R$ 850", budget: "R$ 1.200", pct: 71, color: "bg-purple-500" },
    { name: "Cartão", icon: "💳", spent: "R$ 2.100", budget: "R$ 2.000", pct: 105, color: "bg-red-500" },
    { name: "Lazer", icon: "🎮", spent: "R$ 450", budget: "R$ 600", pct: 75, color: "bg-green-500" },
    { name: "Saúde", icon: "💊", spent: "R$ 320", budget: "R$ 500", pct: 64, color: "bg-orange-500" },
  ];

  return (
    <div className="px-4 pb-10">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-white font-bold text-sm">Categorias</h3>
          <p className="text-slate-400 text-[10px]">Fevereiro 2026</p>
        </div>
        <button className="text-orange-500 text-[10px] font-semibold bg-orange-500/10 px-2 py-1 rounded-full">
          + Nova
        </button>
      </div>

      <div className="space-y-2">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-slate-800/60 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">{cat.icon}</span>
                <span className="text-white text-xs font-medium">{cat.name}</span>
              </div>
              <div className="text-right">
                <span className="text-white text-xs font-bold">{cat.spent}</span>
                <span className="text-slate-500 text-[9px]"> / {cat.budget}</span>
              </div>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full">
              <div
                className={`h-1.5 ${cat.pct > 100 ? "bg-red-500" : cat.color} rounded-full`}
                style={{ width: `${Math.min(cat.pct, 100)}%` }}
              />
            </div>
            <p className="text-right text-[9px] text-slate-500 mt-0.5">{cat.pct}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoalsScreen() {
  const goals = [
    { name: "Eurotrip 2027", icon: "✈️", current: 4320, target: 12000, pct: 36, color: "from-orange-400 to-orange-500" },
    { name: "Carro Novo", icon: "🚗", current: 15000, target: 45000, pct: 33, color: "from-blue-400 to-blue-500" },
    { name: "Reserva de Emergência", icon: "🛡️", current: 8500, target: 10000, pct: 85, color: "from-green-400 to-green-500" },
  ];

  return (
    <div className="px-4 pb-10">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-white font-bold text-sm">Minhas Metas</h3>
          <p className="text-slate-400 text-[10px]">3 metas ativas</p>
        </div>
        <button className="text-orange-500 text-[10px] font-semibold bg-orange-500/10 px-2 py-1 rounded-full">
          + Meta
        </button>
      </div>

      <div className="space-y-3">
        {goals.map((goal) => (
          <div key={goal.name} className="bg-slate-800/60 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                {goal.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold truncate">{goal.name}</p>
                <p className="text-slate-400 text-[9px]">
                  R$ {goal.current.toLocaleString("pt-BR")} / R$ {goal.target.toLocaleString("pt-BR")}
                </p>
              </div>
              <span className="text-orange-400 font-black text-sm flex-shrink-0">{goal.pct}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full">
              <div
                className={`h-2 bg-gradient-to-r ${goal.color} rounded-full transition-all`}
                style={{ width: `${goal.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvestmentsScreen() {
  const investments = [
    { name: "Ações BR", icon: "📊", value: "R$ 8.400", change: "+3,2%", positive: true },
    { name: "Fundos Imob.", icon: "🏢", value: "R$ 5.200", change: "+1,8%", positive: true },
    { name: "CDB 120% CDI", icon: "🏦", value: "R$ 12.000", change: "+0,9%", positive: true },
    { name: "Bitcoin", icon: "₿", value: "R$ 3.800", change: "-2,1%", positive: false },
  ];

  return (
    <div className="px-4 pb-10">
      <div className="mb-3">
        <h3 className="text-white font-bold text-sm">Portfólio</h3>
        <p className="text-slate-400 text-[10px]">Atualizado agora</p>
      </div>

      {/* Total card */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-3 mb-3 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
        <p className="text-green-200 text-[9px] relative z-10">Patrimônio Total</p>
        <p className="text-white text-xl font-black relative z-10">R$ 29.400</p>
        <div className="flex items-center gap-1 relative z-10">
          <span className="text-green-300 text-[9px] font-semibold">▲ +12,4%</span>
          <span className="text-green-400 text-[9px]">este mês</span>
        </div>
      </div>

      {/* Distribution */}
      <div className="bg-slate-800/60 rounded-xl p-3 mb-3">
        <p className="text-slate-400 text-[10px] mb-2">Distribuição</p>
        <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
          <div className="bg-blue-500 rounded-l-full" style={{ width: "28%" }} />
          <div className="bg-purple-500" style={{ width: "18%" }} />
          <div className="bg-green-500" style={{ width: "41%" }} />
          <div className="bg-orange-500 rounded-r-full" style={{ width: "13%" }} />
        </div>
      </div>

      <div className="space-y-2">
        {investments.map((inv) => (
          <div
            key={inv.name}
            className="bg-slate-800/60 rounded-xl p-3 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">{inv.icon}</span>
              <div>
                <p className="text-white text-xs font-medium">{inv.name}</p>
                <p className="text-slate-400 text-[9px]">{inv.value}</p>
              </div>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                inv.positive
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {inv.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
