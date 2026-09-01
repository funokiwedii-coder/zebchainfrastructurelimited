import { createFileRoute } from "@tanstack/react-router";
import { Building2, ImageIcon } from "lucide-react";
import infraPort from "@/assets/infra-port.jpg";
import tetracoreAsset from "@/assets/tetracore.jpg.asset.json";
import nigerBridgeAsset from "@/assets/2nd-niger-bridge.png.asset.json";
import mission300Asset from "@/assets/mission-300.png.asset.json";
import copipAsset from "@/assets/copip-ocean-cleanup.png.asset.json";
import donDomingoAsset from "@/assets/don-domingo-water.jpg.asset.json";
import lagosIbadanAsset from "@/assets/lagos-ibadan-expressway.png.asset.json";
import shipbuildingAsset from "@/assets/integrated-shipbuilding-yard.png.asset.json";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects — Zebcha Infrastructure" },
      {
        name: "description",
        content:
          "Eight flagship infrastructure projects across Nigeria and Africa: housing, energy, transport, water, maritime and advisory programmes.",
      },
      { property: "og:title", content: "Featured Projects — Zebcha Infrastructure" },
      {
        property: "og:description",
        content:
          "From Green Energy City to the Integrated Shipbuilding Yard — explore Zebcha's project preparation and investment facilitation portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: infraPort },
      { property: "twitter:image", content: infraPort },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  sector: string;
  location: string;
  value: string;
  description: string;
  img?: string;
};

const featuredProjects: Project[] = [
  {
    title: "Green Energy City",
    sector: "Housing · PPP",
    location: "Nasarawa State",
    value: "₦280B (~$175M)",
    description:
      "50,000 housing units delivered over 10 years. Backed by a Federal Ministry of Finance sovereign guarantee. Targets federal civil servants and private sector workers.",
  },
  {
    title: "Tetracore Urea Complex",
    sector: "Agro · Industrial",
    location: "Koko, Delta State",
    value: "$616M",
    description:
      "1,200 TPD ammonia-urea fertilizer complex in Koko, Delta State. Zebcha is providing transactional advisory and fundraising support.",
    img: tetracoreAsset.url,
  },
  {
    title: "Tetracore Gas-to-Liquids Facility",
    sector: "Oil & Gas · Industrial",
    location: "Atakobo, Ogun State",
    value: "$437M",
    description:
      "5,000 BPD Gas-to-Liquids facility in Atakobo, Ogun State. Zebcha is providing transactional advisory and fundraising support.",
    img: tetracoreAsset.url,
  },
  {
    title: "2nd Niger Bridge",
    sector: "Transport · PPP",
    location: "Asaba–Onitsha",
    value: "Toll Concession",
    description:
      "12.4km PPP toll concession connecting Delta and Anambra States. Structured in partnership with the Nigerian Sovereign Investment Authority (NSIA). A flagship Nigerian infrastructure PPP.",
    img: nigerBridgeAsset.url,
  },
  {
    title: "Mission 300",
    sector: "Energy · Advisory",
    location: "Africa — All States",
    value: "$32.8B Programme",
    description:
      "Zebcha provided advisory support to the Federal Ministry of Finance for Nigeria's Mission 300 continental energy access programme. Presented at the private sector roundtable, April 2025.",
    img: mission300Asset.url,
  },
  {
    title: "COPIP (Clean Oceans)",
    sector: "Water · Environment",
    location: "Sub-Saharan Africa",
    value: "EIB Programme",
    description:
      "Zebcha serves as consultant for Sub-Saharan Africa under the EIB Clean Oceans Project Identification and Preparation (COPIP) programme. Active engagements in Kenya, Ghana, Benin, Senegal, Côte d'Ivoire and CAR.",
    img: copipAsset.url,
  },
  {
    title: "Don Domingo Water Company Limited",
    sector: "Water · PPP",
    location: "Delta State",
    value: "$1.4 Billion",
    description:
      "Don Domingo Water Company Limited is a Nigerian company engaged in the production and distribution of quality drinking water. Zebcha is providing project preparation and investment facilitation support.",
    img: donDomingoAsset.url,
  },
  {
    title: "Lagos–Ibadan Expressway Rehabilitation",
    sector: "Transport · Advisory",
    location: "Lagos / Ogun / Oyo States",
    value: "127.6km Federal Highway",
    description:
      "Rehabilitation and upgrading of Nigeria's busiest interstate highway to improve road safety, traffic flow, and connectivity between Lagos and Ibadan. Zebcha's role: Transaction & Financial Advisory.",
    img: lagosIbadanAsset.url,
  },
  {
    title: "Integrated Shipbuilding Yard",
    sector: "Maritime · PPP",
    location: "Lagos",
    value: "$613M",
    description:
      "Nigeria's first integrated shipbuilding yard developed under a PPP concession. Develops indigenous maritime industrial capacity and reduces Nigeria's dependence on foreign ship maintenance.",
    img: shipbuildingAsset.url,
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="container-editorial pt-20 pb-12 md:pt-28">
        <Reveal variant="fade">
          <div className="eyebrow">Featured projects</div>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            A portfolio built from project preparation to financial close.
          </h1>
        </Reveal>
        <Reveal variant="up" delay={240}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Zebcha's featured projects span housing, energy, transport, water and maritime infrastructure across Nigeria and Africa — each one structured for bankability and long-term impact.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-8 mb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
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
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[16/10] bg-muted">
        {p.img ? (
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            width={1600}
            height={700}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/60">
            <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-wider">Photo placeholder</span>
          </div>
        )}
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          <Building2 className="h-3 w-3" />
          {p.sector}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="font-display text-xl text-forest">{p.value}</div>
        <h3 className="mt-3 font-display text-xl leading-tight text-foreground">{p.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">{p.description}</p>
      </div>
    </article>
  );
}
