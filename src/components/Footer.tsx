import { Phone, Mail, MapPin } from "lucide-react";
import { useMemo } from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const isHome = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.location.pathname === "/" || window.location.pathname === "";
  }, []);

  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-border/20 bg-card/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-10 md:gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] items-start">
          <div className="space-y-6">
            <img
              alt="Diferencial Reguladora de Sinistro"
              className="h-16 md:h-20 w-auto object-contain"
              src="/lovable-uploads/7a59a6ab-805d-4ae2-bd20-cd13d2c7c8cb.png"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Especialistas em regulação de sinistros de transporte e frotas.
              Atuação em todo o território nacional.
            </p>
          </div>

          <div className="space-y-4 md:pl-10">
            <h4 className="font-bold text-foreground min-h-[24px]">Navegação</h4>
            <div className="flex flex-col gap-3">
              <a href={href("#servicos")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href={href("#como-funciona")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href={href("#atuacao")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Atuação Nacional
              </a>
              <a href={href("#diferenciais")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Diferenciais
              </a>
              <a href={href("#contato")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Legal</h4>
            <div className="flex flex-col gap-3">
              <a
                href="/politica-privacidade"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política Global de Privacidade
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="tel:+5545999981551"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                (45) 99998-1551
              </a>
              <a
                href="mailto:contato@diferencialsinistros.com.br"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-600" />
                contato@diferencialsinistros.com.br
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-cyan-600" />
                <span>Atuação em todo território nacional.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {year} Diferencial Reguladora de Sinistro. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2 text-xs text-[#dedede]">
            <span className="w-2 h-2 rounded-full animate-pulse bg-destructive" />
            Atendimento 24 horas
          </div>
        </div>
      </div>
    </footer>
  );
};
