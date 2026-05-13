import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Briefcase, Users, Globe2, TrendingUp, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import heroAfrica from "@/assets/hero-africa.jpg";
import africaTopo from "@/assets/africa-topo.png";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Zebcha Infrastructure" },
      {
        name: "description",
        content:
          "Build your career at Zebcha. Join a team structuring landmark investment and infrastructure projects across Nigeria and beyond.",
      },
      { property: "og:title", content: "Careers — Zebcha Infrastructure" },
      {
        property: "og:description",
        content:
          "Explore opportunities to work on bankable, high-impact projects with a team that takes deals from concept to commissioning.",
      },
      { property: "og:image", content: heroAfrica },
    ],
  }),
  component: CareersPage,
});

const values = [
  {
    icon: Briefcase,
    title: "Meaningful work",
    detail:
      "Contribute to transactions of national significance — power, transport, maritime and beyond.",
  },
  {
    icon: Users,
    title: "Senior-led teams",
    detail:
      "Learn alongside practitioners with deep experience in project finance, PPPs and execution.",
  },
  {
    icon: Globe2,
    title: "Local depth, global standards",
    detail:
      "Work to international project finance standards while staying close to the ground in-market.",
  },
  {
    icon: TrendingUp,
    title: "Real growth",
    detail:
      "Clear paths for advancement, ownership of mandates, and exposure to senior counterparties.",
  },
];

const tracks = [
  {
    n: "01",
    title: "Investment & Transactions",
    detail:
      "Originate, structure and close debt and equity transactions. Financial modelling, due diligence, and investor coordination.",
  },
  {
    n: "02",
    title: "Project Management & Delivery",
    detail:
      "Plan, monitor and deliver complex capital projects. Procurement, scheduling, contract administration and stakeholder reporting.",
  },
  {
    n: "03",
    title: "Advisory & Research",
    detail:
      "Sector research, regulatory analysis and bankability assessments to shape opportunities into investment-grade propositions.",
  },
  {
    n: "04",
    title: "Operations & Corporate",
    detail:
      "Finance, legal, compliance and people functions that keep a high-performing transactions firm running smoothly.",
  },
];

const TRACK_OPTIONS = [
  "Investment & Transactions",
  "Project Management & Delivery",
  "Advisory & Research",
  "Operations & Corporate",
  "General interest",
] as const;

const GENDER_OPTIONS = ["Male", "Female"] as const;
const RELOCATE_OPTIONS = ["Yes", "No"] as const;

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(120),
  course_of_study: z.string().trim().min(1, "Course of study is required").max(120),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  cgpa: z.string().trim().min(1, "Grade/CGPA is required").max(20),
  gender: z.enum(GENDER_OPTIONS, { errorMap: () => ({ message: "Select gender" }) }),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(40),
  current_location: z.string().trim().min(1, "Current location is required").max(120),
  willing_to_relocate: z.enum(RELOCATE_OPTIONS, { errorMap: () => ({ message: "Please select" }) }),
  age: z
    .string()
    .min(1, "Age is required")
    .refine((v) => /^\d+$/.test(v) && Number(v) >= 15 && Number(v) <= 100, "Enter a valid age"),
  date_of_graduation: z.string().min(1, "Date of graduation is required"),
  available_start_date: z.string().min(1, "Availability date is required"),
  university: z.string().trim().min(1, "University is required").max(160),
  track: z
    .enum(TRACK_OPTIONS, { errorMap: () => ({ message: "Select a track" }) })
    .optional()
    .or(z.literal("")),
});

function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroAfrica} alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/90 via-forest-deep/70 to-background" />
        </div>
        <div className="container-editorial pt-24 pb-24 md:pt-32 md:pb-32">
          <Reveal variant="fade">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
              Careers at Zebcha
            </div>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] text-ivory">
              Build a career structuring the deals that{" "}
              <span className="italic text-ochre">move economies</span>.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
              Zebcha is a small, senior team taking complex transactions from concept to
              commissioning. If you are excited by serious work, high standards and visible
              outcomes, we would like to hear from you.
            </p>
          </Reveal>
          <Reveal variant="up" delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Apply now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 rounded-sm border border-ivory/40 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10"
              >
                Explore career tracks
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ZEBCHA */}
      <section className="container-editorial mt-24 md:mt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-5">
            <div className="eyebrow">Why Zebcha</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              A place to do your{" "}
              <span className="italic text-terracotta">most meaningful work</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We hire people who care about outcomes — not just activity. In return, we offer
              proximity to landmark deals, generous mentorship, and the autonomy to own your
              mandates.
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} variant="up" delay={i * 90} className="bg-card p-7 md:p-8">
                  <v.icon className="h-6 w-6 text-terracotta" />
                  <h3 className="mt-4 font-display text-xl text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="relative mt-24 overflow-hidden bg-bone py-24 md:mt-32">
        <img
          src={africaTopo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.08]"
        />
        <div className="container-editorial relative">
          <Reveal variant="up">
            <div className="eyebrow">Career tracks</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
              Where you might fit.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We recruit across four broad areas. Within each, roles range from analyst through to
              senior leadership.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {tracks.map((t, i) => (
              <Reveal
                key={t.n}
                variant="up"
                delay={i * 90}
                className="flex flex-col gap-4 bg-bone p-8 md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-terracotta">{t.n}</span>
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">{t.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{t.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HIRE */}
      <section className="container-editorial mt-24 md:mt-32">
        <Reveal variant="up">
          <div className="eyebrow">How we hire</div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            A clear, respectful process.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              t: "Apply",
              d: "Submit the application form below with your details and a short note on what draws you to Zebcha.",
            },
            {
              n: "02",
              t: "Assessment",
              d: "Shortlisted candidates are invited to our recruitment portal to complete a role-relevant test.",
            },
            {
              n: "03",
              t: "Interview",
              d: "Meet the team to discuss your experience and ambitions, and get an honest picture of the work and the people.",
            },
            {
              n: "04",
              t: "Offer & Onboarding",
              d: "Successful candidates receive a formal offer letter and a structured onboarding plan to set you up for success.",
            },
          ].map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 120}>
              <div className="font-display text-2xl text-terracotta">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="container-editorial mt-24 mb-24 md:mt-32 scroll-mt-24">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-sm bg-forest px-8 py-16 text-ivory md:px-16 md:py-20">
            <img
              src={africaTopo}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] opacity-15"
            />
            <div className="relative grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
                  Apply to Zebcha
                </div>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                  Register your interest.
                </h2>
                <p className="mt-5 text-ivory/80">
                  Tell us a little about yourself and where you might fit. If your background looks
                  like a match, we will reach out with next steps — including access to our
                  assessment portal.
                </p>
              </div>
              <div className="md:col-span-7">
                <ApplicationForm />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ApplicationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cvFile, setCvFile] = useState<File | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      course_of_study: String(fd.get("course_of_study") ?? ""),
      date_of_birth: String(fd.get("date_of_birth") ?? ""),
      cgpa: String(fd.get("cgpa") ?? ""),
      gender: String(fd.get("gender") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      current_location: String(fd.get("current_location") ?? ""),
      willing_to_relocate: String(fd.get("willing_to_relocate") ?? ""),
      age: String(fd.get("age") ?? ""),
      date_of_graduation: String(fd.get("date_of_graduation") ?? ""),
      available_start_date: String(fd.get("available_start_date") ?? ""),
      university: String(fd.get("university") ?? ""),
      track: String(fd.get("track") ?? ""),
    };

    const parsed = applicationSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    if (!cvFile) {
      setErrors({ cv: "Please attach your CV/resume" });
      return;
    }
    if (cvFile.size > 10 * 1024 * 1024) {
      setErrors({ cv: "File must be under 10MB" });
      return;
    }

    setSubmitting(true);

    // Upload CV
    const ext = cvFile.name.split(".").pop() || "pdf";
    const filePath = `${crypto.randomUUID()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("cvs")
      .upload(filePath, cvFile, { contentType: cvFile.type, upsert: false });

    if (uploadError) {
      setSubmitting(false);
      toast.error("Could not upload your CV. Please try again.");
      return;
    }

    const { data: pub } = supabase.storage.from("cvs").getPublicUrl(filePath);

    const { error } = await supabase.from("job_applications").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      course_of_study: parsed.data.course_of_study,
      date_of_birth: parsed.data.date_of_birth,
      cgpa: parsed.data.cgpa,
      gender: parsed.data.gender,
      current_location: parsed.data.current_location,
      willing_to_relocate: parsed.data.willing_to_relocate === "Yes",
      age: Number(parsed.data.age),
      date_of_graduation: parsed.data.date_of_graduation,
      available_start_date: parsed.data.available_start_date,
      university: parsed.data.university,
      track: parsed.data.track || null,
      cv_url: pub.publicUrl,
      cover_note: "",
    });
    setSubmitting(false);

    if (error) {
      toast.error("Could not submit your application. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Application received. Thank you.");
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-ivory/20 bg-ivory/5 p-8 text-ivory">
        <div className="font-display text-2xl">Thank you.</div>
        <p className="mt-3 text-ivory/80">
          Your application has been received. If your background looks like a match, a member of
          the team will be in touch with next steps — including access to our assessment portal.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name *" name="name" required error={errors.name} />
        <Field label="Email address *" name="email" type="email" required error={errors.email} />
        <Field label="Phone number *" name="phone" type="tel" required error={errors.phone} />
        <Field label="Gender *" name="gender" as="select" options={[...GENDER_OPTIONS]} required error={errors.gender} />
        <Field label="Date of birth *" name="date_of_birth" type="date" required error={errors.date_of_birth} />
        <Field label="Age *" name="age" type="number" required error={errors.age} />
        <Field label="University *" name="university" required error={errors.university} />
        <Field label="Course of study *" name="course_of_study" required error={errors.course_of_study} />
        <Field label="Grade / CGPA *" name="cgpa" required error={errors.cgpa} />
        <Field label="Date of graduation *" name="date_of_graduation" type="date" required error={errors.date_of_graduation} />
        <Field label="Current location *" name="current_location" required error={errors.current_location} />
        <Field label="Available start date *" name="available_start_date" type="date" required error={errors.available_start_date} />
        <Field
          label="Willing to relocate to Abuja if shortlisted *"
          name="willing_to_relocate"
          as="select"
          options={[...RELOCATE_OPTIONS]}
          required
          error={errors.willing_to_relocate}
        />
        <Field
          label="Track of interest (optional)"
          name="track"
          as="select"
          options={[...TRACK_OPTIONS]}
          error={errors.track}
        />
      </div>

      <div>
        <Label>Attach your CV / resume *</Label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
          required
          className="mt-2 block w-full cursor-pointer rounded-sm border border-ivory/25 bg-ivory/5 px-4 py-3 text-sm text-ivory file:mr-4 file:rounded-sm file:border-0 file:bg-ochre file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-forest-deep hover:file:bg-ivory"
        />
        <p className="mt-1 text-xs text-ivory/50">PDF, DOC or DOCX. Max 10MB.</p>
        {errors.cv && <ErrorText>{errors.cv}</ErrorText>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory disabled:opacity-60"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit application
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ivory/70">
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-ochre">{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  as,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  as?: "select";
  options?: string[];
}) {
  const baseClass =
    "mt-2 w-full rounded-sm border border-ivory/25 bg-ivory/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/30";
  return (
    <div>
      <Label>{label}</Label>
      {as === "select" ? (
        <select name={name} required={required} defaultValue="" className={baseClass}>
          <option value="" disabled className="text-foreground">
            Select…
          </option>
          {(options ?? []).map((o) => (
            <option key={o} value={o} className="text-foreground">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          maxLength={type === "date" || type === "number" ? undefined : 255}
          className={baseClass}
        />
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

