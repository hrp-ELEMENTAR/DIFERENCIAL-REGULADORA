import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { 
    num: "01", 
    title: "Aviso do Sinistro", 
    desc: "Recebemos o aviso e iniciamos o atendimento imediato com checklist completo.",
    details: ["Abertura do processo", "Orientação ao motorista", "Coleta de informações"]
  },
  { 
    num: "02", 
    title: "Guincho & Remoção", 
    desc: "Coordenamos a remoção do veículo com registro operacional.",
    details: ["Acionamento de guincho", "Remoção para local seguro", "Registro fotográfico"]
  },
  { 
    num: "03", 
    title: "Análise Técnica", 
    desc: "Realizamos triagem técnica e perícia para apuração de causa.",
    details: ["Verificação de coberturas", "Análise de riscos", "Vistoria especializada"]
  },
  { 
    num: "04", 
    title: "Relatório Final", 
    desc: "Entregamos relatório conclusivo com dossiê completo.",
    details: ["Parecer técnico", "Quantificação de prejuízos", "Certificado de qualidade"]
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="pill mb-4">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Processo <span className="gradient-text">simples e transparente</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do aviso ao relatório final em 4 etapas claras e rastreáveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="stat-number text-3xl mb-4">{step.num}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg">
            <a href="#contato">
              Iniciar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
