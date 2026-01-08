import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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

  // ✅ dropdown do Login abre no hover
  const [loginOpen, setLoginOpen] = useState(false);

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
            href="#topo"
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

            {/* ✅ LOGIN DROPDOWN (hover) */}
            <DropdownMenu open={loginOpen} onOpenChange={setLoginOpen}>
              <div
                onMouseEnter={() => setLoginOpen(true)}
                onMouseLeave={() => setLoginOpen(false)}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    aria-label="Login"
                    type="button"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[200px]">
                  <DropdownMenuItem asChild>
                    <a href="/login/colaborador">Colaborador</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/login/cliente">Cliente</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/login/regulador">Regulador</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </div>
            </DropdownMenu>

            {/* Botão Fale Conosco */}
            <Button asChild size="sm" className="ml-2">
              <a href="#contato" className="flex items-center gap-2 bg-cyan-600">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </a>
            </Button>
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

                {/* ✅ Login no mobile (lista simples) */}
                <div className="pt-2 border-t border-border/10">
                  <div className="text-sm font-bold text-foreground mb-2">
                    Login
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="/login/colaborador"
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Colaborador
                    </a>
                    <a
                      href="/login/cliente"
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Cliente
                    </a>
                    <a
                      href="/login/regulador"
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Regulador
                    </a>
                  </div>
                </div>

                <Button asChild className="w-full mt-4">
                  <a
                    href="#contato"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
