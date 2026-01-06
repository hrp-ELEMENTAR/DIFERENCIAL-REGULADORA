import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT = "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";

const getWhatsAppLink = () => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const features = [
  {
    title: "Resposta rápida",
    description: "Abertura do caso, orientação imediata e atualização por status.",
  },
  {
    title: "Decisão com evidências",
    description: "Triagem técnica + perícia (quando aplicável) + relatório conclusivo.",
  },
  {
    title: "Controle e rastreabilidade",
    description: "Marcos claros e governança para reduzir retrabalho e risco.",
  },
];

export const Hero = () => {
  return (
    <section className="py-12 md:py-14" id="topo">
      <motion.div 
        className="hero-card rounded-2xl p-6 md:p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span 
          className="pill"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="accent-bar" aria-hidden="true" />
          Operação completa de sinistros • Transporte (Caminhões e Frotas)
        </motion.span>

        <motion.h1 
          className="mt-4 mb-3 text-3xl md:text-4xl lg:text-5xl font-black leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Do aviso ao relatório conclusivo — com governança e SLA.
        </motion.h1>

        <motion.p 
          className="text-muted-foreground leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Prestação de serviços de operação completa de sinistros para o setor de transporte, 
          com foco em caminhões e frotas: assistência ao sinistro, gestão de guincho/remoção, 
          análise inicial, perícia, regulagem e suporte jurídico.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-3 mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button asChild variant="default" size="lg">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contato">Solicitar proposta</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#escopo">Entender o escopo</a>
          </Button>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-3 gap-4 mt-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="card-glass rounded-2xl p-5 h-full">
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
};
