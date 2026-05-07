import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, Users, Globe2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroAfrica from "@/assets/hero-africa.jpg";
import africaTopo from "@/assets/africa-topo.png";

const RECRUITMENT_URL = "https://zebcha-test.lovable.app/login";

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

function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroAfrica}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
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
                href={RECRUITMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Visit recruitment portal
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
              d: "Register your interest through our recruitment portal and share your CV and a short note on what draws you to Zebcha.",
            },
            {
              n: "02",
              t: "Assessment",
              d: "Shortlisted candidates complete a role-relevant test designed to surface how you think and approach real problems.",
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

      {/* CTA */}
      <section className="container-editorial mt-24 mb-24 md:mt-32">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-sm bg-forest px-8 py-20 text-ivory md:px-16 md:py-24">
            <img
              src={africaTopo}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] opacity-15"
            />
            <div className="relative max-w-2xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
                Ready to apply?
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Register your interest with Zebcha.
              </h2>
              <p className="mt-5 text-ivory/80">
                Open roles and general applications are managed through our recruitment portal.
                Create an account to apply or stay informed about new opportunities.
              </p>
              <a
                href={RECRUITMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Visit recruitment portal <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
