import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password · Zebcha" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) toast.error(error.message);
    else {
      setComplete(true);
      toast.success("Password updated successfully.");
    }
  }

  return (
    <section className="container-editorial pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-md">
        <div className="eyebrow">Admin</div>
        <h1 className="mt-3 font-display text-4xl text-foreground">Reset password</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Choose a new password for your admin account.
        </p>

        {complete ? (
          <div className="mt-8 border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Your password has been changed. You can now sign in with the new password.
            </p>
            <Link
              to="/admin"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep"
            >
              Go to admin sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
                New password
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
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
                Confirm password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-forest-deep disabled:opacity-60"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Update password
            </button>
          </form>
        )}
      </div>
    </section>
  );
}