const scopeItems = [
  { title: "Atendimento e assistência:", text: "abertura do processo com checklist, orientação imediata, coleta de informações e pronta resposta." },
  { title: "Guincho/remoção:", text: "coordenação de guincho para veículo pesado, remoção para pátio/oficina/local indicado e registro operacional." },
  { title: "Triagem técnica:", text: "conferência preliminar de coberturas, checagem de requisitos mínimos e definição de diligências." },
  { title: "Perícia:", text: "vistoria, análise de causa/dinâmica/nexo causal e emissão de parecer/laudo conforme complexidade." },
  { title: "Regulagem:", text: "quantificação, gestão de orçamentos e relatório técnico conclusivo + certificado de qualidade na entrega." },
  { title: "Jurídico:", text: "parecer de apoio, notificações/tratativas com terceiros e ações de regresso." },
];

const steps = [
  { num: "1", title: "Aviso", desc: "Abertura + checklist" },
  { num: "2", title: "Assistência", desc: "Orientação e prazos" },
  { num: "3", title: "Guincho", desc: "Remoção e registro" },
  { num: "4", title: "Triagem", desc: "Coberturas e riscos" },
  { num: "5", title: "Perícia", desc: "Parecer / laudo" },
  { num: "6", title: "Regulagem", desc: "Quantificação" },
  { num: "7", title: "Encerramento", desc: "Relatório + dossiê" },
];

export const Scope = () => {
  return (
    <section id="escopo" className="py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <h2 className="text-2xl font-black">Escopo da operação</h2>
        <span className="pill">Conforme necessidade do cliente</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card-glass rounded-2xl p-5">
          <h3 className="font-bold text-foreground mb-3">O que fazemos</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {scopeItems.map((item) => (
              <li key={item.title}>
                <strong className="text-foreground">{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-2xl p-5">
          <h3 className="font-bold text-foreground mb-2">Fluxo end-to-end</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Do aviso do sinistro ao encerramento com dossiê e relatório.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {steps.map((step) => (
              <div key={step.num} className="step-card">
                <span className="font-bold text-foreground block mb-1">{step.num}) {step.title}</span>
                <span className="text-xs text-muted-foreground">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
