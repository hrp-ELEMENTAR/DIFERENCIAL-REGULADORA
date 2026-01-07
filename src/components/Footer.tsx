import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
export const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="border-t border-border/20 bg-card/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo e descrição */}
          <div className="space-y-6">
            <img alt="Diferencial Reguladora de Sinistro" className="h-16 md:h-20 w-auto object-contain" src="/lovable-uploads/7a59a6ab-805d-4ae2-bd20-cd13d2c7c8cb.png" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Especialistas em regulação de sinistros de transporte e frotas. 
              Atuação em todo o território nacional.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Navegação</h4>
            <div className="flex flex-col gap-3">
              <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#atuacao" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Atuação Nacional
              </a>
              <a href="#diferenciais" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Diferenciais
              </a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+5545999981551" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (45) 99998-1551
              </a>
              <a href="mailto:contato@diferencialsinistros.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@diferencialsinistros.com.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Atuação em todo território nacional</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {year} Diferencial Reguladora de Sinistro. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Atendimento 24 horas
          </div>
        </div>
      </div>
    </footer>;
};