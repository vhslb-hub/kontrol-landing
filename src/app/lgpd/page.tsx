import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "LGPD — Kontrol",
  description:
    "Como o Kontrol garante conformidade com a Lei Geral de Proteção de Dados.",
};

export default function LGPDPage() {
  return (
    <LegalLayout
      title="LGPD — Lei Geral de Proteção de Dados"
      subtitle="Conformidade & Transparência"
      updatedAt="1º de janeiro de 2026"
    >
      <InfoBox>
        Esta página explica de forma clara e objetiva como o Kontrol cumpre a{" "}
        <strong>Lei nº 13.709/2018 (LGPD)</strong> e como seus dados pessoais são
        tratados em conformidade com a legislação brasileira.
      </InfoBox>

      <Section title="1. O que é a LGPD?">
        <p>
          A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que
          regula as atividades de tratamento de dados pessoais. Ela garante aos
          cidadãos maior controle sobre suas informações e estabelece obrigações
          claras para empresas que tratam dados de pessoas físicas.
        </p>
        <p>
          O Kontrol está totalmente comprometido com o cumprimento da LGPD e
          adota as melhores práticas de proteção de dados desde a concepção do
          produto (<em>Privacy by Design</em>).
        </p>
      </Section>

      <Section title="2. Base Legal para o Tratamento de Dados">
        <p>
          Todo tratamento de dados pessoais realizado pelo Kontrol possui uma
          base legal prevista na LGPD (Art. 7º e Art. 11º):
        </p>
        <table>
          <thead>
            <tr>
              <th>Finalidade</th>
              <th>Base Legal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criação e gestão de conta</td>
              <td>Execução de contrato (Art. 7º, V)</td>
            </tr>
            <tr>
              <td>Prestação dos serviços do App</td>
              <td>Execução de contrato (Art. 7º, V)</td>
            </tr>
            <tr>
              <td>Processamento de pagamentos</td>
              <td>Execução de contrato (Art. 7º, V)</td>
            </tr>
            <tr>
              <td>Envio de comunicações de marketing</td>
              <td>Consentimento (Art. 7º, I)</td>
            </tr>
            <tr>
              <td>Melhoria e análise do produto</td>
              <td>Legítimo interesse (Art. 7º, IX)</td>
            </tr>
            <tr>
              <td>Cumprimento de obrigações fiscais</td>
              <td>Obrigação legal (Art. 7º, II)</td>
            </tr>
            <tr>
              <td>Prevenção a fraudes</td>
              <td>Legítimo interesse (Art. 7º, IX)</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="3. Seus Direitos como Titular de Dados">
        <p>
          A LGPD garante a você, como titular dos dados, os seguintes direitos
          (Art. 18):
        </p>
        <ul>
          <li>
            <strong>Confirmação e Acesso (Art. 18, I e II):</strong> confirmar se
            tratamos seus dados e acessá-los;
          </li>
          <li>
            <strong>Correção (Art. 18, III):</strong> corrigir dados incompletos,
            inexatos ou desatualizados;
          </li>
          <li>
            <strong>Anonimização, bloqueio ou eliminação (Art. 18, IV):</strong>{" "}
            de dados desnecessários, excessivos ou tratados em desconformidade;
          </li>
          <li>
            <strong>Portabilidade (Art. 18, V):</strong> receber seus dados em
            formato estruturado para outro fornecedor;
          </li>
          <li>
            <strong>Eliminação (Art. 18, VI):</strong> excluir dados tratados
            com base no seu consentimento;
          </li>
          <li>
            <strong>Informação sobre compartilhamento (Art. 18, VII):</strong>{" "}
            saber com quais entidades públicas e privadas compartilhamos seus dados;
          </li>
          <li>
            <strong>Revogação do consentimento (Art. 18, IX):</strong> revogar
            o consentimento dado, a qualquer momento;
          </li>
          <li>
            <strong>Oposição (Art. 18, § 2º):</strong> opor-se a tratamentos
            realizados com base em outras bases legais em caso de descumprimento da LGPD.
          </li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
          <strong>privacidade@kontrol.app</strong>. Respondemos em até{" "}
          <strong>15 dias úteis</strong>.
        </p>
      </Section>

      <Section title="4. Encarregado de Proteção de Dados (DPO)">
        <p>
          Conforme exigido pela LGPD (Art. 41), o Kontrol designou um
          Encarregado de Proteção de Dados (Data Protection Officer — DPO),
          responsável por:
        </p>
        <ul>
          <li>Atender requisições dos titulares de dados;</li>
          <li>Comunicar-se com a Autoridade Nacional de Proteção de Dados (ANPD);</li>
          <li>Orientar colaboradores sobre práticas de proteção de dados;</li>
          <li>Executar as demais atribuições determinadas pelo controlador.</li>
        </ul>
        <p>
          Contato do DPO: <strong>privacidade@kontrol.app</strong>
        </p>
      </Section>

      <Section title="5. Segurança e Medidas Técnicas">
        <p>
          O Kontrol adota medidas de segurança alinhadas ao Art. 46 da LGPD:
        </p>
        <ul>
          <li>Criptografia ponta a ponta (TLS 1.3 em trânsito, AES-256 em repouso);</li>
          <li>Autenticação multifator disponível para todos os usuários;</li>
          <li>Backups automáticos com retenção segura e testes regulares de restauração;</li>
          <li>Acesso aos dados restrito ao mínimo necessário (princípio do menor privilégio);</li>
          <li>Auditorias de segurança periódicas e testes de penetração;</li>
          <li>Plano de Resposta a Incidentes documentado e testado.</li>
        </ul>
      </Section>

      <Section title="6. Incidentes de Segurança">
        <p>
          Em caso de incidente de segurança que resulte em risco ou dano
          relevante aos titulares, o Kontrol se compromete a:
        </p>
        <ul>
          <li>
            Notificar a <strong>ANPD</strong> em prazo razoável, conforme Art. 48
            da LGPD;
          </li>
          <li>
            Comunicar os <strong>titulares afetados</strong> com informações
            claras sobre o incidente, os dados envolvidos e as medidas adotadas;
          </li>
          <li>Adotar medidas imediatas para conter e remediar o incidente.</li>
        </ul>
      </Section>

      <Section title="7. Transferência Internacional de Dados">
        <p>
          Quando dados pessoais são transferidos para fora do Brasil (ex:
          provedores de infraestrutura em nuvem), o Kontrol garante que tais
          transferências atendam aos requisitos do Art. 33 da LGPD, utilizando:
        </p>
        <ul>
          <li>Países com nível de proteção adequado reconhecido pela ANPD; ou</li>
          <li>Cláusulas contratuais específicas de proteção de dados; ou</li>
          <li>Outras salvaguardas previstas em lei.</li>
        </ul>
      </Section>

      <Section title="8. Retenção e Eliminação de Dados">
        <p>
          Conforme o princípio da necessidade (Art. 6º, III), mantemos seus
          dados apenas pelo tempo necessário:
        </p>
        <ul>
          <li>
            <strong>Dados de conta ativa:</strong> pelo período de vigência do
            contrato de uso;
          </li>
          <li>
            <strong>Após encerramento da conta:</strong> excluídos em até 90
            dias, salvo obrigação legal de retenção;
          </li>
          <li>
            <strong>Dados fiscais e financeiros:</strong> retidos por 5 anos
            conforme legislação tributária brasileira;
          </li>
          <li>
            <strong>Logs de segurança:</strong> retidos por 6 meses para
            investigação de incidentes.
          </li>
        </ul>
      </Section>

      <Section title="9. Relatório de Impacto à Proteção de Dados (RIPD)">
        <p>
          O Kontrol mantém um Relatório de Impacto à Proteção de Dados Pessoais
          (RIPD) conforme Art. 38 da LGPD, documentando os processos de
          tratamento que podem gerar riscos aos titulares. Este relatório está
          disponível para a ANPD sempre que solicitado.
        </p>
      </Section>

      <Section title="10. Como Exercer seus Direitos">
        <p>Para exercer seus direitos garantidos pela LGPD:</p>
        <ol>
          <li>
            Envie um e-mail para <strong>privacidade@kontrol.app</strong> com o
            assunto &ldquo;Direitos LGPD&rdquo;;
          </li>
          <li>
            Informe o direito que deseja exercer e, quando necessário, confirme
            sua identidade;
          </li>
          <li>
            Responderemos em até <strong>15 dias úteis</strong>. Em casos
            complexos, podemos estender o prazo por mais 15 dias, comunicando
            os motivos.
          </li>
        </ol>
        <p>
          Caso não fique satisfeito com nossa resposta, você pode registrar uma
          reclamação junto à{" "}
          <strong>
            Autoridade Nacional de Proteção de Dados (ANPD) — www.gov.br/anpd
          </strong>.
        </p>
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
      <div className="space-y-4 text-gray-600 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-gray-800 [&_strong]:font-semibold [&_em]:italic [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:bg-gray-50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-sm [&_th]:font-bold [&_th]:text-gray-700 [&_th]:border [&_th]:border-gray-200 [&_td]:px-4 [&_td]:py-2 [&_td]:text-sm [&_td]:border [&_td]:border-gray-200">
        {children}
      </div>
    </section>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-10 text-orange-800 text-sm leading-relaxed [&_strong]:font-bold">
      ℹ️ {children}
    </div>
  );
}
