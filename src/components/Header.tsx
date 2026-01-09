import { useEffect, useState } from "react";
import { LogIn, LogOut, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export function Header() {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Usuário atual
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listener de auth
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="container-custom flex items-center justify-between h-20">
        {/* LOGO */}
        <a href="/" className="font-bold text-xl">
          DIFERENCIAL
        </a>

        {/* MENU */}
        <nav className="flex items-center gap-6">
          <a href="/#servicos">Serviços</a>
          <a href="/#como-funciona">Como Funciona</a>
          <a href="/#atuacao">Atuação</a>
          <a href="/#diferenciais">Diferenciais</a>
          <a href="/#contato">Contato</a>

          {/* LOGIN / LOGOUT */}
          {!user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1 hover:text-cyan-400"
              >
                <LogIn className="w-4 h-4" />
                Login
                <ChevronDown className="w-4 h-4" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md bg-black border border-white/10 shadow-lg">
                  <a
                    href="/login?tipo=cliente"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Cliente
                  </a>
                  <a
                    href="/login?tipo=regulador"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Regulador
                  </a>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-400 hover:text-red-500"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
