import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroAfrica from "@/assets/hero-africa.jpg";
import infraBridge from "@/assets/infra-bridge.jpg";
import infraSolar from "@/assets/infra-solar.jpg";
import infraPort from "@/assets/infra-port.jpg";
import africaTopo from "@/assets/africa-topo.png";
import { Reveal } from "@/components/Reveal";
import { useParallax } from "@/hooks/useParallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zebcha — Investment Facilitation & Project Management" },
      {
        name: "description",
        content:
          "Zebcha connects investors, government opportunities, and viable projects across Nigeria and beyond — structuring bankable deals and overseeing execution to delivery.",
      },
      { property: "og:title", content: "Zebcha — Investment Facilitation & Project Management" },
      {
        property: "og:description",
        content:
          "Bridging capital and opportunity. Zebcha facilitates investment and manages execution for government-backed and private-sector projects.",
      },
      { property: "og:image", content: heroAfrica },
      { property: "twitter:image", content: heroAfrica },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    n: "01",
    name: "Investment Facilitation",
    detail:
      "We connect institutional and private capital to viable, well-structured opportunities — sourcing, screening and matching investors with projects positioned for measurable returns.",
  },
  {
    n: "02",
    name: "Project Management",
    detail:
      "End-to-end oversight from inception to completion. We protect capital and timelines through disciplined planning, procurement, monitoring and delivery.",
  },
  {
    n: "03",
    name: "Advisory & Structuring",
    detail:
      "We shape opportunities into bankable propositions — financial modelling, risk allocation, and transaction structuring built to withstand investor and lender scrutiny.",
  },
  {
    n: "04",
    name: "Stakeholder Coordination",
    detail:
      "We bridge government, sponsors, financiers and operators — aligning interests, navigating approvals, and keeping complex partnerships moving toward financial close.",
  },
];

const featured = [
  {
    img: infraBridge,
    tag: "Transport",
    title: "Truck & Trailer Park Programme",
    detail: "Multi-site PPP advisory across 16 federal locations, Nigeria.",
  },
  {
    img: infraSolar,
    tag: "Power",
    title: "30MW Solar Transactions",
    detail: "Ongoing transaction advisory and financing structuring across Nigeria.",
  },
  {
    img: infraPort,
    tag: "Maritime",
    title: "Integrated Shipbuilding Yard",
    detail: "$613m PPP development structuring, Lagos.",
  },
];

const whyUs = [
  {
    n: "01",
    title: "Strategic connections",
    detail:
      "A curated network across government, multilateral capital, EU project finance and private investors — built to move serious deals.",
  },
  {
    n: "02",
    title: "Execution, not introductions",
    detail:
      "We stay in the deal beyond the handshake — managing structuring, financial close and on-the-ground delivery.",
  },
  {
    n: "03",
    title: "Local depth, global standards",
    detail:
      "Fluent in Nigeria's regulatory, political and commercial terrain, with the discipline international investors expect.",
  },
  {
    n: "04",
    title: "Transparent and accountable",
    detail:
      "Clear governance, clean documentation, and audit-ready reporting at every stage of the transaction.",
  },
  {
    n: "05",
    title: "Opportunities to outcomes",
    detail:
      "We measure success by completed projects and capital deployed — not by deals discussed.",
  },
];

function HomePage() {
  const heroImgRef = useParallax<HTMLImageElement>(0.18);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            ref={heroImgRef}
            src={heroAfrica}
            alt="Aerial view of the African continent at golden hour"
            className="h-[120%] w-full -translate-y-[5%] object-cover will-change-transform"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/55 to-background" />
        </div>

        <div className="container-editorial relative pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-4xl">
            <Reveal variant="fade" delay={0}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
                Investment Facilitation · Project Management
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.95] text-ivory">
                Connecting capital to
                <span className="italic text-ochre"> opportunity</span>.
                <br />
                Delivering projects that endure.
              </h1>
            </Reveal>
            <Reveal variant="up" delay={260}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
                Zebcha facilitates investment and manages execution for government-backed and
                private-sector projects across Nigeria and beyond — built on trust, strategic
                insight, and a relentless focus on results.
              </p>
            </Reveal>
            <Reveal variant="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/programme"
                  className="inline-flex items-center gap-2 rounded-sm border border-ivory/40 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10"
                >
                  Explore opportunities
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-editorial relative -mt-12 pb-0">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
            {[
              { v: "$15B", l: "Programme funding ceiling" },
              { v: "$50M", l: "Minimum project size" },
              { v: "90 days", l: "Target to financial close" },
              { v: "Single-digit", l: "Indicative pricing" },
            ].map((s, i) => (
              <Reveal key={s.l} variant="up" delay={i * 120}>
                <div className="bg-card p-6 md:p-8">
                  <div className="font-display text-3xl text-foreground md:text-4xl">{s.v}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-editorial mt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-5">
            <div className="eyebrow">Who we are</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              A trusted bridge between{" "}
              <span className="italic text-terracotta">capital, government and delivery</span>.
            </h2>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal variant="up">
              <p className="text-lg leading-relaxed text-foreground/90">
                Zebcha is an investment facilitation and project management firm. We sit at the
                intersection of investors, government opportunities, and viable projects —
                structuring deals, coordinating stakeholders and overseeing execution to delivery.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Our work is grounded in professionalism, strategic insight and an execution-first
                mindset. We do not simply make introductions — we build the structures, manage the
                relationships, and stay in the room until projects are completed and capital has
                performed. Clients engage Zebcha because they need a partner who can carry a
                transaction from concept to commissioning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative mt-32 overflow-hidden bg-bone py-24">
        <img
          src={africaTopo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.08]"
        />
        <div className="container-editorial relative">
          <Reveal as="div" variant="up" className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
                Services built around outcomes.
              </h2>
            </div>
            <Link
              to="/programme"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-terracotta"
            >
              See how we work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.n}
                variant="up"
                delay={i * 90}
                className="group flex flex-col gap-4 bg-bone p-8 transition-colors hover:bg-card md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-terracotta">{s.n}</span>
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">{s.name}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-editorial mt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-4">
            <div className="eyebrow">Why Zebcha</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Built to move serious deals.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We bring the network, the discipline and the delivery capability that complex,
              capital-intensive projects require.
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {whyUs.map((w, i) => (
                <Reveal
                  key={w.n}
                  variant="up"
                  delay={i * 90}
                  className="bg-card p-7 md:p-8"
                >
                  <div className="font-display text-2xl text-terracotta">{w.n}</div>
                  <h3 className="mt-3 font-display text-xl text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / CAPABILITY */}
      <section className="container-editorial mt-32">
        <Reveal as="div" variant="up" className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Capability in action</div>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Structuring complex deals.
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-2 text-sm font-medium text-forest hover:text-terracotta md:inline-flex"
          >
            View all engagements <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Zebcha is positioned to facilitate transactions of national significance. Our team
            combines deal structuring expertise with deep familiarity in navigating government and
            private-sector environments — from regulatory pathways and PPP frameworks to
            international project finance standards.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} as="article" variant="up" delay={i * 140} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1600}
                  height={1100}
                />
              </div>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                {p.tag}
              </div>
              <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RECRUITMENT */}
      <section className="container-editorial mt-32">
        <Reveal variant="up">
          <div className="grid gap-10 rounded-sm border border-border bg-bone p-8 md:grid-cols-12 md:p-14">
            <div className="md:col-span-7">
              <div className="eyebrow">Careers · Recruitment</div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
                Join the team building Africa's next chapter.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                We are growing a team of professionals — analysts, project managers, advisors and
                operators — who want to work on transactions and projects of national significance.
                Apply or sign in to the recruitment portal to view open roles and submit your
                application.
              </p>
            </div>
            <div className="flex items-end md:col-span-5 md:justify-end">
              <a
                href="https://zebcha-test.lovable.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-sm bg-forest px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-forest-deep"
              >
                Visit recruitment portal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-editorial mt-32 mb-24">
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
                Partner with Zebcha
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Let's unlock your next investment opportunity.
              </h2>
              <p className="mt-5 text-ivory/80">
                Whether you bring capital, a project, or a mandate — Zebcha provides the structure,
                stewardship and execution to turn it into a delivered outcome.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
