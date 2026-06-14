import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import { FileText, Download } from "lucide-react";
import devicesImg from "@/assets/devices.jpg";
import programsImg from "@/assets/programs.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";

const publicBase = import.meta.env.BASE_URL;

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Resources — DTEI" },
      { name: "description", content: "Articles, reports, publications, and resources from the DTEI team." },
      { property: "og:title", content: "DTEI News & Resources" },
      { property: "og:description", content: "Articles, reports, and resources from DTEI." },
    ],
  }),
  component: News,
});

const posts = [
  { img: devicesImg, tag: "Devices", title: "500 refurbished smartphones distributed in Kisumu", date: "May 2026" },
  { img: entrepreneurImg, tag: "Mentorship", title: "How Amina built her tailoring business on M-Pesa", date: "April 2026" },
  { img: programsImg, tag: "Training", title: "New community digital hub opens in Machakos", date: "March 2026" },
  { img: devicesImg, tag: "Awareness", title: "Five digital hygiene habits every new user should adopt", date: "Feb 2026" },
  { img: programsImg, tag: "Policy", title: "Joining the national conversation on digital inclusion", date: "Jan 2026" },
  { img: entrepreneurImg, tag: "Stories", title: "From learner to trainer: Brian's journey", date: "Dec 2025" },
];

const downloads = [
  { title: "DTEI Concept Paper (Draft)", type: "PDF · Draft", href: `${publicBase}DTEI-CONCEPT_PAPER-Draft.pdf` },
  { title: "DTEI Annual Report 2025", type: "PDF · 4.2 MB" },
  { title: "Strategic Plan 2025–2028", type: "PDF · 2.1 MB" },
  { title: "Program Guide for Community Hubs", type: "PDF · 1.6 MB" },
  { title: "Impact Assessment — Cohort 4", type: "PDF · 3.8 MB" },
];

function News() {
  return (
    <>
      <PageHeader eyebrow="News & resources" title="Read, watch, and download our latest work." intro="From field stories to research reports, everything we publish is here." />
      <Section>
        <Eyebrow>Blog</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Latest articles.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft">
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={800} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-accent-foreground">{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <section className="border-t border-border bg-secondary">
        <Section>
          <Eyebrow>Downloads</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Reports, publications, and program guides.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {downloads.map((d) => (
              <a
                key={d.title}
                href={d.href ?? "#"}
                download={d.href ? true : false}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold">{d.title}</p>
                    <p className="text-xs text-muted-foreground">{d.type}</p>
                  </div>
                </div>
                <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </a>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background">Request a publication</Link>
          </div>
        </Section>
      </section>
    </>
  );
}