import { motion } from "framer-motion";
import { useState } from "react";
import logoBg from "@/assets/logo-bg.png";

const BRAND = "#068fa1";
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
 * Coordenadas recalculadas a partir do seu SVG (brasil_regioes.svg)
 * viewBox="0 0 537.59 533.82"
 */
const statePositions: Record<string, { x: number; y: number }> = {
  AC: { x: 49.61, y: 205.48 },
  AM: { x: 126.24, y: 132.08 },
  RR: { x: 170.37, y: 46.09 },
  RO: { x: 153.61, y: 221.92 },
  AP: { x: 302.55, y: 53.48 },
  PA: { x: 283.36, y: 129.05 },
  TO: { x: 283.58, y: 218.22 },

  MA: { x: 332.91, y: 85.31 },
  PI: { x: 393.2, y: 142.94 },
  CE: { x: 424.08, y: 175.62 },
  RN: { x: 470.93, y: 146.56 },
  PB: { x: 492.39, y: 191.71 },
  PE: { x: 510.03, y: 209.54 },
  AL: { x: 498.11, y: 223.19 },
  SE: { x: 438.86, y: 245.08 },
  BA: { x: 350.71, y: 214.78 },

  MT: { x: 247.71, y: 248.23 },
  GO: { x: 329.23, y: 293.79 },
  DF: { x: 352.81, y: 287.03 },
  MS: { x: 262.37, y: 347.74 },

  MG: { x: 395.83, y: 324.98 },
  ES: { x: 447.11, y: 343.09 },
  RJ: { x: 419.93, y: 377.36 },
  SP: { x: 340.95, y: 375.3 },

  PR: { x: 302.94, y: 406.26 },
  SC: { x: 317.63, y: 442.51 },
  RS: { x: 282.06, y: 476.05 },
};

export const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="atuacao">
      {/* Background logo (menos apagada) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "640px",
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
            transition={{ delay: 0.25 }}
          >
            Presentes em{" "}
            <span className="gradient-text">todo o Brasil</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
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
            transition={{ duration: 0.55, delay: 0.15 }}
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
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * regionIndex }}
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
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.02 }}
                            viewport={{ once: true }}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border ${
                              hoveredState === state.id
                                ? "text-white shadow-lg"
                                : "bg-secondary/50 text-muted-foreground hover:text-white border-transparent"
                            }`}
                            style={
                              hoveredState === state.id
                                ? {
                                    backgroundColor: BRAND,
                                    borderColor: BRAND,
                                    boxShadow: `0 10px 30px rgba(6,143,161,.22)`,
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
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Mapa real (discreto e moderno) */}
              <img
                src="/assets/img/brasil_regioes.svg"
                alt="Mapa do Brasil"
                className="w-full h-auto"
                style={{
                  opacity: 0.5,
                  filter:
                    "drop-shadow(0 16px 28px rgba(6,143,161,.10)) saturate(0.75) contrast(1.12) brightness(0.92)",
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
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
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
                      initial={{ scale: 0.75, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.06 + i * 0.01,
                        duration: 0.22,
                        ease: "easeOut",
                      }}
                      onMouseEnter={() => setHoveredState(state.id)}
                      onMouseLeave={() => setHoveredState(null)}
                      style={{ cursor: "pointer", pointerEvents: "auto" }}
                    >
                      {/* Pulse ring */}
                      {isHovered && (
                        <motion.circle
                          cx={pos.x}
                          cy={pos.y}
                          r="26"
                          fill="none"
                          stroke={MARKER}
                          strokeWidth="2"
                          initial={{ scale: 0.6, opacity: 1 }}
                          animate={{ scale: 1.65, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}

                      {/* Marker */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? "16" : "13"}
                        fill="rgba(6,143,161,0.95)"
                        stroke="rgba(255,255,255,0.85)"
                        strokeWidth="2.2"
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
                            x={pos.x - 58}
                            y={pos.y - 50}
                            width="116"
                            height="28"
                            rx="7"
                            fill="rgba(0,0,0,0.68)"
                            stroke={MARKER}
                            strokeWidth="1"
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 31}
                            textAnchor="middle"
                            fontSize="10"
                            fill="white"
                            fontWeight="500"
                          >
                            ✓ {state.name}
                          </
