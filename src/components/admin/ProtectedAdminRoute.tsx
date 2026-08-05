import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export function ProtectedAdminRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-2xl rounded-3xl border border-amber-400/30 bg-slate-900 p-8">
          <h1 className="text-3xl font-semibold">Configurazione richiesta</h1>
          <p className="mt-4 leading-7 text-slate-300">
            Inserisci <code>VITE_SUPABASE_URL</code> e{" "}
            <code>VITE_SUPABASE_PUBLISHABLE_KEY</code> nel file{" "}
            <code>.env.local</code>, quindi riavvia il server di sviluppo.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950 text-slate-100">
        Verifica della sessione…
      </div>
    );
  }

  if (!session) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return children;
}
