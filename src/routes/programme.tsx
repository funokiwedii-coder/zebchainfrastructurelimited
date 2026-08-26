import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import infraBridge from "@/assets/infra-bridge.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programmes — Africa Infrastructure Programme & Zebcha Frontier Fund" },
      {
        name: "description",
        content:
          "The AIP funds bankable African infrastructure up to $15B per year, while the Zebcha Frontier Fund is a $25M early-stage project preparation facility.",
      },
      { property: "og:title", content: "Zebcha Infrastructure Programmes" },
      {
        property: "og:description",
        content:
          "Africa Infrastructure Programme and Zebcha Frontier Fund: capital, preparation and execution for large-scale infrastructure.",
      },
      { property: "og:image", content: infraBridge },
      { property: "twitter:image", content: infraBridge },
    ],
  }),
  component: ProgrammePage,
});

const sectors = [
  "Power Infrastructure",
  "Transport Infrastructure",
  "Water & Wastewater",
  "Telecoms & ICT",
  "Oil, Gas & Refineries",
  "Social Infrastructure",
  "Agro-Infrastructure",
  "Manufacturing Infrastructure",
  "Affordable Housing",
];

const steps = [
  {
    n: "01",
    t: "Submit Project Summary",
    d: "Send us your prospective project information — sector, location, sponsor, scope.",
  },
  {
    n: "02",
    t: "Project Feedback",
    d: "Zebcha arranges project clarification call(s) to ensure key criteria are met.",
  },
  {
    n: "03",
    t: "Due Diligence",
    d: "Technical, financial, legal and ESG diligence by Zebcha and its EU partners.",
  },
  {
    n: "04",
    t: "Negotiation of Key Terms",
    d: "Loan pricing, tenor, moratorium, local content and governance terms agreed.",
  },
  {
    n: "05",
    t: "Execution of Project Documents",
    d: "Loan signing with Ministry of Finance, site visits and conditions precedent.",
  },
  {
    n: "06",
    t: "Implementation",
    d: "Delivery by international consortium working alongside the local execution team.",
  },
];

const zffStats = [
  {
    v: "$670M/year",
    l: "Annual Project Preparation Funding Needed",
    d: "Zebcha estimates Nigeria needs $670M every year for project preparation alone — feasibility, ESIA, permits and financial modelling — just to maintain healthy infrastructure growth.",
  },
  {
    v: "$33.2B/year",
    l: "Annual Infrastructure Investment Required",
    d: "Nigeria's NIIMP target: infrastructure investment must triple from ~$10B to $33.2B per annum to meet the country's growth objectives.",
  },
  {
    v: "2.6% – 9%",
    l: "Project Preparation Cost Rate",
    d: "In mature PPP markets (e.g. UK), advisory costs average 2.6% of project value. In frontier markets like Nigeria, this rises to 4–9% due to the volume of risks that must be hedged.",
  },
  {
    v: "$25M",
    l: "ZFF Fund Size",
    d: "The $25M fund is designed to finance the preparation of $2.5B worth of projects — or projects generating $250M p.a. in revenues — across infrastructure, housing, agro and manufacturing.",
  },
];

const zffSectors = [
  "Infrastructure",
  "Affordable Housing",
  "Agro-Processing",
  "Manufacturing",
];

const zffSteps = [
  {
    n: "01",
    t: "Ideation",
    d: "Idea generation, validation and sector alignment ($5,000 threshold).",
  },
  {
    n: "02",
    t: "Insemination",
    d: "Concept refinement, demand studies, strategic partnerships ($15,000).",
  },
  {
    n: "03",
    t: "Insight",
    d: "Business plan, ESIA, permits, market studies, investment memo ($2M).",
  },
  {
    n: "04",
    t: "Implementation",
    d: "Financial close, construction, commercialisation ($10M–$1B).",
  },
  {
    n: "05",
    t: "Issue",
    d: "Exit: trade sale, buyback, IPO or sale to PE investors (3–10x return).",
  },
];

const zffParams = [
  ["Target Sectors", "Infrastructure · Affordable Housing · Agro-Processing · Manufacturing"],
  ["Fund Size", "$25M"],
  ["Average Investment", "$1.5M per deal"],
  ["Fund Life", "8+2 years"],
  ["Target IRR", "32%+"],
  [
    "Manager",
    "Zebcha Frontier Limited (50/50 JV — Zebcha Infrastructure Limited & New Frontier Development Limited)",
  ],
];

function ProgrammePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-editorial pt-20 pb-16 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal as="div" variant="up" className="md:col-span-7">
            <div className="eyebrow">Programme overview</div>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              The Africa Infrastructure Programme.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The AIP mobilises large-scale capital to deliver the public systems, services and
              facilities required for African economies to thrive — from power and transport to
              affordable housing and ICT.
            </p>
          </Reveal>
          <Reveal as="div" variant="right" delay={150} className="md:col-span-5">
            <div className="rounded-sm border border-border bg-card p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                Programme parameters
              </div>
              <dl className="mt-6 space-y-5">
                {[
                  ["Funding ceiling, 2023", "$15 billion"],
                  ["Minimum project size", "$50 million"],
                  ["Target financial close", "90 days"],
                  ["Pricing", "Single-digit"],
                  ["Security", "Government guarantee"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0">
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="font-display text-xl text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / Effects / Solution */}
      <section className="bg-bone py-24">
        <div className="container-editorial grid gap-16 md:grid-cols-3">
          <Reveal variant="up" delay={0}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              The problem
            </div>
            <ul className="mt-6 space-y-4 text-base text-foreground">
              <li className="border-l-2 border-terracotta pl-4">
                Lack of funding for project execution
              </li>
              <li className="border-l-2 border-terracotta pl-4">
                Weak project preparation and structuring
              </li>
            </ul>
          </Reveal>
          <Reveal variant="up" delay={150}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-clay">
              The effects
            </div>
            <ul className="mt-6 space-y-4 text-base text-foreground">
              <li className="border-l-2 border-clay pl-4">
                Improvident allocation of resources to projects
              </li>
              <li className="border-l-2 border-clay pl-4">
                Stalled or under-delivered infrastructure outcomes
              </li>
            </ul>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
              The solution
            </div>
            <ul className="mt-6 space-y-4 text-base text-foreground">
              <li className="border-l-2 border-forest pl-4">
                Develop funding platforms to mobilise large-scale capital
              </li>
              <li className="border-l-2 border-forest pl-4">
                Deploy funds against sovereign-backed, bankable structures
              </li>
              <li className="border-l-2 border-forest pl-4">
                Execute with international and local delivery teams
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="container-editorial py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-4">
            <div className="eyebrow">Nine sectors</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              The infrastructure mix.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Government-supported projects across the full spectrum of economic and social
              infrastructure.
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {sectors.map((s, i) => (
                <Reveal
                  key={s}
                  variant="up"
                  delay={(i % 2) * 80 + Math.floor(i / 2) * 60}
                  className="flex items-baseline gap-5 border-b border-border py-5"
                >
                  <span className="font-display text-2xl text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl text-foreground">{s}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-forest-deep py-24 text-ivory">
        <div className="container-editorial">
          <Reveal as="div" variant="up" className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
                Six steps · 90 days
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">From submission to delivery.</h2>
            </div>
            <div className="font-display text-2xl italic text-ivory/60">
              Steps 1–5 in 90 days or less.
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/15 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                as="li"
                variant="scale"
                delay={i * 110}
                className="bg-forest-deep p-8"
              >
                <div className="font-display text-3xl text-ochre">{s.n}</div>
                <h3 className="mt-3 font-display text-2xl text-ivory">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">{s.d}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="up" delay={200}>
            <div className="mt-12">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Begin step one — submit a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
