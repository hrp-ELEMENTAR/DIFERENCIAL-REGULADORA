import { motion } from "framer-motion";
import { Shield, Zap, Eye, Award, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Agilidade",
    description: "Atendimento emergencial em até 2h e prazos claros para cada etapa do processo."
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Atualizações por marcos: você acompanha cada passo do seu sinistro em tempo real."
  },
  {
    icon: Shield,
    title: "Governança",
    description: "Interlocutor dedicado e reuniões semanais de alinhamento operacional."
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Certificado de qualidade na entrega e relatórios completos para auditoria."
  },
  {
    icon: Users,
    title: "Especialistas",
    description: "Equipe técnica especializada em sinistros de transporte e frotas."
  },
  {
    icon: Lock,
    title: "LGPD",
    description: "Tratamento de dados seguindo todas as diretrizes de proteção e privacidade."
  },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="pill mb-4">Por que nos escolher?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Mais que uma reguladora.{" "}
              <span className="gradient-text">Seu parceiro estratégico.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Trabalhamos para que você foque no seu negócio enquanto cuidamos 
              de toda a complexidade dos sinistros com excelência e responsabilidade.
            </p>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="stat-number text-4xl">10+</div>
                <div>
                  <div className="font-bold">Anos de experiência</div>
                  <div className="text-sm text-muted-foreground">no setor de transporte</div>
                </div>
              </div>
              <div className="section-divider !my-4" />
              <p className="text-sm text-muted-foreground italic">
                "Nosso compromisso é entregar resultados com transparência, 
                reduzindo seu retrabalho e protegendo seu patrimônio."
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                className="glass-card rounded-xl p-5 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <feature.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
