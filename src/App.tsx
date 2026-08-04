import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { EditorialArticleFooter, EditorialSeo } from "@/components/EditorialTools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MotionConfig } from "framer-motion";

import { ROUTE_PATHS } from "@/lib/index";

import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import VerticaleCaelo from "@/pages/VerticaleCaelo";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Aziende from "@/pages/Aziende";
import LaVoce from "@/pages/LaVoce";
import ValutazioneIndipendente from "@/pages/ValutazioneIndipendente";
import ArticoloAmministrazione from "@/pages/ArticoloAmministrazione";
import ArticoloGovernareProcedimenti from "@/pages/ArticoloGovernareProcedimenti";
import ArticoloAutoritaAgentiAI from "@/pages/ArticoloAutoritaAgentiAI";
import ArticoloCancelloEuropeo from "@/pages/ArticoloCancelloEuropeo";
import ArticoloControlloUmano from "@/pages/ArticoloControlloUmano";
import ArticoloTrasparenzaBlackBox from "@/pages/ArticoloTrasparenzaBlackBox";
import ArticoloChiFirmaDeveVedere from "@/pages/ArticoloChiFirmaDeveVedere";

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
              <EditorialSeo />
              <Routes>
                <Route path={ROUTE_PATHS.HOME} element={<Home />} />
                <Route path={ROUTE_PATHS.FEATURES} element={<Features />} />
                <Route path={ROUTE_PATHS.SOLUTIONS} element={<Solutions />} />
                <Route path="/soluzioni/:slug" element={<VerticaleCaelo />} />
                <Route path={ROUTE_PATHS.LA_VOCE} element={<LaVoce />} />
                <Route path="/valutazione-indipendente" element={<ValutazioneIndipendente />} />
                <Route path="/la-voce/quando-amministrazione-colpisce-chi-e-nel-giusto" element={<ArticoloAmministrazione />} />
                <Route path="/la-voce/linfrastruttura-della-trasparenza-oltre-la-black-box" element={<ArticoloTrasparenzaBlackBox />} />
                <Route path="/la-voce/chi-firma-deve-poter-vedere-dalla-black-box-alla-glass-box-procedurale" element={<ArticoloChiFirmaDeveVedere />} />
                <Route path="/la-voce/chi-governera-i-procedimenti-governera-il-futuro-dell-ai" element={<ArticoloGovernareProcedimenti />} />
                <Route path="/la-voce/non-basta-identificare-un-agente-ai-bisogna-governarne-lautorita" element={<ArticoloAutoritaAgentiAI />} />
                <Route path="/la-voce/il-cancello-europeo-nel-giardino-tecnologico-degli-altri" element={<ArticoloCancelloEuropeo />} />
                <Route path="/la-voce/il-controllo-umano-non-e-un-pulsante-di-emergenza" element={<ArticoloControlloUmano />} />
                <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
                <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
                <Route path="/aziende" element={<Aziende />} />
              </Routes>
              <EditorialArticleFooter />
            </BrowserRouter>
          </MotionConfig>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
