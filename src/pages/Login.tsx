import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  const tipo = useMemo(() => {
    if (typeof window === "undefined") return "";
    const t = new URLSearchParams(window.location.search).get("tipo") || "";
    return t.toLowerCase();
  }, []);

  const titulo =
    tipo === "cliente"
      ? "Login do Cliente"
      : tipo === "regulador"
      ? "Login do Regulador"
      : "Login";

  const subtitulo =
    tipo === "cliente"
      ? "Acesse sua área de cliente. (Em breve vamos conectar com o backend.)"
      : tipo === "regulador"
      ? "Acesse sua área de regulador. (Em breve vamos conectar com o backend.)"
      : "Acesse sua área. (Em breve vamos conectar com o backend.)";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setOk(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    setLoading(false);

    if (error) {
      setErro(error.message);
      return;
    }

    setOk("Login realizado com sucesso!");
    // depois você pode redirecionar: window.location.href = "/area"
  };

  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2">{titulo}</h1>
        <p className="text-muted-foreground mb-8">{subtitulo}</p>

        <div className="max-w-xl rounded-xl border border-border/20 bg-card/40 p-6">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <input
                className="w-full rounded-md border border-border/20 bg-background/40 px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Senha</label>
              <input
                className="w-full rounded-md border border-border/20 bg-background/40 px-3 py-2"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="********"
                type="password"
                required
              />
            </div>

            {erro && (
              <div className="text-sm text-red-400 border border-red-500/30 bg-red-500/10 p-3 rounded-md">
                {erro}
              </div>
            )}

            {ok && (
              <div className="text-sm text-emerald-300 border border-emerald-500/30 bg-emerald-500/10 p-3 rounded-md">
                {ok}
              </div>
            )}

            <button
              disabled={loading}
              className="w-full rounded-md bg-cyan-600 text-white font-medium py-2 hover:bg-cyan-700 transition-colors disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Ainda não tem acesso? Entre em contato com a equipe.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
