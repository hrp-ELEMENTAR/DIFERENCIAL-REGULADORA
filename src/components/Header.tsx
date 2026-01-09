import { useState, useEffect, useMemo } from "react";
import { Menu, X, Phone, LogIn, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ controla o dropdown do Login (desktop)
  const [loginOpen, setLoginOpen] = useState(false);

  // ✅ detecta se está na home (pra hashes funcionarem mesmo vindo de /login)
  const isHome = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.location.pathname === "/" || window.location.pathname === "";
  }, []);

  const navLinks = useMemo(
    () => [
      { href: isHome ? "#servicos" : "/#servicos", label: "Serviços" },
      { href: isHome ? "#como-funciona" : "/#como-funciona", label: "Como Funciona" },
      { href: isHome ? "#atuacao" : "/#atuacao", label: "Atuação" },
      { href: isHome ? "#diferenciais" : "/#diferenciais", label: "Diferenciais" },
      { href: isHome ? "#contato" : "/#contato", label: "Contato" },
    ],
    [isHome]
  );

  const topoHref = isHome ? "#topo" : "/#topo";
  const contatoHref = isHome ? "#contato" : "/#contato";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a
            href={topoHref}
            className="flex items-center gap-3"
            aria-label="Diferencial Reguladora de Sinistro"
            onClick={() => {
              setIsOpen(false);
              setLoginOpen(false);
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

            {/* ✅ Login Dropdown (SEM piscar) */}
            <div
              className="relative"
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <button
                type="button"
                className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={loginOpen}
              >
                <LogIn className="w-4 h-4" />
                Login
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border/20 bg-background/95 backdrop-blur shadow-lg overflow-hidden"
                    role="menu"
                  >
                    <a
                      href="/login?tipo=cliente"
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
                      role="menuitem"
                      onClick={() => setLoginOpen(false)}
                    >
                      Cliente
                    </a>
                    <a
                      href="/login?tipo=regulador"
                      className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
                      role="menuitem"
                      onClick={() => setLoginOpen(false)}
                    >
                      Regulador
                    </a>
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

                {/* Login no mobile (sem dropdown por hover, lista direto) */}
                <div className="pt-2 border-t border-border/10">
                  <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground py-2">
                    <LogIn className="w-5 h-5" />
                    Login
                  </div>
                  <a
                    href="/login?tipo=cliente"
                    className="block pl-7 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cliente
                  </a>
                  <a
                    href="/login?tipo=regulador"
                    className="block pl-7 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Regulador
                  </a>
                </div>

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
