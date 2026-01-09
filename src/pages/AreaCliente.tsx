import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AreaCliente() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-black mb-2">Área do Cliente</h1>
          <p className="text-muted-foreground mb-8">
            Bem-vindo! Aqui você vai acompanhar seus sinistros, documentos e mensagens.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Meus Sinistros</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Lista e andamento dos seus sinistros (em breve integrado).
              </p>
              <button
                className="rounded-md bg-cyan-600 text-white font-medium px-4 py-2 hover:bg-cyan-700 transition-colors"
                type="button"
              >
                Ver sinistros
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Documentos</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Upload e consulta de documentos do processo (em breve).
              </p>
              <button
                className="rounded-md border border-border/30 bg-background/30 text-foreground font-medium px-4 py-2 hover:bg-background/40 transition-colors"
                type="button"
              >
                Acessar documentos
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Mensagens</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Comunicação com a equipe e atualizações (em breve).
              </p>
              <button
                className="rounded-md border border-border/30 bg-background/30 text-foreground font-medium px-4 py-2 hover:bg-background/40 transition-colors"
                type="button"
              >
                Abrir mensagens
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Suporte</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Precisa de ajuda? Entre em contato com a equipe.
              </p>
              <a
                href="/#contato"
                className="inline-flex rounded-md bg-cyan-600 text-white font-medium px-4 py-2 hover:bg-cyan-700 transition-colors"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
