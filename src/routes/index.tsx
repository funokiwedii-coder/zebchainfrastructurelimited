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
      { title: "Zebcha Infrastructure — Building Africa's Future" },
      {
        name: "description",
        content:
          "Up to $15 billion in EU-partnered project finance for roads, rail, ports, power and housing across Africa. Minimum project size $50M, financial close in 90 days.",
      },
      { property: "og:title", content: "Zebcha Infrastructure — Building Africa's Future" },
      {
        property: "og:description",
        content:
          "Up to $15B in EU-partnered project finance for African infrastructure, with single-digit pricing and 90-day financial close.",
      },
      { property: "og:image", content: heroAfrica },
      { property: "twitter:image", content: heroAfrica },
    ],
  }),
  component: HomePage,
});

const sectors = [
  { n: "01", name: "Power generation & transmission" },
  { n: "02", name: "Roads, rail & bridges" },
  { n: "03", name: "Seaports & airports" },
  { n: "04", name: "Water & wastewater" },
  { n: "05", name: "Telecommunications & ICT" },
  { n: "06", name: "Oil, gas & refineries" },
  { n: "07", name: "Agro-infrastructure" },
  { n: "08", name: "Manufacturing infrastructure" },
  { n: "09", name: "Affordable housing" },
];

const featured = [
  {
    img: infraBridge,
    tag: "Transport",
    title: "Truck & Trailer Park Project",
    detail: "16 locations nationwide for the Federal Ministry of Works (PPP), Nigeria.",
  },
  {
    img: infraSolar,
    tag: "Power",
    title: "30MW Solar Solutions",
    detail: "Ongoing transaction advisory and financing across Nigeria, 2021–.",
  },
  {
    img: infraPort,
    tag: "Maritime",
    title: "Integrated Shipbuilding Yard",
    detail: "$613m development project, Lagos (Public-Private Partnership).",
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
                The Africa Infrastructure Programme · 2023
              </div>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.95] text-ivory">
                Building the
                <span className="italic text-ochre"> continent</span>,
                <br />
                one project at a time.
              </h1>
            </Reveal>
            <Reveal variant="up" delay={260}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/85">
                Zebcha Infrastructure delivers large-scale, government-backed projects across Africa —
                roads, rail, power, ports and housing — funded through partnerships with leading
                European Union project finance institutions.
              </p>
            </Reveal>
            <Reveal variant="up" delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/programme"
                  className="group inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
                >
                  Explore the AIP
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-ivory/40 px-7 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-ivory/10"
                >
                  Submit a project
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <div className="container-editorial relative -mt-12 pb-0">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
            {[
              { v: "$15B", l: "Funding ceiling, 2023" },
              { v: "$50M", l: "Minimum project size" },
              { v: "90 days", l: "Target to financial close" },
              { v: "Single-digit", l: "Financing pricing" },
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

      {/* THE GAP */}
      <section className="container-editorial mt-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-5">
            <div className="eyebrow">The opportunity</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Africa's annual infrastructure gap is{" "}
              <span className="italic text-terracotta">$68 – $108 billion</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              According to the African Development Bank (2022), the continent faces a structural
              shortfall in the basic infrastructure required for economic activity. Zebcha was
              designed to help close that gap — at scale, at speed, and on bankable terms.
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-l border-border pl-8">
              {[
                { v: "51M", l: "Housing units gap, 2022" },
                { v: "12.4 GW", l: "Electricity supply gap, 2019" },
                { v: "$94.2B", l: "Food supply gap, 2019" },
                { v: "$207.6B", l: "ICT investment gap, 2019" },
              ].map((s, i) => (
                <Reveal key={s.l} variant="up" delay={i * 110}>
                  <div className="font-display text-4xl text-forest md:text-5xl">{s.v}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
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
              <div className="eyebrow">Nine sectors</div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground md:text-5xl">
                Where the AIP deploys capital.
              </h2>
            </div>
            <Link
              to="/programme"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-terracotta"
            >
              Read the full programme <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal
                key={s.n}
                variant="scale"
                delay={i * 60}
                className="group flex items-baseline gap-5 bg-bone p-7 transition-colors hover:bg-card"
              >
                <span className="font-display text-2xl text-terracotta">{s.n}</span>
                <span className="font-display text-xl text-foreground">{s.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-editorial mt-32">
        <Reveal as="div" variant="up" className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Featured projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-2 text-sm font-medium text-forest hover:text-terracotta md:inline-flex"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
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
                Next steps
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Have a project? Let's talk.
              </h2>
              <p className="mt-5 text-ivory/80">
                From submission to financial close in ninety days. Send us your prospective project
                and our team will arrange a clarification call.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ochre px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-ivory"
              >
                Submit your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
