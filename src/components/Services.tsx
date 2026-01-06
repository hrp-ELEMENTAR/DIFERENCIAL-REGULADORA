import { motion } from "framer-motion";
import { Headphones, Truck, Search, ClipboardCheck, FileText, Scale } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Atendimento 24h",
    description: "Suporte imediato para abertura do sinistro com orientação ao motorista e checklist completo.",
    highlight: "Resposta em até 2h"
  },
  {
    icon: Truck,
    title: "Guincho & Remoção",
    description: "Coordenação de guincho para veículo pesado com registro operacional completo.",
    highlight: "Cobertura nacional"
  },
  {
    icon: Search,
    title: "Triagem Técnica",
    description: "Análise de coberturas, riscos e requisitos para decisão assertiva.",
    highlight: "48h úteis"
  },
  {
    icon: ClipboardCheck,
    title: "Perícia Especializada",
    description: "Vistoria, apuração de causa e nexo causal com parecer técnico detalhado.",
    highlight: "Laudos completos"
  },
  {
    icon: FileText,
    title: "Regulagem",
    description: "Quantificação de prejuízos e emissão de relatório técnico conclusivo.",
    highlight: "Certificado de qualidade"
  },
  {
    icon: Scale,
    title: "Suporte Jurídico",
    description: "Enquadramento de casos, pareceres e ações de regresso quando necessário.",
    highlight: "Proteção completa"
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="pill mb-4">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Tudo que você precisa em <span className="gradient-text">um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Operação ponta a ponta para resolver sinistros com eficiência e segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              className="glass-card rounded-2xl p-6 md:p-8 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {service.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
