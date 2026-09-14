import { ArrowRight, BriefcaseBusiness, Leaf, MonitorSmartphone, Users } from "lucide-react";
import { Eyebrow, Section } from "@/components/section";

const objectives = [
  {
    icon: Leaf,
    title: "Digitalization Sustainability",
    description:
      "Promoting efficiency and sustainable digitalization and digitization through Green Energy initiatives. This spans Sustainability of Technologyr educing the environmental footprint of digital infrastructure and Sustainability by Technology using digital tools to drive broader sustainability and efficiency outcomes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Skills & Access",
    description:
      "Equipping underserved youth and women with foundational and advanced digital literacy, safe device use, and access to the tools needed to participate fully in the digital economy.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Livelihood Creation",
    description:
      "Turning digital confidence into income by supporting entrepreneurship, digital finance, and work-ready skills that help communities build resilient local livelihoods.",
  },
  {
    icon: Users,
    title: "Inclusive Community Growth",
    description:
      "Building community-centered digital hubs and partnerships that make opportunity more accessible, locally owned, and sustainable over time.",
  },
];

export function ObjectivesSection() {
  return (
    <section className="border-y border-border bg-secondary">
      <Section>
        <Eyebrow>Our Objectives</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking tight md:text-4xl">
          The outcomes we work toward so digital opportunity reaches every community.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {objectives.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-border bg card p-6 shadow soft transition transform hover: translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Goal <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}
