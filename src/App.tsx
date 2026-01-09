import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

import AreaCliente from "./pages/AreaCliente";
import AreaRegulador from "./pages/AreaRegulador";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* páginas */}
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />

          {/* áreas */}
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="/area-regulador" element={<AreaRegulador />} />

          {/* login por tipo */}
          <Route path="/login/:tipo" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
