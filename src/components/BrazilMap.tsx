import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { MapPin } from "lucide-react";

const states = [
  { id: "AC", name: "Acre", x: 115, y: 220 },
  { id: "AL", name: "Alagoas", x: 485, y: 235 },
  { id: "AP", name: "Amapá", x: 310, y: 80 },
  { id: "AM", name: "Amazonas", x: 170, y: 150 },
  { id: "BA", name: "Bahia", x: 430, y: 260 },
  { id: "CE", name: "Ceará", x: 455, y: 175 },
  { id: "DF", name: "Distrito Federal", x: 360, y: 295 },
  { id: "ES", name: "Espírito Santo", x: 445, y: 330 },
  { id: "GO", name: "Goiás", x: 340, y: 280 },
  { id: "MA", name: "Maranhão", x: 385, y: 160 },
  { id: "MT", name: "Mato Grosso", x: 260, y: 250 },
  { id: "MS", name: "Mato Grosso do Sul", x: 275, y: 340 },
  { id: "MG", name: "Minas Gerais", x: 395, y: 320 },
  { id: "PA", name: "Pará", x: 295, y: 150 },
  { id: "PB", name: "Paraíba", x: 480, y: 195 },
  { id: "PR", name: "Paraná", x: 320, y: 395 },
  { id: "PE", name: "Pernambuco", x: 470, y: 210 },
  { id: "PI", name: "Piauí", x: 415, y: 195 },
  { id: "RJ", name: "Rio de Janeiro", x: 420, y: 365 },
  { id: "RN", name: "Rio Grande do Norte", x: 480, y: 175 },
  { id: "RS", name: "Rio Grande do Sul", x: 310, y: 460 },
  { id: "RO", name: "Rondônia", x: 185, y: 235 },
  { id: "RR", name: "Roraima", x: 195, y: 70 },
  { id: "SC", name: "Santa Catarina", x: 330, y: 425 },
  { id: "SP", name: "São Paulo", x: 355, y: 365 },
  { id: "SE", name: "Sergipe", x: 475, y: 245 },
  { id: "TO", name: "Tocantins", x: 360, y: 215 },
];

export const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24" id="atuacao">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="pill mb-4 inline-flex">
            <span className="accent-bar" />
            Cobertura Nacional
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Atuamos em <span className="gradient-text">todo o Brasil</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa rede de especialistas está presente em todos os 27 estados brasileiros, 
            garantindo atendimento ágil e eficiente onde você precisar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative max-w-3xl mx-auto">
            {/* Brasil SVG Map outline */}
            <svg
              viewBox="0 0 600 550"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 0 30px hsla(var(--primary) / 0.2))" }}
            >
              {/* Simplified Brazil outline */}
              <path
                d="M195 45 L220 35 L260 40 L300 35 L340 50 L370 55 L400 60 L430 55 L470 70 L500 90 L510 120 L505 150 L510 180 L505 200 L490 220 L495 250 L485 280 L470 310 L450 340 L440 370 L415 390 L380 410 L350 430 L330 460 L310 480 L280 485 L255 470 L240 440 L250 410 L270 380 L280 350 L270 320 L245 300 L220 280 L200 260 L180 240 L150 220 L130 200 L110 220 L95 200 L85 170 L100 140 L120 110 L145 85 L170 60 Z"
                fill="hsla(var(--primary) / 0.08)"
                stroke="hsla(var(--primary) / 0.3)"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </svg>

            {/* State points */}
            <div className="absolute inset-0">
              {states.map((state, index) => (
                <motion.div
                  key={state.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${(state.x / 600) * 100}%`,
                    top: `${(state.y / 550) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredState(state.id)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{
                      scale: hoveredState === state.id ? [1, 2, 1] : 1,
                      opacity: hoveredState === state.id ? [0.5, 0, 0.5] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: hoveredState === state.id ? Infinity : 0 }}
                    style={{ width: 24, height: 24, marginLeft: -12, marginTop: -12 }}
                  />
                  
                  {/* Point */}
                  <motion.div
                    className="relative z-10 w-3 h-3 rounded-full bg-primary shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.8 }}
                    style={{
                      boxShadow: hoveredState === state.id 
                        ? "0 0 20px hsla(var(--primary) / 0.8)" 
                        : "0 0 10px hsla(var(--primary) / 0.4)",
                    }}
                  />

                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: hoveredState === state.id ? 1 : 0,
                      y: hoveredState === state.id ? 0 : 5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass-card px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span className="text-sm font-medium">{state.name}</span>
                      <span className="text-xs text-muted-foreground">({state.id})</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Hovered state display */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="pill-muted text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                {hoveredState 
                  ? `${states.find(s => s.id === hoveredState)?.name} - Atendimento ativo`
                  : "Passe o mouse para ver os estados"
                }
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Stats below map */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "27", label: "Estados cobertos" },
            { number: "5.000+", label: "Municípios atendidos" },
            { number: "24h", label: "Disponibilidade" },
            { number: "100%", label: "Cobertura nacional" },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number text-2xl md:text-3xl">{stat.number}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
