import { createFileRoute } from "@tanstack/react-router";
import africaTopo from "@/assets/africa-topo.png";
import teamTemitope from "@/assets/team-temitope.jpg";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamGideon from "@/assets/team-gideon.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zebcha Infrastructure — Our Story & Team" },
      {
        name: "description",
        content:
          "Zebcha Infrastructure Limited is a Nigerian project finance and advisory firm with a $1B+ deal pipeline and EU funding partners.",
      },
      { property: "og:title", content: "About Zebcha Infrastructure" },
      {
        property: "og:description",
        content:
          "Meet the team behind the Africa Infrastructure Programme — Public-Private Partnership advisers with a multi-billion-dollar track record.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Temitope Akinyemi",
    role: "MD / CEO",
    photo: teamTemitope,
    bio: "Founder of Zebcha Infrastructure and Acting CEO of DDWCL, a multi-million dollar water utility. Former Portfolio Manager at the Nigerian Sovereign Investment Authority (2012–2015), with a background in commercial banking (FSB, GTB), infrastructure financing (HMS Host, USA), and mortgage-backed securities (GMRESCAP). Lead Investment & Project Adviser to DFID and the EIB since 2010, with over $1B in greenfield deals.",
    edu: "BSc Math (UNN) · MBA Finance & Strategy (Yale)",
  },
  {
    name: "Daniel Umoru",
    role: "Team Lead",
    photo: teamDaniel,
    bio: "Team Lead supporting origination, structuring and execution across the Zebcha pipeline.",
  },
  {
    name: "Gideon Dikedi",
    role: "Team Lead",
    photo: teamGideon,
    bio: "Team Lead supporting origination, structuring and execution across the Zebcha pipeline.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-editorial pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="eyebrow">About</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              A Nigerian project finance house with a continent-wide mandate.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Zebcha Infrastructure Limited (pronounced <em className="font-display">/zɛbka:/</em>)
              is a Nigeria-headquartered firm specialising in the development, advisory and
              financing of large-scale Public-Private Partnership infrastructure projects across
              Africa.
            </p>
          </div>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* Stats */}
      <section className="container-editorial py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { v: "$1.2B+", l: "Public-Private Partnerships approved by FEC in 2020 alone" },
            { v: "$1B+", l: "Greenfield deals at various levels of development" },
            { v: "EU", l: "Project finance partners funding the AIP" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-forest">{s.v}</div>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="relative overflow-hidden bg-forest py-24 text-ivory">
        <img
          src={africaTopo}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -left-40 -bottom-40 h-[560px] w-[560px] opacity-10"
        />
        <div className="container-editorial relative grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
              What we do
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Project development. Transaction advisory. Fund arrangement.
            </h2>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <ul className="space-y-6 text-lg leading-relaxed text-ivory/85">
              <li className="flex gap-4">
                <span className="font-display text-ochre">→</span>
                Identify viable, government-backed infrastructure opportunities across Africa.
              </li>
              <li className="flex gap-4">
                <span className="font-display text-ochre">→</span>
                Structure bankable PPP transactions with EU project finance partners.
              </li>
              <li className="flex gap-4">
                <span className="font-display text-ochre">→</span>
                Deploy single-digit financing against sovereign and sub-sovereign guarantees.
              </li>
              <li className="flex gap-4">
                <span className="font-display text-ochre">→</span>
                Execute projects with international consortia and capable local teams.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-editorial py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Leadership</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              The people behind the programme.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A compact senior team leading origination, structuring and execution across the AIP
              pipeline.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {team.map((m) => (
                <article key={m.name} className="flex flex-col">
                  <div className="aspect-square overflow-hidden rounded-sm border border-forest/20 bg-muted">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl leading-tight text-foreground">
                    {m.name}
                  </h3>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {m.role}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                  {m.edu && (
                    <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-foreground/60">
                      {m.edu}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
