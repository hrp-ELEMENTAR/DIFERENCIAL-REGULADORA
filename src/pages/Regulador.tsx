import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Regulador() {
  return (
    <div id="topo">
      <Header />
      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Área do Regulador</h1>
        <p className="text-muted-foreground">
          Aqui vamos construir o painel do regulador (em breve).
        </p>
      </main>
      <Footer />
    </div>
  );
}
