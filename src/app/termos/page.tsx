import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso — Kontrol",
  description: "Leia os Termos de Uso do aplicativo Kontrol.",
};

export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Documentos legais"
      updatedAt="1º de janeiro de 2026"
    >
      <Section title="1. Aceitação dos Termos">
        <p>
          Ao baixar, instalar ou utilizar o aplicativo Kontrol (&ldquo;App&rdquo;), você
          concorda com estes Termos de Uso. Se não concordar com qualquer parte
          destes termos, não utilize o App.
        </p>
        <p>
          Estes Termos constituem um acordo legal entre você (&ldquo;Usuário&rdquo;) e
          Kontrol Tecnologia Ltda. (&ldquo;Kontrol&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;).
        </p>
      </Section>

      <Section title="2. Descrição do Serviço">
        <p>
          O Kontrol é um aplicativo de organização financeira pessoal que
          permite ao usuário registrar receitas, despesas, investimentos e
          metas financeiras. O App é uma ferramenta de gestão pessoal e{" "}
          <strong>não constitui assessoria financeira, de investimentos ou tributária</strong>.
        </p>
        <p>As funcionalidades disponíveis variam conforme o plano contratado:</p>
        <ul>
          <li><strong>Grátis:</strong> visão geral, até 3 categorias e 1 meta ativa.</li>
          <li><strong>Pro:</strong> categorias ilimitadas, metas ilimitadas, módulo de investimentos e relatórios.</li>
          <li><strong>Premium:</strong> tudo do Pro mais IA personalizada, notificações inteligentes e suporte prioritário.</li>
        </ul>
      </Section>

      <Section title="3. Cadastro e Conta">
        <p>
          Para utilizar o Kontrol, você deve criar uma conta fornecendo
          informações verdadeiras, completas e atualizadas. Você é responsável
          por manter a confidencialidade de sua senha e por todas as atividades
          realizadas em sua conta.
        </p>
        <p>
          O Kontrol se reserva o direito de suspender ou encerrar contas que
          violem estes Termos, contenham informações falsas ou sejam utilizadas
          de forma fraudulenta.
        </p>
      </Section>

      <Section title="4. Planos e Pagamentos">
        <p>
          Os planos pagos (Pro e Premium) são cobrados mensalmente ou
          anualmente, conforme escolha do usuário. Os preços podem ser
          alterados com aviso prévio de 30 dias.
        </p>
        <ul>
          <li>
            <strong>Trial gratuito:</strong> ao se cadastrar, você recebe 14
            dias gratuitos do plano Pro. Não é necessário cartão de crédito
            durante o trial.
          </li>
          <li>
            <strong>Cancelamento:</strong> pode ser feito a qualquer momento
            dentro do App. Não há reembolso proporcional pelo período não
            utilizado, exceto quando exigido por lei.
          </li>
          <li>
            <strong>Renovação automática:</strong> os planos anuais e mensais
            são renovados automaticamente ao final do período, salvo cancelamento
            antes da data de renovação.
          </li>
        </ul>
      </Section>

      <Section title="5. Uso Permitido">
        <p>Você concorda em usar o Kontrol apenas para fins legais e pessoais. É expressamente proibido:</p>
        <ul>
          <li>Utilizar o App para fins comerciais sem autorização prévia por escrito;</li>
          <li>Tentar acessar sistemas, servidores ou redes sem autorização;</li>
          <li>Reproduzir, duplicar, copiar ou revender qualquer parte do serviço;</li>
          <li>Utilizar técnicas de engenharia reversa no App ou em sua infraestrutura;</li>
          <li>Compartilhar credenciais de acesso com terceiros;</li>
          <li>Inserir dados falsos ou enganosos no sistema.</li>
        </ul>
      </Section>

      <Section title="6. Propriedade Intelectual">
        <p>
          Todo o conteúdo do App — incluindo design, interface, código-fonte,
          logotipo, marcas e textos — é de propriedade exclusiva do Kontrol e
          protegido pelas leis de propriedade intelectual. Nenhum conteúdo pode
          ser reproduzido sem autorização expressa.
        </p>
      </Section>

      <Section title="7. Isenção de Responsabilidade">
        <p>
          O Kontrol é uma ferramenta de organização pessoal. Não nos
          responsabilizamos por decisões financeiras tomadas com base nos dados
          inseridos no App. As informações exibidas refletem exclusivamente os
          dados cadastrados pelo próprio usuário.
        </p>
        <p>
          Não garantimos que o serviço estará disponível de forma ininterrupta.
          Eventuais manutenções serão comunicadas com antecedência sempre que
          possível.
        </p>
      </Section>

      <Section title="8. Rescisão">
        <p>
          Você pode encerrar sua conta a qualquer momento através das
          configurações do App. O Kontrol pode encerrar ou suspender seu acesso
          imediatamente, sem aviso prévio, em caso de violação destes Termos.
        </p>
      </Section>

      <Section title="9. Alterações nos Termos">
        <p>
          Podemos atualizar estes Termos periodicamente. Alterações
          significativas serão comunicadas por e-mail ou notificação no App com
          pelo menos 15 dias de antecedência. O uso continuado do App após as
          alterações constitui aceitação dos novos termos.
        </p>
      </Section>

      <Section title="10. Foro e Legislação Aplicável">
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil.
          Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer
          disputas decorrentes deste acordo, com renúncia a qualquer outro, por
          mais privilegiado que seja.
        </p>
      </Section>

      <Section title="11. Contato">
        <p>
          Para dúvidas sobre estes Termos de Uso, entre em contato:
        </p>
        <ul>
          <li>E-mail: <strong>legal@kontrol.app</strong></li>
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
      <div className="space-y-4 text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-gray-800 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
