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
import DemoAccess from "@/pages/DemoAccess";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">

          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>

              <Route
                path={ROUTE_PATHS.HOME}
                element={<Home />}
              />

              <Route
                path={ROUTE_PATHS.FEATURES}
                element={<Features />}
              />

              <Route
                path={ROUTE_PATHS.SOLUTIONS}
                element={<Solutions />}
              />

              <Route
                path={ROUTE_PATHS.ABOUT}
                element={<About />}
              />

              <Route
                path={ROUTE_PATHS.CONTACT}
                element={<Contact />}
              />

              {/* ACCESSO DEMO */}
              <Route
                path="/demo-access"
                element={<DemoAccess />}
              />

            </Routes>
          </BrowserRouter>

        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;