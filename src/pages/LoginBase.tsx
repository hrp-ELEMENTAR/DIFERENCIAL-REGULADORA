import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

type Role = "cliente" | "regulador";

export default function LoginBase({ expectedRole }: { expectedRole: Role }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    // se já estiver logado, manda direto pro painel correto
    const check = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;
      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (data?.role === "cliente") navigate("/cliente", { replace: true });
      if (data?.role === "regulador") navigate("/regulador", { replace: true });
    };

    check();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setLoading(false);
      setErro(error.message);
      return;
    }

    const user = data.user;
    if (!user) {
      setLoading(false);
      setErro("Não foi possível obter usuário.");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || !profile?.role) {
      await supabase.auth.signOut();
      setLoading(false);
      setErro("Perfil não encontrado. Fale com o suporte.");
      return;
    }

    if (profile.role !== expectedRole) {
      await supabase.auth.signOut();
      setLoading(false);
      setErro(
        `Este usuário é "${profile.role}". Você está tentando entrar como "${expectedRole}".`
      );
      return;
    }

    setLoading(false);
    navigate(expectedRole === "cliente" ? "/cliente" : "/regulador", { replace: true });
  };

  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Login ({expectedRole === "cliente" ? "Cliente" : "Regulador"})
        </h1>
        <p className="text-muted-foreground mb-8">Acesse sua área.</p>

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
