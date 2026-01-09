import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import {
  ClipboardList,
  FileText,
  User,
} from "lucide-react";

export default function Cliente() {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const carregarUsuario = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setNome(user.user_metadata?.name || user.email || "");
      }
    };

    carregarUsuario();
  }, []);

  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black">
            Área do Cliente
          </h1>
          <p className="text-muted-foreground mt-2">
            Olá <strong>{nome}</strong>, bem-vindo à sua área de acompanhamento.
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Meus Sinistros */}
          <div className="rounded-xl border border-border/20 bg-card/40 p-6 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-6 h-6 text-cyan-500" />
              <h2 className="font-bold text-lg">Meus Sinistros</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Acompanhe o andamento dos seus sinistros.
            </p>
            <button className="mt-4 text-sm text-cyan-500 hover:underline">
              Ver sinistros →
            </button>
          </div>

          {/* Relatórios */}
          <div className="rounded-xl border border-border/20 bg-card/40 p-6 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-cyan-500" />
              <h2 className="font-bold text-lg">Relatórios</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Consulte relatórios e documentos disponíveis.
            </p>
            <button className="mt-4 text-sm text-cyan-500 hover:underline">
              Acessar relatórios →
            </button>
          </div>

          {/* Perfil */}
          <div className="rounded-xl border border-border/20 bg-card/40 p-6 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-cyan-500" />
              <h2 className="font-bold text-lg">Meu Perfil</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Visualize e atualize seus dados cadastrais.
            </p>
            <button className="mt-4 text-sm text-cyan-500 hover:underline">
              Ver perfil →
            </button>
          </div>
        </div>

        {/* Área futura */}
        <div className="mt-12 rounded-xl border border-dashed border-border/30 p-8 text-center">
          <p className="text-muted-foreground text-sm">
            🚀 Em breve você poderá acompanhar todo o processo do seu sinistro
            diretamente por aqui.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
