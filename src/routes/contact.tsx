import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zebcha Infrastructure" },
      {
        name: "description",
        content:
          "Submit a project to the Africa Infrastructure Programme. Reach our Abuja headquarters by phone or email.",
      },
      { property: "og:title", content: "Contact Zebcha Infrastructure" },
      {
        property: "og:description",
        content:
          "Send us your project information — Zebcha will arrange a clarification call and walk you through the AIP.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      organisation: String(fd.get("org") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      country: String(fd.get("country") || "").trim(),
      sector: String(fd.get("sector") || "").trim(),
      project_size: String(fd.get("size") || "").trim(),
      summary: String(fd.get("summary") || "").trim(),
    };
    const { error } = await supabase.from("project_submissions").insert(payload);
    setLoading(false);
    if (error) {
      toast.error("Could not submit. Please try again or email us directly.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="container-editorial pt-20 pb-24 md:pt-28">
      <div className="grid gap-16 md:grid-cols-12">
        {/* Left: intro + details */}
        <Reveal as="div" variant="left" className="md:col-span-5">
          <div className="eyebrow">Get in touch</div>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            Let's build something enduring.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Send us your prospective project information. Our team will arrange a clarification
            call to assess fit against the AIP criteria, and walk you through next steps.
          </p>

          <dl className="mt-12 space-y-7">
            <Reveal as="div" variant="up" delay={120} className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-forest text-ivory">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Headquarters
                </dt>
                <dd className="mt-1 font-display text-lg text-foreground">
                  44 Panama Street, Maitama
                  <br />
                  Abuja, Nigeria
                </dd>
              </div>
            </Reveal>

            <Reveal as="div" variant="up" delay={220} className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-forest text-ivory">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Telephone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+2348172495115"
                    className="font-display text-lg text-foreground hover:text-terracotta"
                  >
                    +234 817 249 5115
                  </a>
                </dd>
              </div>
            </Reveal>

            <Reveal as="div" variant="up" delay={320} className="flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-forest text-ivory">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:tope@potomakwealth.com"
                    className="font-display text-lg text-foreground hover:text-terracotta"
                  >
                    tope@potomakwealth.com
                  </a>
                </dd>
              </div>
            </Reveal>
          </dl>
        </Reveal>

        {/* Right: form */}
        <Reveal as="div" variant="right" delay={150} className="md:col-span-7">
          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="font-display text-3xl text-foreground">Thank you.</div>
                <p className="mt-3 text-muted-foreground">
                  Your project summary has been received. The Zebcha team will be in touch shortly
                  to arrange a clarification call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  Project submission · Step 01
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="org" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Country" name="country" required />
                  <SelectField
                    label="Sector"
                    name="sector"
                    options={[
                      "Power",
                      "Transport",
                      "Water & Wastewater",
                      "Telecoms / ICT",
                      "Oil, Gas & Refineries",
                      "Social Infrastructure",
                      "Agro-Infrastructure",
                      "Manufacturing",
                      "Affordable Housing",
                    ]}
                  />
                </div>

                <Field label="Project size (USD)" name="size" placeholder="Min. $50M" required />

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
                    Project summary
                  </label>
                  <textarea
                    name="summary"
                    rows={5}
                    required
                    placeholder="Sponsor, scope, status of government support, and any prior work…"
                    className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-deep"
                >
                  Submit project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by Zebcha regarding your project.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70">
        {label}
      </label>
      <select
        name={name}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
