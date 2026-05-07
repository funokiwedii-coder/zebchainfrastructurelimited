import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, LogOut, Mail, Phone, Building2, Globe, Briefcase, DollarSign, Trash2, GraduationCap, Clock } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · Zebcha" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Submission = {
  id: string;
  name: string;
  organisation: string;
  email: string;
  phone: string | null;
  country: string;
  sector: string;
  project_size: string;
  summary: string;
  status: string;
  created_at: string;
};

function AdminPage() {
  const [session, setSession] = useState<unknown>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s?.user) {
        void checkAdmin(s.user.id);
      } else {
        setIsAdmin(false);
        setChecking(false);
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session?.user) void checkAdmin(data.session.user.id);
      else setChecking(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function checkAdmin(userId: string) {
    setChecking(true);
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!!data);
    setChecking(false);
  }

  if (checking) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session) return <SignIn />;
  if (!isAdmin) return <NotAdmin />;
  return <Dashboard />;
}

function SignIn() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) toast.error(error.message);
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      if (error) toast.error(error.message);
      else toast.success("Account created. Check your email to confirm.");
    }
    setLoading(false);
  }

  return (
    <section className="container-editorial pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-md">
        <div className="eyebrow">Admin</div>
        <h1 className="mt-3 font-display text-4xl text-foreground">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Restricted area for Zebcha staff. Admin access is granted by an existing administrator.
        </p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>
          <div>
            <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-4 text-xs text-muted-foreground underline-offset-4 hover:underline"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
      </div>
    </section>
  );
}

function NotAdmin() {
  return (
    <section className="container-editorial pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-3xl">Not authorised</h1>
        <p className="mt-3 text-muted-foreground">
          Your account does not have admin access. Ask an existing administrator to grant it.
        </p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="mt-6 inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm hover:bg-muted"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </section>
  );
}

function Dashboard() {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("project_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setItems((data ?? []) as Submission[]);
    setLoading(false);
  }

  useEffect(() => {
    void load();
  }, []);

  async function remove(id: string) {
    if (!confirm("Delete this submission?")) return;
    const { error } = await supabase.from("project_submissions").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setItems((prev) => prev.filter((i) => i.id !== id));
    toast.success("Deleted");
  }

  return (
    <section className="container-editorial pt-16 pb-24">
      <div className="flex items-end justify-between">
        <div>
          <div className="eyebrow">Admin · Submissions</div>
          <h1 className="mt-3 font-display text-4xl text-foreground">Project submissions</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {loading ? "Loading…" : `${items.length} total`}
          </p>
        </div>
        <button
          onClick={() => supabase.auth.signOut()}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm hover:bg-muted"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      <div className="mt-10 space-y-5">
        {!loading && items.length === 0 && (
          <div className="rounded-sm border border-dashed border-border p-12 text-center text-muted-foreground">
            No submissions yet.
          </div>
        )}
        {items.map((s) => (
          <article key={s.id} className="rounded-sm border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-xl text-foreground">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.organisation}</div>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                {new Date(s.created_at).toLocaleString()}
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <Item icon={Mail} label={s.email} href={`mailto:${s.email}`} />
              {s.phone && <Item icon={Phone} label={s.phone} href={`tel:${s.phone}`} />}
              <Item icon={Globe} label={s.country} />
              <Item icon={Briefcase} label={s.sector} />
              <Item icon={DollarSign} label={s.project_size} />
              <Item icon={Building2} label={`Status: ${s.status}`} />
            </div>
            <p className="mt-5 whitespace-pre-wrap rounded-sm border-l-2 border-forest bg-muted/40 p-4 text-sm leading-relaxed text-foreground">
              {s.summary}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => remove(s.id)}
                className="inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs text-destructive hover:bg-destructive/10"
              >
                <Trash2 className="h-3.5 w-3.5" /> Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-2 text-foreground">
      <Icon className="h-4 w-4 text-muted-foreground" />
      {label}
    </span>
  );
  return href ? (
    <a href={href} className="hover:text-terracotta">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
