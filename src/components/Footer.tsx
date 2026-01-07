import logo from "@/assets/logo.png";
export const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="border-t py-8 md:py-12 border-primary-foreground">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img alt="Diferencial" className="h-8 w-auto opacity-70" src="/lovable-uploads/9b25929f-8887-47f9-8816-68c211161b6d.png" />
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
    </footer>;
};