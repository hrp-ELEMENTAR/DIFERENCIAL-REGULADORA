import { useEffect, useMemo, useState } from "react";
import { Menu, X, Phone, LogIn, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const baseNavLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dropdown hover (desktop)
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Detecta se está na Home
  const isHome = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.location.pathname === "/" || window.location.pathname === "";
  }, []);

  // ✅ Se não estiver na home, aponta para "/#secao"
  const navLinks = useMemo(() => {
    return baseNavLinks.map((l) => ({
      ...l,
      href: isHome ? l.href : `/${l.href}`,
    }));
  }, [isHome]);

  const topHref = isHome ? "#topo" : "/#topo";
  const contatoHref = isHome ? "#contato" : "/#contato";

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
            href={topHref}
            className="flex items-center gap-3"
            aria-label="Diferencial Reguladora de Sinistro"
            onClick={() => setIsOpen(false)}
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

            {/* ✅ Login com dropdown (Cliente / Regulador) */}
            <DropdownMenu.Root open={loginOpen} onOpenChange={setLoginOpen}>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  onMouseEnter={() => setLoginOpen(true)}
                  onMouseLeave={() => setLoginOpen(false)}
                  className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  onMouseEnter={() => setLoginOpen(true)}
                  onMouseLeave={() => setLoginOpen(false)}
                  sideOffset={10}
                  className="min-w-[190px] rounded-md border border-border/20 bg-card/95 p-1 shadow-lg backdrop-blur"
                >
                  <DropdownMenu.Item asChild>
                    <a
                      href="/login?tipo=cliente"
                      className="block cursor-pointer rounded-sm px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40 outline-none"
                    >
                      Cliente
                    </a>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item asChild>
                    <a
                      href="/login?tipo=regulador"
                      className="block cursor-pointer rounded-sm px-3 py-2 text-sm text-foreground/90 hover:bg-muted/40 outline-none"
                    >
                      Regulador
                    </a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

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

                {/* ✅ Login no mobile com opções */}
                <div className="pt-2 border-t border-border/10">
                  <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground py-2">
                    <LogIn className="w-5 h-5" />
                    Login
                  </div>

                  <a
                    href="/login?tipo=cliente"
                    className="block pl-7 py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cliente
                  </a>
                  <a
                    href="/login?tipo=regulador"
                    className="block pl-7 py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Regulador
                  </a>
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
