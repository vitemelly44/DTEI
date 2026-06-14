import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import { Cpu, Heart, Layers, Lightbulb, Link2, ShieldCheck, Sparkles, Sprout, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DTEI — Who We Are" },
      { name: "description", content: "Learn about DTEI's vision, mission, values, and the team behind our work to bridge the digital divide." },
      { property: "og:title", content: "About DTEI" },
      { property: "og:description", content: "Vision, mission, values, and team behind DTEI." },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We operate honestly and fairly in every partnership and program." },
  { icon: Heart, title: "Passion", desc: "We bring energy and care to every learning experience and community project." },
  { icon: Sparkles, title: "Dedication", desc: "We stay committed to impact, even when the challenges are hardest." },
  { icon: Sprout, title: "Teamwork", desc: "We collaborate closely with communities, learners, and partners to achieve shared goals." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously test new solutions that expand access and opportunity." },
  { icon: ShieldCheck, title: "Accountability", desc: "We measure progress, learn from results, and answer openly for our outcomes." },
];

const anchors = [
  { icon: Cpu, title: "Tech centric", desc: "We put digital tools and platforms at the heart of program design." },
  { icon: Target, title: "Impact focused", desc: "We prioritize measurable outcomes that improve lives and livelihoods." },
  { icon: Layers, title: "Sustainability", desc: "We build solutions that endure through local ownership and systems change." },
  { icon: Layers, title: "Systems perspective", desc: "We connect technology, policy, and community to solve complex problems." },
  { icon: Link2, title: "Partnership oriented", desc: "We work with stakeholders across sectors to amplify reach and resilience." },
];

const team = [
  { name: "Dr. Wanjiru Kamau", role: "Executive Director", initials: "WK" },
  { name: "Samuel Otieno", role: "Programs Lead", initials: "SO" },
  { name: "Fatuma Ali", role: "Partnerships Director", initials: "FA" },
  { name: "Brian Mwangi", role: "Head of Operations", initials: "BM" },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About DTEI" title="A grassroots movement for a digitally inclusive future." intro="DTEI was founded to ensure that no young person or woman is left behind in the digital economy. We design and deliver programs that put skills, devices, and opportunity within reach." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Digitally inclusive communities where opportunity is universal.</h2>
          </div>
          <div>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Empowering underserved youth and women through digital access, skills, and opportunity.</h2>
          </div>
        </div>
      </Section>
      <section className="border-y border-border bg-secondary">
        <Section>
          <Eyebrow>Core values</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">The principles that shape every program we run.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <v.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-display text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
      <section className="border-y border-border bg-background">
        <Section>
          <Eyebrow>Strategic anchors</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">The focus areas that guide our strategy and partnerships.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {anchors.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-6">
                <a.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
      <Section>
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">The people building DTEI.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <article key={t.name} className="rounded-xl border border-border bg-card p-6">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-hero font-display text-xl font-bold text-primary-foreground">{t.initials}</div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}