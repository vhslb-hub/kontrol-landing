import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade — Kontrol",
  description: "Saiba como o Kontrol coleta, usa e protege seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Documentos legais"
      updatedAt="1º de janeiro de 2026"
    >
      <Section title="1. Introdução">
        <p>
          A Kontrol Tecnologia Ltda. (&ldquo;Kontrol&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;) está
          comprometida com a proteção da sua privacidade. Esta Política descreve
          como coletamos, usamos, armazenamos e protegemos seus dados pessoais
          ao utilizar o aplicativo Kontrol.
        </p>
        <p>
          Esta Política está em conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>{" "}
          e demais legislações aplicáveis.
        </p>
      </Section>

      <Section title="2. Dados que Coletamos">
        <p>Coletamos os seguintes tipos de dados:</p>
        <h3 className="font-bold text-gray-800 mt-4 mb-2">2.1 Dados fornecidos por você</h3>
        <ul>
          <li>Nome completo e endereço de e-mail (no cadastro);</li>
          <li>Dados financeiros inseridos manualmente: receitas, despesas, categorias, metas e investimentos;</li>
          <li>Informações de perfil (tipo de perfil: estudante, autônomo, família);</li>
          <li>Dados de pagamento processados por nosso provedor (não armazenamos dados de cartão).</li>
        </ul>
        <h3 className="font-bold text-gray-800 mt-4 mb-2">2.2 Dados coletados automaticamente</h3>
        <ul>
          <li>Dados de uso do App (funcionalidades acessadas, frequência de uso);</li>
          <li>Informações do dispositivo (sistema operacional, versão do App);</li>
          <li>Endereço IP e dados de localização aproximada;</li>
          <li>Logs de erro para melhoria do serviço.</li>
        </ul>
        <p>
          <strong>Não coletamos</strong> dados bancários diretamente, senhas de
          instituições financeiras, documentos de identidade ou dados sensíveis
          além dos estritamente necessários.
        </p>
      </Section>

      <Section title="3. Como Usamos seus Dados">
        <p>Seus dados são utilizados para:</p>
        <ul>
          <li>Fornecer, manter e melhorar os serviços do Kontrol;</li>
          <li>Personalizar sua experiência no App;</li>
          <li>Processar pagamentos e gerenciar sua assinatura;</li>
          <li>Enviar comunicações sobre o serviço, atualizações e novidades (com opção de cancelamento);</li>
          <li>Responder a dúvidas e prestar suporte ao usuário;</li>
          <li>Detectar e prevenir fraudes e uso abusivo da plataforma;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </Section>

      <Section title="4. Compartilhamento de Dados">
        <p>
          <strong>Não vendemos seus dados pessoais</strong> a terceiros. Podemos
          compartilhá-los apenas nas seguintes situações:
        </p>
        <ul>
          <li>
            <strong>Prestadores de serviço:</strong> parceiros que nos auxiliam
            na operação (ex: serviços de pagamento, infraestrutura em nuvem,
            análise de uso), todos contratualmente obrigados a proteger seus dados;
          </li>
          <li>
            <strong>Obrigação legal:</strong> quando exigido por lei, ordem
            judicial ou autoridade competente;
          </li>
          <li>
            <strong>Proteção de direitos:</strong> para proteger nossos direitos,
            propriedade ou segurança, ou dos usuários.
          </li>
        </ul>
      </Section>

      <Section title="5. Segurança dos Dados">
        <p>Adotamos medidas técnicas e organizacionais para proteger seus dados:</p>
        <ul>
          <li>Criptografia de dados em trânsito (TLS/HTTPS) e em repouso (AES-256);</li>
          <li>Autenticação segura e controle de acesso;</li>
          <li>Backups regulares com retenção segura;</li>
          <li>Monitoramento contínuo contra acessos não autorizados;</li>
          <li>Acesso restrito a funcionários que necessitem dos dados para desempenhar suas funções.</li>
        </ul>
        <p>
          Em caso de incidente de segurança que possa afetar seus dados, você
          será notificado conforme exigido pela LGPD.
        </p>
      </Section>

      <Section title="6. Retenção de Dados">
        <p>
          Mantemos seus dados pelo tempo necessário para prestação dos serviços
          e cumprimento de obrigações legais. Ao encerrar sua conta, seus dados
          pessoais são excluídos em até <strong>90 dias</strong>, exceto quando
          a retenção for exigida por lei (ex: dados fiscais, por 5 anos).
        </p>
      </Section>

      <Section title="7. Seus Direitos">
        <p>
          Conforme a LGPD, você tem os seguintes direitos sobre seus dados
          pessoais:
        </p>
        <ul>
          <li><strong>Acesso:</strong> solicitar confirmação e acesso aos dados que temos sobre você;</li>
          <li><strong>Correção:</strong> atualizar dados incompletos, inexatos ou desatualizados;</li>
          <li><strong>Exclusão:</strong> solicitar a exclusão de dados tratados com base no consentimento;</li>
          <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado e legível;</li>
          <li><strong>Revogação do consentimento:</strong> revogar consentimentos dados a qualquer momento;</li>
          <li><strong>Oposição:</strong> opor-se a tratamentos que não estejam em conformidade com a lei;</li>
          <li><strong>Informação:</strong> saber com quais entidades compartilhamos seus dados.</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato pelo e-mail{" "}
          <strong>privacidade@kontrol.app</strong>.
        </p>
      </Section>

      <Section title="8. Cookies e Tecnologias Similares">
        <p>
          O App e o site utilizam cookies e tecnologias similares para melhorar
          a experiência do usuário, analisar o uso da plataforma e personalizar
          conteúdo. Você pode gerenciar as preferências de cookies nas
          configurações do seu navegador ou dispositivo.
        </p>
      </Section>

      <Section title="9. Transferência Internacional de Dados">
        <p>
          Alguns de nossos prestadores de serviço podem estar localizados fora
          do Brasil. Nestes casos, garantimos que a transferência ocorre com
          salvaguardas adequadas, em conformidade com a LGPD.
        </p>
      </Section>

      <Section title="10. Alterações nesta Política">
        <p>
          Podemos atualizar esta Política periodicamente. Alterações
          significativas serão comunicadas por e-mail ou notificação no App.
          Recomendamos revisar esta página regularmente.
        </p>
      </Section>

      <Section title="11. Contato e Encarregado (DPO)">
        <p>
          Para questões sobre privacidade ou exercício dos seus direitos, entre
          em contato com nosso Encarregado de Proteção de Dados:
        </p>
        <ul>
          <li>E-mail: <strong>privacidade@kontrol.app</strong></li>
          <li>Instagram: <strong>@kontrol.ia</strong></li>
        </ul>
      </Section>
    </LegalLayout>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed [&_h3]:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-gray-800 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
