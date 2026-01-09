import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Cliente() {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const carregarUsuario = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setNome(user.email ?? "Cliente");
      }
    };

    carregarUsuario();
  }, []);

  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <div className="rounded-xl border border-border/20 bg-card/40 p-8">
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Olá, {nome}
          </h1>

          <p className="text-muted-foreground mb-6">
            Bem-vindo à área do cliente.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border/20 p-6">
              <h2 className="font-semibold mb-2">📄 Seus Sinistros</h2>
              <p className="text-sm text-muted-foreground">
                Aqui você poderá acompanhar seus sinistros.
              </p>
            </div>

            <div className="rounded-lg border border-border/20 p-6">
              <h2 className="font-semibold mb-2">📞 Suporte</h2>
              <p className="text-sm text-muted-foreground">
                Fale com nossa equipe sempre que precisar.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
