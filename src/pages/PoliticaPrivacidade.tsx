export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            Política Global de Privacidade
          </h1>

          <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Aqui vai o texto completo da sua Política de Privacidade.
            </p>

            <h2 className="text-foreground text-xl font-bold pt-4">
              1. Dados que coletamos
            </h2>
            <p>
              Descreva quais dados são coletados (ex.: nome, e-mail, telefone, etc).
            </p>

            <h2 className="text-foreground text-xl font-bold pt-4">
              2. Como usamos os dados
            </h2>
            <p>
              Explique o motivo do uso (atendimento, contato, prestação do serviço).
            </p>

            <h2 className="text-foreground text-xl font-bold pt-4">
              3. Contato
            </h2>
            <p>
              Para solicitar alteração/remoção de dados, entre em contato:
              <br />
              <strong className="text-foreground">
                contato@diferencialsinistros.com.br
              </strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
