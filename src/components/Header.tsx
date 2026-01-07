import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
const navLinks = [{
  href: "#servicos",
  label: "Serviços"
}, {
  href: "#como-funciona",
  label: "Como Funciona"
}, {
  href: "#diferenciais",
  label: "Diferenciais"
}, {
  href: "#contato",
  label: "Contato"
}];
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-header" : "bg-transparent"}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4 gap-4">
          <a href="#topo" className="flex items-center gap-3" aria-label="Diferencial Reguladora de Sinistro">
            <img alt="Diferencial Reguladora de Sinistro" className="h-10 md:h-12 w-auto object-contain" src="/lovable-uploads/87b6a2c6-c1c2-45f2-bcf8-78cd577b5a56.png" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>)}
            <Button asChild size="sm">
              <a href="#contato">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && <motion.div className="md:hidden py-4 border-t border-border/10" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }}>
              <div className="flex flex-col gap-4">
                {navLinks.map(link => <a key={link.href} href={link.href} className="font-medium text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>)}
                <Button asChild className="w-full mt-2">
                  <a href="#contato" onClick={() => setIsOpen(false)}>Fale Conosco</a>
                </Button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.header>;
};