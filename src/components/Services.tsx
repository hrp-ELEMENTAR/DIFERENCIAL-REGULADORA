import { motion } from "framer-motion";
import { Headphones, Truck, Search, ClipboardCheck, FileText, Scale } from "lucide-react";
const services = [{
  icon: Headphones,
  title: "Atendimento 24h",
  description: "Suporte imediato para abertura do sinistro com orientação ao motorista e checklist completo.",
  highlight: "Resposta em até 2h",
  emoji: "📞"
}, {
  icon: Truck,
  title: "Guincho & Remoção",
  description: "Coordenação de guincho para veículo pesado com registro operacional completo.",
  highlight: "Cobertura nacional",
  emoji: "🚛"
}, {
  icon: Search,
  title: "Triagem Técnica",
  description: "Análise de coberturas, riscos e requisitos para decisão assertiva.",
  highlight: "48h úteis",
  emoji: "🔍"
}, {
  icon: ClipboardCheck,
  title: "Perícia Especializada",
  description: "Vistoria, apuração de causa e nexo causal com parecer técnico detalhado.",
  highlight: "Laudos completos",
  emoji: "📋"
}, {
  icon: FileText,
  title: "Regulagem",
  description: "Quantificação de prejuízos e emissão de relatório técnico conclusivo.",
  highlight: "Certificado de qualidade",
  emoji: "📄"
}, {
  icon: Scale,
  title: "Suporte Jurídico",
  description: "Enquadramento de casos, pareceres e ações de regresso quando necessário.",
  highlight: "Proteção completa",
  emoji: "⚖️"
}];
export const Services = () => {
  return <section id="servicos" className="py-20 md:py-32">
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
          <motion.span className="pill mb-6" initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>🛠️ Nossos Serviços</motion.span>
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
            Tudo que você precisa em{" "}
            <span className="gradient-text">um só lugar</span> ✨
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
            Operação ponta a ponta para resolver sinistros com eficiência e segurança.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => <motion.div key={service.title} className="glass-card rounded-2xl p-8 group cursor-pointer" initial={{
          opacity: 0,
          y: 40,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1,
          duration: 0.5
        }} whileHover={{
          y: -8,
          scale: 1.02
        }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                ✓ {service.highlight}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
};