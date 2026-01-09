import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div id="topo">
      <Header />

      <main className="container-custom pt-28 md:pt-32 pb-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-3">Login</h1>
          <p className="text-muted-foreground mb-8">
            Acesse sua área. (Em breve vamos conectar com o backend.)
          </p>

          <div className="rounded-xl border border-border/20 bg-card/50 p-6 md:p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-md border border-border/30 bg-background/40 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border border-border/30 bg-background/40 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-600"
              />
            </div>

            <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
              Entrar
            </Button>

            <div className="text-xs text-muted-foreground">
              Ainda não tem acesso? Entre em contato com a equipe.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
