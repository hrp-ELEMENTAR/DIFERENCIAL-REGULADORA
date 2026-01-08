import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-6">
          Política de Privacidade – Diferencial Reguladora de Sinistros
        </h1>

        <div className="prose prose-invert max-w-3xl">
          <p>
            A Diferencial Reguladora de Sinistros LTDA, inscrita no CNPJ nº
            57.512.044/0001-18, com sede na Rua Flamboyant, nº 3690, Bairro
            Recanto Tropical, Cascavel – PR, CEP 85807-315, atua com
            responsabilidade e transparência no tratamento de dados pessoais, em
            conformidade com a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018 – LGPD). Esta Política descreve como coletamos,
            utilizamos, armazenamos e protegemos os dados pessoais de usuários,
            clientes, parceiros e colaboradores ao acessar nosso site ou
            utilizar nossos serviços.
          </p>

          <p>
            Coletamos dados pessoais fornecidos diretamente pelo titular, como
            nome, e-mail, telefone e informações necessárias à prestação de
            serviços de perícia e regulação de sinistros veiculares, bem como
            dados coletados automaticamente durante a navegação, como endereço
            IP, tipo de navegador e cookies. Os dados são utilizados para
            execução de contratos, atendimento ao cliente, cumprimento de
            obrigações legais, melhoria dos serviços, segurança da informação e
            comunicações institucionais, sempre com base nas hipóteses legais
            previstas na LGPD, como consentimento, cumprimento de obrigação
            legal, execução contratual e legítimo interesse.
          </p>

          <p>
            A Diferencial Reguladora de Sinistros LTDA não vende nem
            comercializa dados pessoais, podendo compartilhá-los apenas com
            parceiros e prestadores de serviços essenciais, autoridades
            competentes ou quando exigido por lei, sempre observando medidas de
            segurança técnicas e administrativas adequadas. Os dados são
            armazenados pelo tempo necessário ao cumprimento de suas finalidades
            e obrigações legais. O titular pode, a qualquer momento, exercer
            seus direitos de acesso, correção, exclusão, portabilidade,
            revogação de consentimento ou oposição ao tratamento, entrando em
            contato pelo e-mail{" "}
            <a href="mailto:contato@diferencialreguladora.com.br">
              contato@diferencialreguladora.com.br
            </a>
            .
          </p>

          <p>
            Poderemos atualizar esta Política de tempos em tempos. As alterações
            não serão necessariamente precedidas por um aviso publicado no site.
            Incentivamos que você verifique periodicamente possíveis mudanças. O
            uso contínuo do site após a publicação de alterações significa que
            você aceitou as referidas atualizações.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
