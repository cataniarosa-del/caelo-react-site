import { useEffect, useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const destination =
    (location.state as { from?: string } | null)?.from ?? "/admin";

  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    return <Navigate to={destination} replace />;
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage("Supabase non è ancora configurato.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setSubmitting(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    navigate(destination, { replace: true });
  };

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-5 py-12 text-slate-100">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          La Voce di CAELO
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Area editoriale</h1>
        <p className="mt-3 leading-7 text-slate-300">
          Accesso riservato alla gestione degli articoli e delle versioni
          linguistiche.
        </p>

        {!isSupabaseConfigured && (
          <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
            Configura prima le variabili Supabase nel file{" "}
            <code>.env.local</code>.
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium">Password</span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-300"
            />
          </label>

          <button
            type="submit"
            disabled={submitting || !isSupabaseConfigured}
            className="w-full rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Accesso in corso…" : "Accedi"}
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-100">
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
