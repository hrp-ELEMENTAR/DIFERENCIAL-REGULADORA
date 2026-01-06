import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Clock, FileCheck } from "lucide-react";
const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT = "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";
const getWhatsAppLink = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
const stats = [{
  number: "24h",
  label: "Atendimento inicial"
}, {
  number: "100%",
  label: "Rastreabilidade"
}, {
  number: "15",
  label: "Dias para relatório"
}];
const highlights = [{
  icon: Shield,
  text: "Governança e compliance"
}, {
  icon: Clock,
  text: "SLA garantido"
}, {
  icon: FileCheck,
  text: "Relatórios completos"
}];
export const Hero = () => {
  return <section className="pt-28 md:pt-36 pb-12 md:pb-20" id="topo">
      <div className="container-custom">
        <motion.div className="hero-card rounded-3xl p-8 md:p-12 lg:p-16" initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <div className="max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <span className="pill mb-6 inline-flex">
                <span className="accent-bar" />
                Especialistas em sinistros de transporte
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 xl:text-6xl">
              Sua operação de sinistros{" "}
              <span className="gradient-text">simplificada</span> do início ao fim.
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>
              Gestão completa de sinistros para frotas e caminhões. 
              Do aviso ao relatório final, com <strong className="text-foreground">transparência</strong>, 
              <strong className="text-foreground"> agilidade</strong> e <strong className="text-foreground">resultados</strong>.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-12" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }}>
              <Button asChild size="lg" className="text-base group">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </motion.div>

            {/* Quick highlights */}
            <motion.div className="flex flex-wrap gap-4 md:gap-6" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6
          }}>
              {highlights.map((item, i) => <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>)}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }}>
          {stats.map((stat, i) => <div key={i} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>)}
        </motion.div>
      </div>
    </section>;
};