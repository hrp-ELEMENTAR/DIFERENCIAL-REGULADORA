import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Scope } from "@/components/Scope";
import { SLA } from "@/components/SLA";
import { Deliverables } from "@/components/Deliverables";
import { Governance } from "@/components/Governance";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-custom">
        <Hero />
        <Services />
        <Scope />
        <SLA />
        <Deliverables />
        <Governance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
