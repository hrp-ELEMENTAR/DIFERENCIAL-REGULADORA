import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const steps = [{
  num: "01",
  title: "Aviso do Sinistro",
  desc: "Recebemos o aviso e iniciamos o atendimento imediato com checklist completo.",
  details: ["Abertura do processo", "Orientação ao motorista", "Coleta de informações"],
  emoji: "📢"
}, {
  num: "02",
  title: "Guincho & Remoção",
  desc: "Coordenamos a remoção do veículo com registro operacional.",
  details: ["Acionamento de guincho", "Remoção para local seguro", "Registro fotográfico"],
  emoji: "🚚"
}, {
  num: "03",
  title: "Análise Técnica",
  desc: "Realizamos triagem técnica e perícia para apuração de causa.",
  details: ["Verificação de coberturas", "Análise de riscos", "Vistoria especializada"],
  emoji: "🔬"
}, {
  num: "04",
  title: "Relatório Final",
  desc: "Entregamos relatório conclusivo com dossiê completo.",
  details: ["Parecer técnico", "Quantificação de prejuízos", "Certificado de qualidade"],
  emoji: "📊"
}];
export const HowItWorks = () => {
  return <section id="como-funciona" className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
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
        }} className="pill mb-6 text-cyan-600"> COMO FUNCIONA</motion.span>
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
            Processo{" "}
            <span className="gradient-text">simples e transparente</span> 
          </motion.h2>
          <motion.p className="text-muted-foreground text-lg md:text-xl" initial={{
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
            Do aviso ao relatório final em 4 etapas claras e rastreáveis.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => <motion.div key={step.num} className="relative" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.15,
          duration: 0.5
        }}>
              <motion.div className="glass-card rounded-2xl p-6 md:p-8 h-full" whileHover={{
            y: -5,
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="stat-number text-4xl md:text-5xl text-cyan-600">{step.num}</div>
                  
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, j) => <motion.li key={j} className="flex items-center gap-2 text-sm text-muted-foreground" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3 + j * 0.1
              }}>
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {detail}
                    </motion.li>)}
                </ul>
              </motion.div>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + i * 0.1
            }}>
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </motion.div>
                </div>}
            </motion.div>)}
        </div>

        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6
      }}>
          <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20">
            <a href="#contato" className="group text-primary-foreground bg-cyan-600">
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              🚀 INICIAR AGORA
              
              
              
              
               
              
              
              
              
              
              
              
              
              
              
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                
                
                
                
                
                
                
                
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>;
};
