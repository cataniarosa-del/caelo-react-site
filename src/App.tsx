import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MotionConfig } from "framer-motion";

import { ROUTE_PATHS } from "@/lib/index";

import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Aziende from "@/pages/Aziende";
import LaVoce from "@/pages/LaVoce";
import ArticoloAmministrazione from "@/pages/ArticoloAmministrazione";
import ArticoloGovernareProcedimenti from "@/pages/ArticoloGovernareProcedimenti";
import ArticoloAutoritaAgentiAI from "@/pages/ArticoloAutoritaAgentiAI";

import { LanguageProvider } from "@/LanguageContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MotionConfig reducedMotion="user">
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <Routes>
                <Route path={ROUTE_PATHS.HOME} element={<Home />} />
                <Route path={ROUTE_PATHS.FEATURES} element={<Features />} />
                <Route path={ROUTE_PATHS.SOLUTIONS} element={<Solutions />} />
                <Route path={ROUTE_PATHS.LA_VOCE} element={<LaVoce />} />
                <Route
                  path="/la-voce/quando-amministrazione-colpisce-chi-e-nel-giusto"
                  element={<ArticoloAmministrazione />}
                />
                <Route
                  path="/la-voce/chi-governera-i-procedimenti-governera-il-futuro-dell-ai"
                  element={<ArticoloGovernareProcedimenti />}
                />
                <Route
                  path="/la-voce/non-basta-identificare-un-agente-ai-bisogna-governarne-lautorita"
                  element={<ArticoloAutoritaAgentiAI />}
                />
                <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
                <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />

                {/* Pagina Aziende Private */}
                <Route path="/aziende" element={<Aziende />} />
              </Routes>
            </BrowserRouter>
          </MotionConfig>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
