import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import { GraduationCap, Smartphone, Building2, TrendingUp, Megaphone, CheckCircle2 } from "lucide-react";
import programsImg from "@/assets/programs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Projects — DTEI" },
      { name: "description", content: "Digital skills training, smartphone access, community hubs, entrepreneurship, and policy advocacy." },
      { property: "og:title", content: "DTEI Programs & Projects" },
      { property: "og:description", content: "Training, devices, hubs, entrepreneurship, and advocacy programs." },
      { property: "og:image", content: "/og-programs.jpg" },
    ],
  }),
  component: Programs,
});

const programs = [
  { icon: GraduationCap, title: "Digital Skills Training", items: ["Basic digital literacy", "Advanced digital skills", "Digital hygiene & safety"] },
  { icon: Smartphone, title: "Smartphone Access Initiative", items: ["Device collection drives", "Refurbishment & testing", "Targeted distribution"] },
  { icon: Building2, title: "Community Digital Hubs", items: ["Free access centres", "Training facilities", "Community-led management"] },
  { icon: TrendingUp, title: "Entrepreneurship & Finance", items: ["Business mentorship", "Digital finance education", "Startup grants & support"] },
  { icon: Megaphone, title: "Policy & Advocacy", items: ["Digital inclusion campaigns", "Stakeholder engagement", "Research & evidence"] },
];

function Programs() {
  return (
    <>
      <PageHeader eyebrow="Programs & projects" title="Five connected programs that move people from access to opportunity." intro="Each program reinforces the others — devices unlock training, training unlocks income, and income sustains communities." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((p, i) => (
            <article key={p.title} className={`relative overflow-hidden rounded-2xl border border-border bg-card p-8 ${i === 0 ? "lg:col-span-2" : ""}`}>
              {i === 0 && (
                <img src={programsImg} alt="" loading="lazy" width={1280} height={896} className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-90 lg:block" />
              )}
              <div className={i === 0 ? "lg:max-w-md" : ""}>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{p.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}