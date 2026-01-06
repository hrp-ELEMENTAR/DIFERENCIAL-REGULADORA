import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#escopo", label: "Escopo" },
  { href: "#sla", label: "SLA" },
  { href: "#entregaveis", label: "Entregáveis" },
  { href: "#governanca", label: "Governança" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header border-b border-border/10">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-3 gap-4">
          <a 
            href="#topo" 
            className="flex items-center gap-3 font-black tracking-tight"
            aria-label="Diferencial Reguladora de Sinistro"
          >
            <img 
              src={logo} 
              alt="Diferencial Reguladora de Sinistro" 
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-4 font-bold text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/10">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
