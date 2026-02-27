import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  updatedAt: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  updatedAt,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>
          <span className="text-gray-200">|</span>
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-sm leading-none">K.</span>
            </div>
            <span className="text-sm font-bold text-gray-700">Kontrol</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-orange-500 font-bold text-sm uppercase tracking-wide mb-3">
            {subtitle}
          </p>
          <h1 className="text-4xl font-black text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-500 text-sm">
            Última atualização: <strong>{updatedAt}</strong>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-gray max-w-none">{children}</div>
      </div>

      {/* Footer mini */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Kontrol. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/termos" className="hover:text-orange-500 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-orange-500 transition-colors">
              Privacidade
            </Link>
            <Link href="/lgpd" className="hover:text-orange-500 transition-colors">
              LGPD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
