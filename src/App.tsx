import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

import LoginCliente from "./pages/LoginCliente";
import LoginRegulador from "./pages/LoginRegulador";

import Cliente from "./pages/Cliente";
import Regulador from "./pages/Regulador";

import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* site público */}
          <Route path="/" element={<Index />} />
          <Route
            path="/politica-privacidade"
            element={<PoliticaPrivacidade />}
          />

          {/* logins separados */}
          <Route path="/login/cliente" element={<LoginCliente />} />
          <Route path="/login/regulador" element={<LoginRegulador />} />

          {/* áreas protegidas por perfil */}
          <Route
            path="/cliente"
            element={
              <ProtectedRoute allowedRole="cliente">
                <Cliente />
              </ProtectedRoute>
            }
          />

          <Route
            path="/regulador"
            element={
              <ProtectedRoute allowedRole="regulador">
                <Regulador />
              </ProtectedRoute>
            }
          />

          {/* fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
