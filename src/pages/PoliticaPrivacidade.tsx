import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Header />

      <main className="min-h-[70vh] bg-background">
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-black mb-6">
              Política Global de Privacidade
            </h1>

            <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
              <p>
                {/* ✅ Troque esse texto pelo seu */}
                Aqui vai o texto completo da sua Política de Privacidade.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground pt-6">
                1. Coleta de dados
              </h2>
              <p>
                Descreva quais dados são coletados e por quê.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground pt-6">
                2. Uso das informações
              </h2>
              <p>
                Explique como as informações serão usadas.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground pt-6">
                3. Contato
              </h2>
              <p>
                Se tiver dúvidas, entre em contato pelo e-mail:
                <strong className="text-foreground"> contato@diferencialsinistros.com.br</strong>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
