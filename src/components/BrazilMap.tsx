import { motion } from "framer-motion";
import { useState } from "react";
import logoBg from "@/assets/logo-bg.png";

const BRAND = "#088da0";
const MARKER = "#068fa1";

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

/**
 * Ajustado para o seu SVG real:
 * viewBox="0 0 537.59 533.82"
 */
const statePositions: Record<string, { x: number; y: number }> = {
  AC: { x: 95.87, y: 207.6 },
  AM: { x: 156.8, y: 148.28 },
  RR: { x: 183.68, y: 63.02 },
  RO: { x: 138.88, y: 229.84 },
  AP: { x: 286.71, y: 70.43 },
  PA: { x: 264.32, y: 148.28 },
  TO: { x: 318.07, y: 218.72 },

  MA: { x: 358.39, y: 155.7 },
  PI: { x: 376.31, y: 192.77 },
  CE: { x: 416.63, y: 163.11 },
  RN: { x: 443.51, y: 166.82 },
  PB: { x: 443.51, y: 185.35 },
  PE: { x: 430.07, y: 203.89 },
  AL: { x: 443.51, y: 222.43 },
  SE: { x: 430.07, y: 237.25 },
  BA: { x: 385.27, y: 259.5 },

  MT: { x: 219.52, y: 244.67 },
  GO: { x: 300.15, y: 285.45 },
  DF: { x: 327.03, y: 274.32 },
  MS: { x: 246.4, y: 318.81 },

  MG: { x: 353.91, y: 311.4 },
  ES: { x: 407.67, y: 322.52 },
  RJ: { x: 385.27, y: 355.88 },
  SP: { x: 322.55, y: 355.88 },

  PR: { x: 291.19, y: 392.95 },
  SC: { x: 304.63, y: 426.31 },
  RS: { x: 273.27, y: 467.09 },
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
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Presentes em{" "}
            <span className="gradient-text text-primary">todo o Brasil</span> 🇧🇷
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Nossa rede de especialistas está presente em todos os{" "}
            <strong className="text-foreground">27 estados</strong> brasileiros,
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
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: BRAND }}
                      />
                      <span className="text-[#dedede]">{region}</span>
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
                                ? "text-white shadow-lg"
                                : "bg-secondary/50 text-muted-foreground hover:text-white border-transparent"
                            }`}
                            style={
                              hoveredState === state.id
                                ? {
                                    backgroundColor: BRAND,
                                    borderColor: BRAND,
                                    boxShadow: `0 10px 30px rgba(8,141,160,.25)`,
                                  }
                                : {
                                    backgroundColor: "rgba(255,255,255,0.03)",
                                  }
                            }
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

          {/* MAPA REAL + MARKERS */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Mapa real (mais sutil e moderno) */}
              <img
                src="/assets/img/brasil_regioes.svg"
                alt="Mapa do Brasil"
                className="w-full h-auto"
                style={{
                  opacity: 0.62, // sutil (não fica branco demais)
                  filter:
                    "drop-shadow(0 18px 34px rgba(8,141,160,.10)) saturate(0.85) contrast(1.05)",
                }}
              />

              {/* Overlay SVG para markers */}
              <svg
                viewBox="0 0 537.59 533.82"
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <defs>
                  <filter id="glowMarker">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

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
                      style={{ cursor: "pointer", pointerEvents: "auto" }}
                    >
                      {/* Pulse ring */}
                      {isHovered && (
                        <motion.circle
                          cx={pos.x}
                          cy={pos.y}
                          r="24"
                          fill="none"
                          stroke={MARKER}
                          strokeWidth="2"
                          initial={{ scale: 0.5, opacity: 1 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}

                      {/* Marker */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? "16" : "12"}
                        fill={MARKER}
                        stroke="white"
                        strokeWidth="2"
                        filter={isHovered ? "url(#glowMarker)" : ""}
                      />

                      {/* Sigla */}
                      <text
                        x={pos.x}
                        y={pos.y + 4}
                        textAnchor="middle"
                        fontSize={isHovered ? "9" : "8"}
                        fill="white"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {state.id}
                      </text>

                      {/* Tooltip */}
                      {isHovered && (
                        <g>
                          <rect
                            x={pos.x - 55}
                            y={pos.y - 48}
                            width="110"
                            height="26"
                            rx="6"
                            fill="rgba(0,0,0,0.65)"
                            stroke={MARKER}
                            strokeWidth="1"
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 30}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#dedede]"
              >
                <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-[#dedede]">
                  <span className="w-3 h-3 rounded-full animate-pulse bg-[#ba1212]" />
                  <span className="font-semibold text-[#dedede]">
                    27 Estados + DF Ativos
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
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
              className="stat-card group transition-all"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              style={{ borderColor: "rgba(8,141,160,0.25)" }}
            >
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <div
                className="stat-number text-3xl md:text-4xl"
                style={{ color: BRAND }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
