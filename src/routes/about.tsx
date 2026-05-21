import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import africaTopo from "@/assets/africa-topo.png";

import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

type Member = {
  name: string;
  role: string;
  photo?: string;
};

const team: Member[] = [
  { name: "Temitope Akinyemi", role: "MD / CEO", photo: "/team-temitope.jpg" },
  { name: "Gideon Dikedi", role: "Team Lead", photo: "/team-gideon.jpg" },
  { name: "Daniel Umoru", role: "Team Lead", photo: "/team-daniel.jpg" },
  { name: "Favour Unokiwedi", role: "Assistant Team Lead (Admin)" },
  { name: "Smart Michael", role: "Assistant Team Lead" },
  { name: "Praise Ossy Nwoye", role: "Assistant Team Lead" },
  { name: "Success Ezea", role: "Team Member" },
  { name: "Christiana Olatunji", role: "Team Member" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? team[openIndex] : null;

  return (
    <>
      {/* Intro */}
      <section className="container-editorial pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-3">
            <div className="eyebrow">About</div>
          </Reveal>
          <Reveal as="div" variant="up" delay={120} className="md:col-span-9">
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              A Nigerian project finance house with a continent-wide mandate.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Zebcha Infrastructure Limited (pronounced <em className="font-display">/zɛbka:/</em>)
              is a Nigeria-headquartered firm specialising in the development, advisory and
              financing of large-scale Public-Private Partnership infrastructure projects across
              Africa.
            </p>
          </Reveal>
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
          ].map((s, i) => (
            <Reveal key={s.l} variant="up" delay={i * 140}>
              <div className="font-display text-5xl text-forest">{s.v}</div>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.l}</div>
            </Reveal>
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
          <Reveal as="div" variant="left" className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ochre">
              What we do
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Project development. Transaction advisory. Fund arrangement.
            </h2>
          </Reveal>
          <div className="md:col-span-8 md:pl-8">
            <ul className="space-y-6 text-lg leading-relaxed text-ivory/85">
              {[
                "Identify viable, government-backed infrastructure opportunities across Africa.",
                "Structure bankable PPP transactions with EU project finance partners.",
                "Deploy single-digit financing against sovereign and sub-sovereign guarantees.",
                "Execute projects with international consortia and capable local teams.",
              ].map((line, i) => (
                <Reveal key={line} as="li" variant="up" delay={i * 140} className="flex gap-4">
                  <span className="font-display text-ochre">→</span>
                  {line}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-editorial py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal as="div" variant="left" className="md:col-span-4">
            <div className="eyebrow">Leadership & Team</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              The people behind the programme.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A senior team leading origination, structuring and execution across the AIP
              pipeline — supported by a focused operations and field team.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/80">
              Tap any profile to read more.
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <Reveal
                  key={m.name}
                  variant="up"
                  delay={(i % 3) * 100 + Math.floor(i / 3) * 60}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className="group flex w-full flex-col text-left outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-sm border border-forest/20 bg-muted">
                      {m.photo ? (
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-forest/10">
                          <span className="font-display text-5xl text-forest/70">
                            {initials(m.name)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/10" />
                      <div className="absolute inset-x-0 bottom-0 translate-y-2 px-3 pb-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1 rounded-sm bg-ivory/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                          Read profile →
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-5 font-display text-xl leading-tight text-foreground transition-colors group-hover:text-terracotta">
                      {m.name}
                    </h3>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                      {m.role}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.short}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl overflow-hidden p-0">
          {active && (
            <div className="grid gap-0 sm:grid-cols-[200px_1fr]">
              <div className="aspect-square h-full w-full overflow-hidden bg-forest/10 sm:aspect-auto">
                {active.photo ? (
                  <img
                    src={active.photo}
                    alt={active.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-6xl text-forest/70">
                      {initials(active.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <DialogHeader className="space-y-2 text-left">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {active.role}
                  </div>
                  <DialogTitle className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {active.name}
                  </DialogTitle>
                  {active.edu && (
                    <DialogDescription className="text-[11px] uppercase tracking-[0.15em] text-foreground/60">
                      {active.edu}
                    </DialogDescription>
                  )}
                </DialogHeader>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {active.bio}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
