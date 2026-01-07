import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import logoBg from "@/assets/logo-bg.png";

const states = [
  // Norte
  { id: "AC", name: "Acre", region: "Norte" },
  { id: "AP", name: "Amapá", region: "Norte" },
  { id: "AM", name: "Amazonas", region: "Norte" },
  { id: "PA", name: "Pará", region: "Norte" },
  { id: "RO", name: "Rondônia", region: "Norte" },
  { id: "RR", name: "Roraima", region: "Norte" },
  { id: "TO", name: "Tocantins", region: "Norte" },
  // Nordeste
  { id: "AL", name: "Alagoas", region: "Nordeste" },
  { id: "BA", name: "Bahia", region: "Nordeste" },
  { id: "CE", name: "Ceará", region: "Nordeste" },
  { id: "MA", name: "Maranhão", region: "Nordeste" },
  { id: "PB", name: "Paraíba", region: "Nordeste" },
  { id: "PE", name: "Pernambuco", region: "Nordeste" },
  { id: "PI", name: "Piauí", region: "Nordeste" },
  { id: "RN", name: "Rio Grande do Norte", region: "Nordeste" },
  { id: "SE", name: "Sergipe", region: "Nordeste" },
  // Centro-Oeste
  { id: "DF", name: "Distrito Federal", region: "Centro-Oeste" },
  { id: "GO", name: "Goiás", region: "Centro-Oeste" },
  { id: "MT", name: "Mato Grosso", region: "Centro-Oeste" },
  { id: "MS", name: "Mato Grosso do Sul", region: "Centro-Oeste" },
  // Sudeste
  { id: "ES", name: "Espírito Santo", region: "Sudeste" },
  { id: "MG", name: "Minas Gerais", region: "Sudeste" },
  { id: "RJ", name: "Rio de Janeiro", region: "Sudeste" },
  { id: "SP", name: "São Paulo", region: "Sudeste" },
  // Sul
  { id: "PR", name: "Paraná", region: "Sul" },
  { id: "RS", name: "Rio Grande do Sul", region: "Sul" },
  { id: "SC", name: "Santa Catarina", region: "Sul" },
];

const regions = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

export const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="atuacao">
      {/* Background logo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "600px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill mb-6 inline-flex">
            <span className="accent-bar" />
            Cobertura Nacional
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Presentes em <span className="gradient-text">todo o Brasil</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nossa rede de especialistas está presente em todos os <strong className="text-foreground">27 estados</strong> brasileiros, 
            garantindo atendimento ágil e eficiente em qualquer região do país.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* States list */}
          <AnimatedSection delay={0.2} className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-6xl font-black text-primary/20 leading-none tracking-tighter" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                ESTADOS
              </div>
              <div className="flex-1 space-y-6">
                {regions.map((region) => (
                  <div key={region}>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">{region}</h3>
                    <div className="flex flex-wrap gap-2">
                      {states
                        .filter((s) => s.region === region)
                        .map((state, index) => (
                          <motion.div
                            key={state.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                              hoveredState === state.id
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            }`}
                            onMouseEnter={() => setHoveredState(state.id)}
                            onMouseLeave={() => setHoveredState(null)}
                          >
                            {state.name}
                          </motion.div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Brasil Map SVG */}
          <AnimatedSection delay={0.3} className="order-1 lg:order-2">
            <div className="relative">
              <svg
                viewBox="0 0 700 680"
                className="w-full h-auto max-w-lg mx-auto"
                style={{ filter: "drop-shadow(0 20px 40px hsla(var(--primary) / 0.2))" }}
              >
                {/* Mapa do Brasil com estados */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Brasil outline path */}
                <path
                  d="M170 50 L200 35 L250 35 L300 30 L350 40 L400 45 L450 55 L500 75 L540 100 L560 130 L570 170 L565 200 L560 230 L550 260 L555 290 L545 320 L530 355 L510 390 L490 420 L460 450 L430 480 L395 510 L360 540 L325 565 L290 580 L250 570 L220 545 L200 510 L210 470 L230 430 L245 390 L250 350 L235 310 L210 275 L180 245 L150 220 L120 200 L95 175 L80 145 L85 110 L105 80 L135 60 Z"
                  fill="url(#mapGradient)"
                  stroke="hsla(var(--primary) / 0.5)"
                  strokeWidth="2"
                  className="transition-all duration-500"
                  filter="url(#glow)"
                />
                
                {/* Internal state divisions - stylized lines */}
                <g stroke="hsla(var(--background) / 0.3)" strokeWidth="1" fill="none">
                  <path d="M180 245 L280 245 L320 280 L380 280" />
                  <path d="M320 280 L320 350 L280 390" />
                  <path d="M380 280 L420 240 L480 220" />
                  <path d="M420 240 L450 300 L430 350" />
                  <path d="M250 350 L320 350 L380 380 L430 350" />
                  <path d="M380 380 L380 450 L430 480" />
                  <path d="M200 145 L280 145 L350 120 L420 150" />
                  <path d="M280 145 L300 200 L280 245" />
                  <path d="M350 120 L380 180 L420 200 L480 180" />
                </g>

                {/* Estado markers com logo */}
                {[
                  { x: 130, y: 90 },   // RR
                  { x: 200, y: 140 },  // AM
                  { x: 100, y: 180 },  // AC
                  { x: 170, y: 210 },  // RO
                  { x: 310, y: 80 },   // AP
                  { x: 340, y: 150 },  // PA
                  { x: 370, y: 220 },  // TO
                  { x: 290, y: 260 },  // MT
                  { x: 310, y: 350 },  // GO/DF
                  { x: 290, y: 420 },  // MS
                  { x: 430, y: 160 },  // MA
                  { x: 470, y: 180 },  // PI
                  { x: 510, y: 170 },  // CE
                  { x: 540, y: 185 },  // RN
                  { x: 545, y: 210 },  // PB
                  { x: 535, y: 235 },  // PE
                  { x: 530, y: 265 },  // AL
                  { x: 520, y: 290 },  // SE
                  { x: 480, y: 310 },  // BA
                  { x: 420, y: 350 },  // MG
                  { x: 490, y: 380 },  // ES
                  { x: 460, y: 430 },  // RJ
                  { x: 380, y: 430 },  // SP
                  { x: 340, y: 480 },  // PR
                  { x: 360, y: 530 },  // SC
                  { x: 320, y: 565 },  // RS
                ].map((pos, i) => (
                  <motion.g
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="12"
                      fill="hsla(var(--background) / 0.8)"
                      stroke="hsl(var(--primary-foreground))"
                      strokeWidth="2"
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 4}
                      textAnchor="middle"
                      fontSize="8"
                      fill="hsl(var(--primary))"
                      fontWeight="bold"
                    >
                      ✓
                    </text>
                  </motion.g>
                ))}
              </svg>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">27 Estados + DF</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats below */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { number: "27", label: "Estados cobertos" },
            { number: "5.570", label: "Municípios atendidos" },
            { number: "24/7", label: "Disponibilidade" },
            { number: "100%", label: "Território nacional" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-card group hover:border-primary/30 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="stat-number text-3xl md:text-4xl">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
