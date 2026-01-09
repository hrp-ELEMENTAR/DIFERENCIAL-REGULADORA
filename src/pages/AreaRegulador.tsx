import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AreaRegulador() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-black mb-2">Área do Regulador</h1>
          <p className="text-muted-foreground mb-8">
            Painel para acompanhamento, criação e gerenciamento de processos (em breve integrado).
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Sinistros Atribuídos</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize os sinistros sob sua responsabilidade (em breve).
              </p>
              <button
                className="rounded-md bg-cyan-600 text-white font-medium px-4 py-2 hover:bg-cyan-700 transition-colors"
                type="button"
              >
                Ver lista
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Criar Relatório</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Geração e envio de relatórios técnicos (em breve).
              </p>
              <button
                className="rounded-md border border-border/30 bg-background/30 text-foreground font-medium px-4 py-2 hover:bg-background/40 transition-colors"
                type="button"
              >
                Novo relatório
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Eventos do Processo</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Registrar ocorrências e atualizações (em breve).
              </p>
              <button
                className="rounded-md border border-border/30 bg-background/30 text-foreground font-medium px-4 py-2 hover:bg-background/40 transition-colors"
                type="button"
              >
                Registrar evento
              </button>
            </div>

            <div className="rounded-xl border border-border/20 bg-card/40 p-6">
              <h2 className="text-lg font-bold mb-2">Consultas</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Buscar sinistros, clientes e documentos (em breve).
              </p>
              <button
                className="rounded-md border border-border/30 bg-background/30 text-foreground font-medium px-4 py-2 hover:bg-background/40 transition-colors"
                type="button"
              >
                Abrir busca
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
