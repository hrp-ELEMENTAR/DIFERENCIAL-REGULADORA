import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Cliente() {
  return (
    <div id="topo">
      <Header />
      <main className="container-custom pt-28 md:pt-32 pb-16">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Área do Cliente</h1>
        <p className="text-muted-foreground">
          Aqui vamos construir o painel do cliente (em breve).
        </p>
      </main>
      <Footer />
    </div>
  );
}
