import { motion } from "framer-motion";
import { Clock, FileCheck, AlertCircle } from "lucide-react";

const slaItems = [
  { 
    icon: AlertCircle,
    title: "Atendimento Emergencial",
    time: "2 horas",
    description: "Para casos urgentes com veículo parado ou acidente.",
    emoji: "🚨"
  },
  { 
    icon: Clock,
    title: "Análise Inicial",
    time: "48 horas",
    description: "Após recebimento de dados mínimos do sinistro.",
    emoji: "⏱️"
  },
  { 
    icon: FileCheck,
    title: "Relatório Conclusivo",
    time: "15 dias",
    description: "Após documentação completa e diligências finalizadas.",
    emoji: "📑"
  },
];

export const SLA = () => {
  return (
    <section id="sla" className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div 
          className="glass-card rounded-3xl p-8 md:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="pill mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              ⏰ SLA Garantido
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Prazos que você pode{" "}
              <span className="gradient-text">confiar</span> 💯
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Compromisso com prazos claros e rastreáveis em cada etapa.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {slaItems.map((item, i) => (
              <motion.div 
                key={item.title}
                className="text-center p-8 rounded-2xl bg-background/50 border border-border/20 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <item.icon className="h-12 w-12 text-primary" />
                  <span className="text-4xl">{item.emoji}</span>
                </div>
                <div className="stat-number text-4xl md:text-5xl mb-4">{item.time}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
