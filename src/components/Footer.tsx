import logo from "@/assets/logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/10 py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Diferencial" className="h-8 w-auto opacity-70" />
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            © {year} Diferencial Reguladora de Sinistro. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
