import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import entrepreneurImg from "@/assets/entrepreneur.jpg";
import devicesImg from "@/assets/devices.jpg";
import programsImg from "@/assets/programs.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — DTEI" },
      { name: "description", content: "Beneficiaries reached, devices distributed, counties covered, and the stories behind the numbers." },
      { property: "og:title", content: "DTEI Impact Dashboard" },
      { property: "og:description", content: "Measurable change for youth and women across underserved communities." },
    ],
  }),
  component: Impact,
});

const metrics = [
  { value: "1,047", label: "Beneficiaries trained" },
  { value: "612", label: "Devices distributed" },
  { value: "8", label: "Counties covered" },
  { value: "92%", label: "Completion rate" },
];

const cases = [
  { img: entrepreneurImg, name: "Amina, 24", county: "Kisumu", story: "Launched a tailoring business using a refurbished smartphone and M-Pesa — now employs three other women." },
  { img: devicesImg, name: "Joseph, 19", county: "Machakos", story: "Completed our advanced digital skills track and works remotely as a junior data entry specialist." },
  { img: programsImg, name: "Nakuru Hub", county: "Nakuru", story: "Our hub trained 180 community members in one quarter — and is now community-led." },
];

function Impact() {
  return (
    <>
      <PageHeader eyebrow="Impact" title="Real change, measured and shared transparently." intro="We track every cohort, every device, and every story — and share what's working and what's not." />
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-primary p-8 lg:p-10">
              <p className="font-display text-4xl font-bold text-accent lg:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Section>
        <Eyebrow>Case studies</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Stories from the people we serve.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <img src={c.img} alt={c.name} loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">{c.county}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.story}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <section className="border-t border-border bg-secondary">
        <Section>
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Moments from our communities.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[programsImg, devicesImg, entrepreneurImg, programsImg, entrepreneurImg, devicesImg].map((src, i) => (
              <img key={i} src={src} alt="DTEI gallery" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-xl object-cover" />
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}