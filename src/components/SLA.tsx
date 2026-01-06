const slaItems = [
  { title: "Atendimento inicial:", text: "até 2h (emergencial) ou 24h (demais)." },
  { title: "Análise inicial:", text: "até 48h úteis após recebimento de dados mínimos." },
  { title: "Vistoria/perícia:", text: "2 a 5 dias úteis (ou conforme janela de acesso ao veículo)." },
  { title: "Relatório conclusivo:", text: "10 a 15 dias úteis após documentação completa e diligências finalizadas." },
];

export const SLA = () => {
  return (
    <section id="sla" className="py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <h2 className="text-2xl font-black">SLA (prazos de referência)</h2>
        <span className="pill">Condicionado a dados/documentos</span>
      </div>

      <div className="card-glass rounded-2xl p-5">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {slaItems.map((item) => (
            <li key={item.title}>
              <strong className="text-foreground">{item.title}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
