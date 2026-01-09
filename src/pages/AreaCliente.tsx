import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function AreaCliente() {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      // Prioridade: first_name → name → email
      const firstName =
        user.user_metadata?.first_name ||
        user.user_metadata?.name ||
        user.email?.split("@")[0] ||
        "Cliente";

      setNome(firstName);
    };

    getUser();
  }, []);

  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        {/* Saudação personalizada */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Olá, {nome} 👋
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo à Área do Cliente.
          </p>
        </div>

        {/* Cards iniciais */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Meus Sinistros</h2>
            <p className="text-sm text-muted-foreground">
              Acompanhe o status dos seus sinistros.
            </p>
          </div>

          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Documentos</h2>
            <p className="text-sm text-muted-foreground">
              Em breve: envio e visualização de documentos.
            </p>
          </div>

          <div className="rounded-xl border border-border/20 bg-card/40 p-6">
            <h2 className="font-semibold text-lg mb-2">Atendimento</h2>
            <p className="text-sm text-muted-foreground">
              Entre em contato com nossa equipe de suporte.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-dashed border-border/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            🚧 Área do cliente em desenvolvimento.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
