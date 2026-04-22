import { createFileRoute } from "@tanstack/react-router";
import infraBridge from "@/assets/infra-bridge.jpg";
import infraSolar from "@/assets/infra-solar.jpg";
import infraPort from "@/assets/infra-port.jpg";
import infraHousing from "@/assets/infra-housing.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Zebcha Infrastructure" },
      {
        name: "description",
        content:
          "A multi-billion-dollar portfolio of African infrastructure projects: ports, refineries, solar, housing, smart cities, water, and transport.",
      },
      { property: "og:title", content: "Zebcha Projects Portfolio" },
      {
        property: "og:description",
        content:
          "Selected works across Nigeria and Africa — from $1.5B FLNG to 30MW solar and 90,000 bpd refinery.",
      },
      { property: "og:image", content: infraPort },
      { property: "twitter:image", content: infraPort },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  value?: string;
  location: string;
  sector: string;
  detail: string;
};

const nigeria: Project[] = [
  {
    title: "Truck & Trailer Park Project",
    location: "16 locations, Nigeria",
    sector: "Transport · PPP",
    detail: "Nationwide PPP for the Federal Ministry of Works.",
  },
  {
    title: "Integrated Shipbuilding Yard",
    value: "$613M",
    location: "Lagos",
    sector: "Maritime · PPP",
    detail: "Development of a major shipbuilding yard under PPP structure.",
  },
  {
    title: "2,000-Hectare Rice Farm",
    value: "$9.1M",
    location: "Owerri",
    sector: "Agro · Processing",
    detail: "Integrated farm with a 12,000-tonne per annum processing plant.",
  },
  {
    title: "30MW Solar Solutions",
    location: "Across Nigeria",
    sector: "Power · Renewables",
    detail: "Ongoing transaction advisory and financing since 2021.",
  },
  {
    title: "Kaduna–Jos Pipeline",
    location: "167km, Nigeria",
    sector: "Oil & Gas · PPP",
    detail: "Rehabilitation, maintenance and security project under PPP.",
  },
  {
    title: "Security & Telecoms Network PPP",
    value: "$786M",
    location: "Nigeria",
    sector: "Telecoms · PPP",
    detail: "Advisory under a 30-year concession.",
  },
  {
    title: "Asokoro Hills Smart City",
    value: "$700M",
    location: "Abuja, 249 ha",
    sector: "Housing · Smart City",
    detail: "Delivering 7,000+ units in a flagship Abuja development.",
  },
  {
    title: "Floating LNG Facility",
    value: "$1.5B",
    location: "Nigeria",
    sector: "Oil & Gas · PPP",
    detail: "Monetising flared and stranded gas. Feasibility & development.",
  },
  {
    title: "Warri Water Reticulation",
    value: "$35.4M",
    location: "Delta State",
    sector: "Water · PPP",
    detail: "Transaction advisory under a PPP concession.",
  },
  {
    title: "Smart Truck Park & Logistics Hub",
    value: "$286M",
    location: "Lagos port corridors",
    sector: "Logistics",
    detail: "Developed under Zedx Limited along Nigeria's port corridors.",
  },
  {
    title: "ASSETS — Smart Energy & Transport",
    value: "$700M",
    location: "Abuja",
    sector: "Smart Systems",
    detail: "Abuja Sustainable Smart Energy & Transport System.",
  },
  {
    title: "Refinery Project — 90,000 bpd",
    value: "$1B",
    location: "Nigeria",
    sector: "Oil & Gas",
    detail: "Ongoing project development and financing arrangement.",
  },
  {
    title: "Silver Refinery Development",
    value: "$200M",
    location: "Ebonyi",
    sector: "Mining",
    detail: "Development of a silver refining facility.",
  },
  {
    title: "Affordable Housing & Market Project",
    location: "Sokoto State",
    sector: "Housing · Public",
    detail: "Multi-million-dollar partnership with the Sokoto State Government.",
  },
];

const africa: Project[] = [
  {
    title: "Mineral Trading Platform",
    value: "$1M / month",
    location: "CAR ↔ New York",
    sector: "Trading",
    detail: "Development of a mineral trading platform between CAR and the USA.",
  },
  {
    title: "Shimoni Integrated Development",
    location: "Kwale County, Kenya",
    sector: "Industrial · Port",
    detail: "Due diligence advisory for a multi-billion-dollar industrial city and port.",
  },
  {
    title: "Suncity Development Project",
    value: "$80M",
    location: "Ghana, 4,000 acres",
    sector: "Housing",
    detail: "Transaction advisory and fund arrangement for a major housing project.",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="container-editorial pt-20 pb-12 md:pt-28">
        <Reveal variant="fade">
          <div className="eyebrow">Selected works</div>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            A multi-billion-dollar pipeline of African infrastructure.
          </h1>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Zebcha and its partners specialise in developing and arranging financing for large-scale
            infrastructure — over $1.2bn of PPPs approved by Nigeria's FEC in 2020 alone.
          </p>
        </Reveal>
      </section>

      {/* Hero strip of imagery */}
      <section className="container-editorial mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
        {[infraBridge, infraSolar, infraPort, infraHousing].map((src, i) => (
          <Reveal key={i} variant="scale" delay={i * 120} className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
              width={800}
              height={1000}
            />
          </Reveal>
        ))}
      </section>

      {/* Nigeria portfolio */}
      <section className="container-editorial mt-24">
        <Reveal as="div" variant="up" className="flex items-end justify-between gap-6 border-b border-border pb-6">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">Nigeria portfolio</h2>
          <div className="hidden text-sm text-muted-foreground md:block">
            {nigeria.length} projects
          </div>
        </Reveal>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {nigeria.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={(i % 3) * 90}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Africa portfolio */}
      <section className="container-editorial mt-24 mb-16">
        <Reveal as="div" variant="up" className="flex items-end justify-between gap-6 border-b border-border pb-6">
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            Africa engagements
          </h2>
          <div className="hidden text-sm text-muted-foreground md:block">
            via Zebcha-COPIP
          </div>
        </Reveal>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {africa.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={(i % 3) * 90}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-bone">
      <div className="flex items-start justify-between gap-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
          {p.sector}
        </div>
        {p.value && (
          <div className="font-display text-xl text-forest">{p.value}</div>
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl leading-tight text-foreground">{p.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.detail}</p>
    </article>
  );
}
