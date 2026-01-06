import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
      <div className="hero-card rounded-2xl p-6 md:p-8">
        <span className="pill">
          <span className="accent-bar" aria-hidden="true" />
          Operação completa de sinistros • Transporte (Caminhões e Frotas)
        </span>

        <h1 className="mt-4 mb-3 text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
          Do aviso ao relatório conclusivo — com governança e SLA.
        </h1>

        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Prestação de serviços de operação completa de sinistros para o setor de transporte, 
          com foco em caminhões e frotas: assistência ao sinistro, gestão de guincho/remoção, 
          análise inicial, perícia, regulagem e suporte jurídico.
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
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
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {features.map((feature) => (
            <div key={feature.title} className="card-glass rounded-2xl p-5">
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
