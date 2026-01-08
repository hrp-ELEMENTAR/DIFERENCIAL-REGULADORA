import { motion, animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
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
 * Coordenadas baseadas no seu SVG (brasil_regioes.svg)
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

function CountUp({
  to,
  start,
  format,
  duration = 1.8,
  className,
}: {
  to: number;
  start: boolean;
  format: (n: number) => string;
  duration?: number;
  className?: string;
}) {
  const mv = useMotionValue(0);
  const [txt, setTxt] = useState(format(0));

  useEffect(() => {
    const unsub = mv.on("change", (v) => setTxt(format(v)));
    return () => unsub();
  }, [mv, format]);

  useEffect(() => {
    if (!start) {
      mv.set(0);
      return;
    }

    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [start, mv, to, duration]);

  return <span className={className}>{txt}</span>;
}

export const BrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, {
    once: false,
    margin: "0px 0px -20% 0px",
    amount: 0.2,
  });

  const nf = useMemo(() => new Intl.NumberFormat("pt-BR"), []);
  const formatInt = useMemo(() => (n: number) => nf.format(Math.round(n)), [nf]);
  const formatPct = useMemo(() => (n: number) => `${Math.round(n)}%`, []);

  // ✅ caminho correto para funcionar no GitHub Pages (public/brasil_regioes.svg)
  const mapSrc = `${import.meta.env.BASE_URL}brasil_regioes.svg`;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="atuacao">
      {/* Background logo */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
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
            <span
              className="font-black"
              style={{
                color: BRAND,
                textShadow: "0 14px 40px rgba(6,143,161,.22)",
              }}
            >
              todo o Brasil
            </span>
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
                className="text-5xl md:text-6xl font-black text-primary/[0.19] leading-none tracking-tighter hidden md:block"
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
              <img
                src={mapSrc}
                alt="Mapa do Brasil"
                className="w-full h-auto"
                style={{
                  opacity: 0.52,
                  filter:
                    "drop-shadow(0 16px 28px rgba(6,143,161,.10)) saturate(0.78) contrast(1.12) brightness(0.92)",
                }}
              />

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

                  // ✅ anel sempre ligado (e mais forte no hover)
                  const pulseDuration = isHovered ? 1.1 : 1.6;
                  const rFrom = 18;
                  const rTo = isHovered ? 44 : 38;
                  const opFrom = isHovered ? 0.85 : 0.45;

                  return (
                    <motion.g
                      key={state.id}
                      initial={{ scale: 0.78, opacity: 0 }}
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
                      {/* ✅ ANEL PULSANDO SEMPRE (Framer Motion) */}
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        fill="none"
                        stroke={MARKER}
                        strokeWidth={isHovered ? 2 : 1.6}
                        initial={{ r: rFrom, opacity: opFrom }}
                        animate={{
                          r: [rFrom, rTo],
                          opacity: [opFrom, 0],
                        }}
                        transition={{
                          duration: pulseDuration,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeOut",
                          delay: i * 0.05, // desencontra um pouco os pulsos
                        }}
                      />

                      {/* círculo principal */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isHovered ? 16 : 13}
                        fill="rgba(6,143,161,0.95)"
                        stroke="rgba(255,255,255,0.85)"
                        strokeWidth={2.2}
                        filter={isHovered ? "url(#glowMarker)" : ""}
                      />

                      <text
                        x={pos.x}
                        y={pos.y + 4}
                        textAnchor="middle"
                        fontSize={isHovered ? 9 : 8}
                        fill="white"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {state.id}
                      </text>

                      {/* ✅ tooltip só no hover */}
                      {isHovered && (
                        <g>
                          <rect
                            x={pos.x - 58}
                            y={pos.y - 50}
                            width={116}
                            height={28}
                            rx={7}
                            fill="rgba(0,0,0,0.68)"
                            stroke={MARKER}
                            strokeWidth={1}
                          />
                          <text
                            x={pos.x}
                            y={pos.y - 31}
                            textAnchor="middle"
                            fontSize={10}
                            fill="white"
                            fontWeight={500}
                          >
                            ✓ {state.name}
                          </text>
                        </g>
                      )}
                    </motion.g>
                  );
                })}
              </svg>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
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

        {/* STATS */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
        >
          {/* 27 */}
          <motion.div
            className="rounded-2xl p-6 text-center border backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: BRAND, textShadow: "0 10px 30px rgba(6,143,161,0.18)" }}
            >
              <CountUp to={27} start={statsInView} format={formatInt} duration={1.8} />
            </div>
            <div className="text-sm text-muted-foreground mt-2">Estados cobertos</div>
          </motion.div>

          {/* 5.570 */}
          <motion.div
            className="rounded-2xl p-6 text-center border backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: BRAND, textShadow: "0 10px 30px rgba(6,143,161,0.18)" }}
            >
              <CountUp to={5570} start={statsInView} format={formatInt} duration={2.2} />
            </div>
            <div className="text-sm text-muted-foreground mt-2">Municípios atendidos</div>
          </motion.div>

          {/* 24/7 */}
          <motion.div
            className="rounded-2xl p-6 text-center border backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: BRAND, textShadow: "0 10px 30px rgba(6,143,161,0.18)" }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              24/7
            </motion.div>
            <div className="text-sm text-muted-foreground mt-2">Disponibilidade</div>
          </motion.div>

          {/* 100% */}
          <motion.div
            className="rounded-2xl p-6 text-center border backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="text-3xl md:text-4xl font-black tracking-tight"
              style={{ color: BRAND, textShadow: "0 10px 30px rgba(6,143,161,0.18)" }}
            >
              <CountUp to={100} start={statsInView} format={formatPct} duration={1.8} />
            </div>
            <div className="text-sm text-muted-foreground mt-2">Território nacional</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
