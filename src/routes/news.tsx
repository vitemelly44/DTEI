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
        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
          No posts yet.
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