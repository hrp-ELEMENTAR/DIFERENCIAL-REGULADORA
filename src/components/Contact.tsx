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
  href: getWhatsAppLink()
}, {
  icon: Mail,
  label: "E-mail",
  value: "contato@diferencialreguladora.com.br",
  href: "mailto:contato@diferencialreguladora.com.br"
}, {
  icon: MapPin,
  label: "Site",
  value: "www.diferencialreguladora.com.br",
  href: "https://www.diferencialreguladora.com.br"
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
  return <section id="contato" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <span className="pill mb-4 font-semibold text-xs">Vamos Conversar</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center lg:text-5xl">
            Pronto para <span className="gradient-text">simplificar</span> sua operação?
          </h2>
          <p className="text-muted-foreground text-lg">
            Solicite uma proposta personalizada para sua frota. Respondemos em até 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div className="lg:col-span-2 space-y-6" initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-6">Fale Conosco</h3>
              
              {contactInfo.map((item, i) => <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-foreground/5 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>)}
            </div>

            <Button asChild size="lg" className="w-full group">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div className="lg:col-span-3" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-xl mb-2">Solicitar Proposta</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Informe seus dados e descreva sua necessidade. Retornaremos rapidamente.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="nome" placeholder="Seu nome *" required />
                  <Input name="empresa" placeholder="Empresa" />
                </div>
                <Input name="email" type="email" placeholder="Seu e-mail *" required />
                <Textarea name="msg" placeholder="Descreva sua necessidade: quantidade de veículos, regiões de atuação, tipo de frota, urgências..." required className="min-h-[120px]" />
                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar via WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                {status && <p className="text-sm text-primary text-center">{status}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};