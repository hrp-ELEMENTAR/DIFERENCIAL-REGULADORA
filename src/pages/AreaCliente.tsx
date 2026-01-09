import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AreaCliente() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Área do Cliente
        </h1>

        <p className="text-muted-foreground mb-8">
          Bem-vindo à sua área exclusiva. Aqui você poderá acompanhar seus
          sinistros, enviar documentos e visualizar atualizações.
        </p>

        {/* Cards iniciais */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Meus Sinistros</h2>
            <p className="text-sm text-muted-foreground">
              Visualize o andamento de todos os seus sinistros.
            </p>
          </div>

          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Documentos</h2>
            <p className="text-sm text-muted-foreground">
              Envie e acompanhe documentos solicitados.
            </p>
          </div>

          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Mensagens</h2>
            <p className="text-sm text-muted-foreground">
              Comunicação direta com a equipe de regulação.
            </p>
          </div>
        </div>

        {/* Área futura */}
        <div className="mt-12 rounded-xl border border-dashed border-border/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            🚧 Área em desenvolvimento. Em breve mais funcionalidades.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
