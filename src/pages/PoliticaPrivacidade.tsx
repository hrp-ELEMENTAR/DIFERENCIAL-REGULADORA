import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-6">
          Política Global de Privacidade
        </h1>

        <div className="prose prose-invert max-w-3xl">
          <p>
            Aqui você vai colocar o texto da sua política (coleta de dados,
            finalidade, compartilhamento, cookies, segurança, direitos do
            titular, etc).
          </p>

          <h2>1. Coleta de informações</h2>
          <p>Descreva quais dados são coletados e como.</p>

          <h2>2. Uso das informações</h2>
          <p>Descreva para que os dados são usados.</p>

          <h2>3. Contato</h2>
          <p>contato@diferencialsinistros.com.br</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
