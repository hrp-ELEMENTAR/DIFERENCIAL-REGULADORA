import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";
import {
  FileText,
  ClipboardList,
  Settings,
} from "lucide-react";

export default function Regulador() {
  const [nome, setNome] = useState<string>("");

  useEffect(() => {
    const carregarUsuario = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // tenta pegar nome, se não tiver usa email
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
            Área do Regulador
          </h1>
          <p className="text-muted-foreground mt-2">
            Olá <strong>{nome}</strong>, bem-vindo à área do regulador.
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Sinistros */}
          <div className="rounded-xl border border-border/20 bg-card/40 p-6 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-6 h-6 text-cyan-500" />
              <h2 className="font-bold text-lg">Sinistros</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Visualize e gerencie os sinistros atribuídos a você.
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
              Gere e acompanhe relatórios de regulação e perícia.
            </p>
            <button className="mt-4 text-sm text-cyan-500 hover:underline">
              Acessar relatórios →
            </button>
          </div>

          {/* Configurações */}
          <div className="rounded-xl border border-border/20 bg-card/40 p-6 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-cyan-500" />
              <h2 className="font-bold text-lg">Configurações</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Atualize seus dados e preferências do sistema.
            </p>
            <button className="mt-4 text-sm text-cyan-500 hover:underline">
              Abrir configurações →
            </button>
          </div>
        </div>

        {/* Área futura */}
        <div className="mt-12 rounded-xl border border-dashed border-border/30 p-8 text-center">
          <p className="text-muted-foreground text-sm">
            ⚙️ Novas funcionalidades do painel do regulador serão adicionadas
            aqui em breve.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
