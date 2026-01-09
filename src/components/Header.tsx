import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, LogIn, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const baseNavLinks = [
  { hash: "#servicos", label: "Serviços" },
  { hash: "#como-funciona", label: "Como Funciona" },
  { hash: "#atuacao", label: "Atuação" },
  { hash: "#diferenciais", label: "Diferenciais" },
  { hash: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dropdown login (desktop)
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // identifica contexto automaticamente pelo path
  const isCliente =
    location.pathname.startsWith("/login/cliente") ||
    location.pathname.startsWith("/area-cliente");

  const isRegulador =
    location.pathname.startsWith("/login/regulador") ||
    location.pathname.startsWith("/area-regulador");

  const loginLabel = isCliente ? "Cliente" : isRegulador ? "Regulador" : "Login";

  // links: na home vira "#...", fora da home vira "/#..."
  const navLinks = baseNavLinks.map((l) => ({
    href: isHome ? l.hash : `/${l.hash}`,
    label: l.label,
  }));

  const topoHref = isHome ? "#topo" : "/";
  const contatoHref = isHome ? "#contato" : "/#contato";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fecha dropdown ao clicar fora
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!loginRef.current) return;
      if (!loginRef.current.contains(e.target as Node)) setLoginOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const go = (to: string) => {
    // fecha menus e navega sem reload
    setIsOpen(false);
    setLoginOpen(false);
    navigate(to);
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
          {/* Logo */}
          <a
            href={topoHref}
            className="flex items-center gap-3"
            aria-label="Diferencial Reguladora de Sinistro"
            onClick={(e) => {
              // quando não é home, navegar pra "/"
              if (!isHome) {
                e.preventDefault();
                go("/");
              }
              setIsOpen(false);
            }}
          >
            <img
              alt="Diferencial Reguladora de Sinistro"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
              src="/lovable-uploads/513c5c4a-379f-42ca-877f-283160b2803f.png"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* LOGIN dropdown (click, sem piscar) */}
            <div className="relative" ref={loginRef}>
              <button
                type="button"
                onClick={() => setLoginOpen((v) => !v)}
                className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={loginOpen}
              >
                <LogIn className="w-4 h-4" />
                {loginLabel}
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 rounded-xl border border-border/20 bg-card/95 backdrop-blur shadow-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center justify-between"
                      onClick={() => go("/login/cliente")}
                    >
                      Cliente
                      {isCliente && <Check className="w-4 h-4 text-cyan-500" />}
                    </button>

                    <button
                      className="w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center justify-between"
                      onClick={() => go("/login/regulador")}
                    >
                      Regulador
                      {isRegulador && <Check className="w-4 h-4 text-cyan-500" />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botão Fale Conosco */}
            <a
              href={contatoHref}
              className="flex items-center gap-2 bg-cyan-600 text-white font-medium text-sm px-3 py-2 rounded-md hover:bg-cyan-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-border/10 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-medium text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Login no mobile (direto nas 2 opções) */}
                <div className="pt-2 border-t border-border/10">
                  <button
                    type="button"
                    className="w-full text-left font-medium text-lg text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
                    onClick={() => go("/login/cliente")}
                  >
                    <LogIn className="w-5 h-5" />
                    Login Cliente
                  </button>

                  <button
                    type="button"
                    className="w-full text-left font-medium text-lg text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
                    onClick={() => go("/login/regulador")}
                  >
                    <LogIn className="w-5 h-5" />
                    Login Regulador
                  </button>
                </div>

                {/* Fale Conosco no mobile */}
                <a
                  href={contatoHref}
                  className="flex items-center gap-2 bg-cyan-600 text-white font-medium text-lg px-3 py-2 rounded-md hover:bg-cyan-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
