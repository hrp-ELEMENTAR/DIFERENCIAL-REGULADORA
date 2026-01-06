export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/10 py-5 mt-8">
      <div className="container-custom text-sm text-muted-foreground/60">
        © {year} Diferencial Reguladora de Sinistro — www.diferencialreguladora.com.br
      </div>
    </footer>
  );
};
