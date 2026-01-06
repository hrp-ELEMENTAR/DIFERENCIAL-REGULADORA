const services = [
  {
    title: "Atendimento & Assistência",
    description: "Recebimento do aviso, checklist inicial, orientação ao motorista e comunicação por status.",
  },
  {
    title: "Guincho, Remoção & Logística",
    description: "Acionamento e coordenação de guincho para veículo pesado, remoção e registro operacional.",
  },
  {
    title: "Triagem Técnica",
    description: "Checagem de coberturas, requisitos mínimos e riscos (divergências, cronologia, indícios de fraude).",
  },
  {
    title: "Perícia",
    description: "Vistoria/perícia, apuração de causa e nexo causal; parecer (simples) ou laudo (complexos).",
  },
  {
    title: "Regulagem",
    description: "Quantificação de prejuízos, gestão de orçamentos e emissão de relatório técnico conclusivo.",
  },
  {
    title: "Suporte Jurídico",
    description: "Enquadramento de casos sensíveis, parecer jurídico e ações de regresso quando cabível.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <h2 className="text-2xl font-black">Serviços</h2>
        <span className="pill">
          <span className="accent-bar" aria-hidden="true" />
          Ponta a ponta
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.title} className="card-glass rounded-2xl p-5">
            <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
