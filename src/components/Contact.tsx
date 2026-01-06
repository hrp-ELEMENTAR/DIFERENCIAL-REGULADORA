import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT = "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";

const getWhatsAppLink = () => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

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

  return (
    <section id="contato" className="py-8">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <h2 className="text-2xl font-black">Contato</h2>
          <span className="pill">Retorno rápido</span>
        </div>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-4">
        <AnimatedSection delay={0.1}>
          <div className="card-glass rounded-2xl p-5 h-full">
            <h3 className="font-bold text-foreground mb-3">Fale com a Diferencial</h3>
            <p className="text-sm text-muted-foreground mb-4">
              WhatsApp: (45) 99998-1551<br />
              E-mail: contato@diferencialreguladora.com.br<br />
              Site: www.diferencialreguladora.com.br
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:contato@diferencialreguladora.com.br">
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar e-mail
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-glass rounded-2xl p-5 h-full">
            <h3 className="font-bold text-foreground mb-3">Solicitar proposta</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input name="nome" placeholder="Seu nome" required />
              <Input name="empresa" placeholder="Empresa" />
              <Input name="email" type="email" placeholder="Seu e-mail" required />
              <Textarea 
                name="msg" 
                placeholder="Descreva sua necessidade (frota, regiões, cenário, urgência...)" 
                required 
                className="min-h-[100px]"
              />
              <Button type="submit" variant="default" className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                Enviar no WhatsApp
              </Button>
              {status && <p className="text-sm text-muted-foreground">{status}</p>}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
