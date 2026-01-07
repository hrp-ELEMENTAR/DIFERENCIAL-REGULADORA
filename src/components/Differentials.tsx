import { motion } from "framer-motion";
import { Shield, Zap, Eye, Award, Users, Lock } from "lucide-react";
const features = [{
  icon: Zap,
  title: "Agilidade",
  description: "Atendimento emergencial em até 2h e prazos claros para cada etapa do processo.",
  emoji: "⚡"
}, {
  icon: Eye,
  title: "Transparência",
  description: "Atualizações por marcos: você acompanha cada passo do seu sinistro em tempo real.",
  emoji: "👁️"
}, {
  icon: Shield,
  title: "Governança",
  description: "Interlocutor dedicado e reuniões semanais de alinhamento operacional.",
  emoji: "🛡️"
}, {
  icon: Award,
  title: "Qualidade",
  description: "Certificado de qualidade na entrega e relatórios completos para auditoria.",
  emoji: "🏆"
}, {
  icon: Users,
  title: "Especialistas",
  description: "Equipe técnica especializada em sinistros de transporte e frotas.",
  emoji: "👥"
}, {
  icon: Lock,
  title: "LGPD",
  description: "Tratamento de dados seguindo todas as diretrizes de proteção e privacidade.",
  emoji: "🔒"
}];
export const Differentials = () => {
  return <section id="diferenciais" className="py-20 md:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <motion.span initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="pill mb-6 text-cyan-600"> POR QUE NOS ESCOLHER?</motion.span>
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }}>
              Mais que uma reguladora.{" "}
              <span className="gradient-text">Seu parceiro estratégico.</span> 🤝
            </motion.h2>
            <motion.p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }}>
              Trabalhamos para que você foque no seu negócio enquanto cuidamos 
              de toda a complexidade dos sinistros com excelência e responsabilidade.
            </motion.p>
            
            <motion.div className="glass-card rounded-2xl p-8" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }} whileHover={{
            scale: 1.02
          }}>
              <div className="flex items-center gap-6 mb-6">
                <div className="stat-number text-5xl md:text-6xl text-cyan-600">10+</div>
                <div>
                  <div className="font-bold text-xl">Anos de experiência</div>
                  <div className="text-muted-foreground">no setor de transporte 🚛</div>
                </div>
              </div>
              <div className="section-divider !my-4" />
              <p className="text-muted-foreground italic leading-relaxed">
                "Nosso compromisso é entregar resultados com transparência, 
                reduzindo seu retrabalho e protegendo seu patrimônio." ✨
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-4 md:gap-6" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {features.map((feature, i) => <motion.div key={feature.title} className="glass-card rounded-2xl p-6 group" initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + i * 0.1,
            duration: 0.4
          }} whileHover={{
            y: -5,
            scale: 1.03
          }}>
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="h-10 w-10 group-hover:scale-110 transition-transform text-cyan-600" />
                  
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};