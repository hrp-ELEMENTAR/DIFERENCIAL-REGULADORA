import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ArrowRight,
  Shield,
  Clock,
  FileCheck,
  TrendingUp,
  Users,
  Truck,
} from "lucide-react";
import logoSymbol from "@/assets/logo-symbol.png";

const WHATSAPP_NUMBER = "5545999981551";
const WHATSAPP_TEXT =
  "Olá! Vim pelo site da Diferencial e gostaria de solicitar uma proposta (operação completa de sinistros).";
const getWhatsAppLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const BRAND = "#068fa1";

const stats = [
  { number: "24h", label: "Resposta inicial garantida", icon: Clock },
  { number: "100%", label: "Rastreabilidade total", icon: TrendingUp },
  { number: "27", label: "Estados atendidos", icon: Users },
];

const highlights = [
  { icon: Shield, text: "Governança completa" },
  { icon: Clock, text: "SLA garantido" },
  { icon: FileCheck, text: "Relatórios detalhados" },
  { icon: Truck, text: "Especialistas em frotas" },
];

export const Hero = () => {
  return (
    <section
      className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden"
      id="topo"
    >
      {/* Background logo watermark */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: `url(${logoSymbol})`,
          backgroundSize: "700px",
          // ✅ SUBI A LOGO AQUI (antes era "50% 45%")
          backgroundPosition: "50% 30%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="pill mb-6 inline-flex" style={{ color: BRAND }}>
                <span className="accent-bar" />
                Especialistas em sinistros de transporte
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6"
            >
              Gestão de sinistros{" "}
              <span className="gradient-text text-[#068fa1]">inteligente</span>{" "}
              para sua frota
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Simplificamos a regulação de sinistros para frotas e
              transportadoras. Do aviso inicial ao relatório final — com{" "}
              <strong className="text-foreground">agilidade</strong>,
              <strong className="text-foreground"> transparência</strong> e{" "}
              <strong className="text-foreground">resultados</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="text-base h-14 px-8 group shadow-lg"
                style={{ boxShadow: "0 10px 30px rgba(6,143,161,0.25)" }}
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: BRAND }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base h-14 px-8"
              >
                <a href="#como-funciona">Saiba como funciona</a>
              </Button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4" style={{ color: BRAND }} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="hero-card rounded-2xl p-6 md:p-8 flex items-center gap-6 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: BRAND }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black gradient-text text-[#068fa1]">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          className="mt-16 md:mt-24 pt-8 border-t border-border/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <span className="text-sm text-muted-foreground">
              Atendemos todo o Brasil
            </span>
            <span className="hidden md:block w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">
              +10 anos de experiência
            </span>
            <span className="hidden md:block w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">
              Equipe especializada
            </span>
            <span className="hidden md:block w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse bg-destructive" />
              Suporte 24 horas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
