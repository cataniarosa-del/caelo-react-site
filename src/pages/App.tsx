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
import Private from "@/pages/Private";
import { LanguageProvider } from "@/LanguageContext";

const queryClient = new QueryClient();

function App() {
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
    <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
    <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />

    <Route path="/aziende" element={<Private />} />

    <Route path="*" element={<Home />} />
  </Routes>
</BrowserRouter>
          </MotionConfig>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
      );
}

export default App;
         
