import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT = "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";
const getWhatsAppLink = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
const contactInfo = [{
  icon: Phone,
  label: "WhatsApp",
  value: "(45) 99998-1551",
  href: getWhatsAppLink(),
  emoji: "📱"
}, {
  icon: Mail,
  label: "E-mail",
  value: "contato@diferencialreguladora.com.br",
  href: "mailto:contato@diferencialreguladora.com.br",
  emoji: "✉️"
}, {
  icon: MapPin,
  label: "Atuação",
  value: "Todo território nacional",
  href: "#atuacao",
  emoji: "🌎"
}];
export const Contact = () => {
  const [status, setStatus] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome") as string;
    const empresa = formData.get("empresa") as string;
    const email = formData.get("email") as string;
    const msg = formData.get("msg") as string;
    const text = `Olá! Meu nome é ${nome}${empresa ? ` (${empresa})` : ""}. Meu e-mail é ${email}. Mensagem: ${msg}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setStatus("Abrindo WhatsApp…");
  };
  return <section id="contato" className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
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
        }}>
            💬 Vamos Conversar
          </motion.span>
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
            Pronto para{" "}
            <span className="gradient-text">simplificar</span> sua operação? 🚀
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
            Solicite uma proposta personalizada para sua frota. Respondemos em até 24h.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div className="lg:col-span-2 space-y-6" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-bold text-2xl mb-8">Fale Conosco </h3>

              {contactInfo.map((item, i) => <motion.a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-all group" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + i * 0.1
            }} whileHover={{
              x: 5
            }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      {item.label} {item.emoji}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.a>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.5
          }}>
              <Button asChild size="lg" className="w-full h-14 text-base group shadow-lg shadow-primary/20">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp 💬
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-3" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="font-bold text-2xl mb-2">Solicitar Proposta </h3>
              <p className="text-muted-foreground mb-8">
                Informe seus dados e descreva sua necessidade. Retornaremos rapidamente.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input name="nome" placeholder="Seu nome *" required className="h-12" />
                  <Input name="empresa" placeholder="Empresa" className="h-12" />
                </div>
                <Input name="email" type="email" placeholder="Seu e-mail *" required className="h-12" />
                <Textarea name="msg" placeholder="Descreva sua necessidade: quantidade de veículos, regiões de atuação, tipo de frota, urgências..." required className="min-h-[140px]" />
                <Button type="submit" size="lg" className="w-full h-14 text-base group shadow-lg shadow-primary/20">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar via WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                {status && <motion.p className="text-sm text-primary text-center" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }}>
                    {status} ✅
                  </motion.p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};