import { AnimatedSection } from "@/components/AnimatedSection";

const governanceItems = [
  "Interlocutor definido pelo cliente",
  "Atualizações por marcos: abertura, remoção concluída, triagem, vistoria, relatório final",
  "Reunião de alinhamento operacional: semanal",
];

export const Governance = () => {
  return (
    <section id="governanca" className="py-8">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <h2 className="text-2xl font-black">Governança, comunicação e LGPD</h2>
          <span className="pill">Transparência por marcos</span>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-4">
        <AnimatedSection delay={0.1}>
          <div className="card-glass rounded-2xl p-5 h-full">
            <h3 className="font-bold text-foreground mb-3">Ritual de governança</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {governanceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-glass rounded-2xl p-5 h-full">
            <h3 className="font-bold text-foreground mb-2">Confidencialidade e proteção de dados</h3>
            <p className="text-sm text-muted-foreground">
              Tratamento de dados e documentos exclusivamente para execução dos serviços contratados, 
              seguindo diretrizes da LGPD.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
