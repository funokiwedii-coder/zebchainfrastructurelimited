import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import africaTopo from "@/assets/africa-topo.png";
import teamTemitope from "@/assets/team-temitope.jpg";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamGideon from "@/assets/team-gideon.jpg";
import teamFavour from "@/assets/team-favour.jpg";
import teamSmart from "@/assets/team-smart.jpg";
import teamChristiana from "@/assets/team-christiana.jpg";
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
  short: string;
  bio: string;
  edu?: string;
};

const team: Member[] = [
  {
    name: "Temitope Akinyemi",
    role: "MD / CEO",
    photo: teamTemitope,
    short: "Founder & CEO. Project finance veteran with $1B+ in greenfield deals.",
    bio: "Founder of Zebcha Infrastructure and Acting CEO of DDWCL, a multi-million dollar water utility. Former Portfolio Manager at the Nigerian Sovereign Investment Authority (2012–2015), with a background in commercial banking (FSB, GTB), infrastructure financing (HMS Host, USA), and mortgage-backed securities (GMRESCAP). Lead Investment & Project Adviser to DFID and the EIB since 2010, with over $1B in greenfield deals.",
    edu: "BSc Math (UNN) · MBA Finance & Strategy (Yale)",
  },
  {
    name: "Daniel Umoru",
    role: "Team Lead",
    photo: teamDaniel,
    short: "Team Lead — origination, structuring and execution.",
    bio: "Daniel is a Chemical Engineering graduate from Covenant University with an interest in health, environment, and sustainable systems. He contributes to project research and implementation with a problem-solving mindset, helping translate complex technical challenges into deliverable, bankable infrastructure outcomes.",
    edu: "BEng Chemical Engineering · Covenant University",
  },
  {
    name: "Gideon Dikedi",
    role: "Team Lead",
    photo: teamGideon,
    short: "Team Lead — engineering solutions for real-world infrastructure.",
    bio: "Gideon studied Civil Engineering at Covenant University and is committed to using engineering solutions to address real-world challenges. He actively supports outreach programs and the technical aspects of Zebcha's pipeline, bridging field execution with the firm's wider development mandate.",
    edu: "BEng Civil Engineering · Covenant University",
  },
  {
    name: "Favour Unokiwedi",
    role: "Assistant Team Lead (Admin)",
    photo: teamFavour,
    short: "Coordinates team operations and outreach delivery.",
    bio: "Favour is a Building Technology graduate from Covenant University with a strong focus on project coordination and sustainable development. He supports overall team operations and ensures outreach initiatives are well-structured, on schedule, and effectively delivered across the Zebcha portfolio.",
    edu: "BSc Building Technology · Covenant University",
  },
  {
    name: "Smart Michael",
    role: "Assistant Team Lead",
    photo: teamSmart,
    short: "Strategy, planning and impact-aligned decision-making.",
    bio: "Smart studied Economics at Arthur Jarvis University and brings a strategic, analytical perspective to the team. He contributes to planning and decision-making, helping align Zebcha's projects with measurable, impact-driven goals across infrastructure and community development.",
    edu: "BSc Economics · Arthur Jarvis University",
  },
  {
    name: "Praise Ossy Nwoye",
    role: "Assistant Team Lead",
    short: "Coordinates field activities and project execution.",
    bio: "Praise is a Civil Engineering graduate from Covenant University with a passion for infrastructure and community development. He plays a key role in coordinating field activities and supporting project execution, ensuring engineering rigour is maintained across Zebcha's on-the-ground programmes.",
    edu: "BEng Civil Engineering · Covenant University",
  },
  {
    name: "Success Ezea",
    role: "Team Member",
    short: "Project planning and resource management.",
    bio: "Success studied Accounting at the University of Nigeria, Nsukka, and brings strong organisational and financial management skills to the team. She supports project planning and ensures resources are effectively managed across the firm's advisory engagements and outreach initiatives.",
    edu: "BSc Accounting · University of Nigeria, Nsukka",
  },
  {
    name: "Christiana Olatunji",
    role: "Team Member",
    photo: teamChristiana,
    short: "Sustainable infrastructure and community impact.",
    bio: "Christiana is a Building Technology graduate from Covenant University with an interest in sustainable infrastructure and community impact. She contributes to project planning and supports the execution of outreach initiatives, helping translate Zebcha's mandate into tangible community outcomes.",
    edu: "BSc Building Technology · Covenant University",
  },
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
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group flex flex-col text-left outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4 focus-visible:ring-offset-background"
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
