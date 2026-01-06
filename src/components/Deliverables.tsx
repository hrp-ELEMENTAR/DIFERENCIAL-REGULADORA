import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT = "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";

const getWhatsAppLink = () => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const deliverables = [
  "Ficha de abertura + checklist documental",
  "Relatório de análise inicial (triagem técnica e pendências)",
  "Parecer e laudos de perícia",
  "Relatório de regulagem (com fotos, anexos e conclusão)",
  "Certificado de qualidade de entrega de bem recuperado",
  "Parecer jurídico (quando necessário)",
];

export const Deliverables = () => {
  return (
    <section id="entregaveis" className="py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <h2 className="text-2xl font-black">Entregáveis</h2>
        <span className="pill">Dossiê para decisão e auditoria</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card-glass rounded-2xl p-5">
          <h3 className="font-bold text-foreground mb-3">Pacote por sinistro</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card-glass rounded-2xl p-5">
          <h3 className="font-bold text-foreground mb-2">Proposta sob consulta</h3>
          <p className="text-sm text-muted-foreground mb-4">
            O modelo comercial é desenhado conforme frota, regiões e regras de acionamento.
            Para receber uma proposta, informe quantidade de placas ativas, cobertura desejada e áreas de atuação.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default">
              <a href="#contato">Solicitar proposta</a>
            </Button>
            <Button asChild variant="outline">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
