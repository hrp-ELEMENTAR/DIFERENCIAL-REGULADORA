import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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

// Posições corretas dos estados no mapa do Brasil (coordenadas SVG)
const statePositions: Record<string, { x: number; y: number }> = {
  AC: { x: 107, y: 280 },
  AM: { x: 175, y: 200 },
  RR: { x: 205, y: 85 },
  RO: { x: 155, y: 310 },
  AP: { x: 320, y: 95 },
  PA: { x: 295, y: 200 },
  TO: { x: 355, y: 295 },
  MA: { x: 400, y: 210 },
  PI: { x: 420, y: 260 },
  CE: { x: 465, y: 220 },
  RN: { x: 495, y: 225 },
  PB: { x: 495, y: 250 },
  PE: { x: 480, y: 275 },
  AL: { x: 495, y: 300 },
  SE: { x: 480, y: 320 },
  BA: { x: 430, y: 350 },
  MT: { x: 245, y: 330 },
  GO: { x: 335, y: 385 },
  DF: { x: 365, y: 370 },
  MS: { x: 275, y: 430 },
  MG: { x: 395, y: 420 },
  ES: { x: 455, y: 435 },
  RJ: { x: 430, y: 480 },
  SP: { x: 360, y: 480 },
  PR: { x: 325, y: 530 },
  SC: { x: 340, y: 575 },
  RS: { x: 305, y: 630 },
};

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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="pill mb-6 inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="accent-bar" />
            🌎 Cobertura Nacional
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Presentes em{" "}
            <span className="gradient-text">todo o Brasil</span> 🇧🇷
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nossa rede de especialistas está presente em todos os <strong className="text-foreground">27 estados</strong> brasileiros, 
            garantindo atendimento ágil e eficiente em qualquer região do país.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* States list */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="text-5xl md:text-6xl font-black text-primary/10 leading-none tracking-tighter hidden md:block"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                ESTADOS
              </div>
              <div className="flex-1 space-y-6">
                {regions.map((region, regionIndex) => (
                  <motion.div 
                    key={region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * regionIndex }}
                  >
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-emerald-400">{region}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {states
                        .filter((s) => s.region === region)
                        .map((state, index) => (
                          <motion.div
                            key={state.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer border ${
                              hoveredState === state.id
                                ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30"
                                : "bg-secondary/50 text-muted-foreground hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 border-transparent"
                            }`}
                            onMouseEnter={() => setHoveredState(state.id)}
                            onMouseLeave={() => setHoveredState(null)}
                          >
                            ✓ {state.name}
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Brasil Map SVG - Mapa real */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              <svg
                viewBox="0 0 600 720"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 20px 40px rgba(16, 185, 129, 0.15))" }}
              >
                <defs>
                  <linearGradient id="mapGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glowGreen">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Mapa do Brasil - Contorno preciso */}
                <path
                  d="M107,270 L95,250 L90,220 L100,190 L120,165 L145,145 L175,130 L210,115 L250,105 L295,95 L340,90 L380,95 L420,110 L455,130 L485,155 L510,185 L525,220 L530,255 L525,290 L515,325 L500,360 L480,395 L455,430 L425,465 L390,500 L350,530 L310,555 L270,575 L240,590 L220,605 L230,635 L260,660 L300,680 L340,685 L370,665 L395,630 L415,590 L430,545 L445,495 L460,450 L475,400 L490,345 L500,290 L500,235 L490,185 L470,145 L440,115 L400,100 L350,95 L300,100 L250,115 L205,140 L165,175 L135,215 L115,255 Z"
                  fill="url(#mapGradientGreen)"
                  stroke="#10b981"
                  strokeWidth="2"
                  className="transition-all duration-500"
                  filter="url(#glowGreen)"
                  opacity="0.9"
                />

                {/* Linhas internas dos estados */}
                <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
                  {/* Divisões horizontais principais */}
                  <path d="M140,240 L500,240" />
                  <path d="M180,320 L490,320" />
                  <path d="M240,400 L470,400" />
                  <path d="M280,480 L440,480" />
                  <path d="M300,560 L380,560" />
                  
                  {/* Divisões verticais principais */}
                  <path d="M300,100 L300,400" />
                  <path d="M380,150 L420,550" />
                  <path d="M200,200 L220,450" />
                </g>

                {/* Markers dos estados com logo da empresa */}
                {states.map((state, i) => {
                  const pos = statePositions[state.id];
                  if (!pos) return null;
                  const isHovered = hoveredState === state.id;
                  
                  return (
                    <motion.g
                      key={state.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredState(state.id)}
                      onMouseLeave={() => setHoveredState(null)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Pulse ring on hover */}
                      {isHovered && (
                        <motion.circle
                          cx={pos.x}
                          cy={pos.y}
                          r="20"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          initial={{ scale: 0.5, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Estado marker */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? "14" : "10"}
                        fill={isHovered ? "#10b981" : "rgba(16, 185, 129, 0.8)"}
                        stroke="white"
                        strokeWidth="2"
                        className="transition-all duration-300"
                        filter={isHovered ? "url(#glowGreen)" : ""}
                      />
                      
                      {/* Sigla do estado */}
                      <text
                        x={pos.x}
                        y={pos.y + 4}
                        textAnchor="middle"
                        fontSize={isHovered ? "9" : "7"}
                        fill="white"
                        fontWeight="bold"
                        className="transition-all duration-300 pointer-events-none"
                      >
                        {state.id}
                      </text>

                      {/* Tooltip */}
                      {isHovered && (
                        <g>
                          <rect
                            x={pos.x - 45}
                            y={pos.y - 45}
                            width="90"
                            height="24"
                            rx="6"
                            fill="hsl(var(--background))"
                            stroke="#10b981"
                            strokeWidth="1"
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 28}
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            fontWeight="500"
                          >
                            ✓ {state.name}
                          </text>
                        </g>
                      )}
                    </motion.g>
                  );
                })}
              </svg>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-emerald-500/30">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-400">27 Estados + DF Ativos</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats below */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "27", label: "Estados cobertos", emoji: "📍" },
            { number: "5.570", label: "Municípios atendidos", emoji: "🏙️" },
            { number: "24/7", label: "Disponibilidade", emoji: "⏰" },
            { number: "100%", label: "Território nacional", emoji: "✅" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-card group hover:border-emerald-500/30 transition-all"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <div className="stat-number text-3xl md:text-4xl">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
