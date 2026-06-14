import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Shield, Smartphone, Sparkles, Users, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import programsImg from "@/assets/programs.jpg";
import devicesImg from "@/assets/devices.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import { Section, Eyebrow } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DTEI — Empowering Youth and Women Through Digital Inclusion" },
      { name: "description", content: "DTEI bridges the digital divide through training, device access, and community hubs for underserved youth and women." },
      { property: "og:title", content: "DTEI — Empowering Youth and Women Through Digital Inclusion" },
      { property: "og:description", content: "Bridging the digital divide through training, device access, and community hubs." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "1,000+", label: "Beneficiaries trained" },
  { value: "2,500", label: "Smartphones targeted" },
  { value: "12", label: "Community hubs planned" },
  { value: "8", label: "Counties reached" },
];

const programs = [
  { icon: GraduationCap, title: "Digital Literacy Training", desc: "Foundational and advanced digital skills for everyday life, study, and work." },
  { icon: Shield, title: "Digital Hygiene Awareness", desc: "Online safety, privacy, and responsible use of digital tools and platforms." },
  { icon: Smartphone, title: "Device Access Program", desc: "Refurbished smartphones distributed to youth and women who need them most." },
  { icon: Sparkles, title: "Entrepreneurship Mentorship", desc: "Business mentorship and digital finance education to launch local enterprises." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
          <div className="lg:col-span-7">
            <Eyebrow>Digital Inclusion Initiative</Eyebrow>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl lg:text-[64px]">
              Empowering youth and women through{" "}
              <span className="bg-gradient-to-r from-[oklch(0.45_0.1_185)] to-[oklch(0.78_0.16_70)] bg-clip-text text-transparent">digital inclusion</span>.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We close the digital divide with skills training, refurbished devices, and community hubs — so every young person and woman can build a digital future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-elegant transition-transform hover:-translate-y-0.5">
                Donate <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                Partner with us
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                Join our programs
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-hero opacity-30 blur-2xl" />
              <img
                src={heroImg}
                alt="Young woman and mentor exploring a smartphone together"
                width={1536}
                height={1024}
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-soft sm:block">
                <p className="font-display text-2xl font-bold text-foreground">+1,000</p>
                <p className="text-xs text-muted-foreground">lives changed this year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4 lg:px-0">
          {stats.map((s) => (
            <div key={s.label} className="bg-primary p-8 lg:p-10">
              <p className="font-display text-4xl font-bold text-accent lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured programs */}
      <Section>
        <div className="grid items-end gap-6 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Featured programs designed for real-world impact.</h2>
          </div>
          <Link to="/programs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary">
            All programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <article key={p.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Story block */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <img src={programsImg} alt="Youth learning together at a community digital hub" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
          <div>
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">A laptop, a skill, a stream of income — that's how digital divides close.</h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Across underserved communities, lack of access to devices, connectivity, and skills cuts millions off from opportunity. DTEI delivers the three together — putting tools in hands, knowledge in minds, and confidence in voices.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Inclusion", "Innovation", "Integrity", "Sustainability"].map((v) => (
                <div key={v} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <Section>
        <Eyebrow>Latest news</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Stories from the ground.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { img: devicesImg, tag: "Devices", title: "500 refurbished smartphones distributed in Kisumu", date: "May 2026" },
            { img: entrepreneurImg, tag: "Mentorship", title: "How Amina built her tailoring business on M-Pesa", date: "April 2026" },
            { img: programsImg, tag: "Training", title: "New community digital hub opens in Machakos", date: "March 2026" },
          ].map((n) => (
            <article key={n.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.img} alt={n.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-accent-foreground">{n.tag}</span>
                  <span>{n.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{n.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <Quote className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug md:text-3xl lg:text-4xl">
            "Before DTEI, I had never opened an email. Today I run my online shop, pay school fees, and teach my neighbours."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">Mary W. — Beneficiary, Nakuru County</p>
        </div>
      </section>

      {/* Partners */}
      <Section>
        <div className="text-center">
          <Eyebrow>Trusted partners</Eyebrow>
          <h2 className="mt-4 text-balance text-2xl font-semibold text-muted-foreground md:text-3xl">Working alongside governments, NGOs, and technology leaders.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {["Ministry of ICT", "Safaricom", "UNDP", "World Bank", "Microsoft", "Huawei"].map((p) => (
            <div key={p} className="flex h-24 items-center justify-center bg-card px-4 text-center font-display text-sm font-semibold text-muted-foreground">
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 rounded-2xl bg-foreground p-10 text-background shadow-elegant md:grid-cols-3 lg:p-14">
            <h2 className="text-balance font-display text-3xl font-bold leading-tight md:col-span-2 md:text-4xl">Be part of the next 1,000 stories of digital empowerment.</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">Donate now</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-background/20 px-5 py-3 text-sm font-semibold text-background hover:bg-background/10">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
