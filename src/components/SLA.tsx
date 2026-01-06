import { motion } from "framer-motion";
import { Clock, FileCheck, AlertCircle } from "lucide-react";

const slaItems = [
  { 
    icon: AlertCircle,
    title: "Atendimento Emergencial",
    time: "2 horas",
    description: "Para casos urgentes com veículo parado ou acidente."
  },
  { 
    icon: Clock,
    title: "Análise Inicial",
    time: "48 horas",
    description: "Após recebimento de dados mínimos do sinistro."
  },
  { 
    icon: FileCheck,
    title: "Relatório Conclusivo",
    time: "15 dias",
    description: "Após documentação completa e diligências finalizadas."
  },
];

export const SLA = () => {
  return (
    <section id="sla" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="glass-card rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="pill mb-4">SLA Garantido</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Prazos que você pode <span className="gradient-text">confiar</span>
            </h2>
            <p className="text-muted-foreground">
              Compromisso com prazos claros e rastreáveis em cada etapa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {slaItems.map((item, i) => (
              <motion.div 
                key={item.title}
                className="text-center p-6 rounded-2xl bg-background/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="stat-number text-3xl mb-2">{item.time}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
