import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ROUTE_PATHS } from '@/lib/index';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t, lang, setLang } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const navigationItems = [
    { path: ROUTE_PATHS.HOME, label: t.nav.home },
    { path: ROUTE_PATHS.FEATURES, label: t.nav.features },
    { path: ROUTE_PATHS.SOLUTIONS, label: t.nav.solutions },
    { path: ROUTE_PATHS.ABOUT, label: t.nav.about },
    { path: ROUTE_PATHS.CONTACT, label: t.nav.contact },
  ];

  const languageSelector = (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value as any)}
      className="px-3 py-2 rounded-md text-sm border border-border bg-background text-foreground"
      aria-label="Select language"
    >
      <option value="it">IT</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="de">DE</option>
      <option value="es">ES</option>
    </select>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary/85 to-primary/70 flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/caelologoufficiale.png"
                  alt="Caelo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-foreground">Caelo</span>
            </Link>

            <div className="hidden md:flex items-center space-x-3">
              <nav className="flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {languageSelector}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border bg-background"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <div className="pt-2">{languageSelector}</div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main style={{ paddingTop: `${headerHeight}px` }} className="flex-1">
        {children}
      </main>

      <footer className="bg-muted/30 border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-primary/85 to-primary/70 flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="/caelologoufficiale.png"
                    alt="Caelo"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="text-xl font-semibold text-foreground">Caelo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Intelligenza artificiale per la pubblica amministrazione italiana
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Prodotto</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={ROUTE_PATHS.FEATURES} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.features}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.SOLUTIONS} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.solutions}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Azienda</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={ROUTE_PATHS.ABOUT} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.CONTACT} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legale</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termini di Servizio</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Conformità AI Act</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Caelo. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
