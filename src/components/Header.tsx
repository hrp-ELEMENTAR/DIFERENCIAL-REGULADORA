import { useEffect, useState } from "react";
import { Menu, X, Phone, LogIn, LogOut, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <a href="#topo" className="flex items-center gap-3">
            <img
              src="/lovable-uploads/513c5c4a-379f-42ca-877f-283160b2803f.png"
              alt="Diferencial Reguladora de Sinistro"
              className="h-14 md:h-16 lg:h-20 w-auto"
            />
          </a>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            {/* 🔁 LOGIN OU SAIR */}
            {!session ? (
              <div className="relative group">
                <span className="flex items-center gap-1 font-medium text-sm text-muted-foreground cursor-pointer hover:text-foreground">
                  <LogIn className="w-4 h-4" />
                  Login
                  <ChevronDown className="w-4 h-4" />
                </span>

                <div className="absolute right-0 mt-2 w-40 rounded-md bg-background border border-border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                  <a
                    href="/login/cliente"
                    className="block px-4 py-2 text-sm hover:bg-muted"
                  >
                    Cliente
                  </a>
                  <a
                    href="/login/regulador"
                    className="block px-4 py-2 text-sm hover:bg-muted"
                  >
                    Regulador
                  </a>
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 font-medium text-sm text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </button>
            )}

            {/* FALE CONOSCO */}
            <a
              href="#contato"
              className="flex items-center gap-2 bg-cyan-600 text-white font-medium text-sm px-3 py-2 rounded-md hover:bg-cyan-700"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* MOBILE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
