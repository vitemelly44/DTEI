import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import { HandHeart, Handshake, Smartphone, Building2, CreditCard, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Donate, Volunteer, Partner with DTEI" },
      { name: "description", content: "Donate, volunteer, partner with us, or sponsor a beneficiary to power digital inclusion." },
      { property: "og:title", content: "Get Involved with DTEI" },
      { property: "og:description", content: "Donate, volunteer, partner, or sponsor a beneficiary." },
    ],
  }),
  component: GetInvolved,
});

const donate = [
  { icon: Smartphone, title: "Mobile Money", desc: "M-Pesa Paybill: 123456 · Account: DTEI" },
  { icon: CreditCard, title: "Bank Transfer", desc: "Equity Bank · Acct 0123456789 · DTEI Kenya" },
  { icon: Globe, title: "International", desc: "SWIFT / Wise / PayPal — contact us for details" },
];

function GetInvolved() {
  const [tab, setTab] = useState<"volunteer" | "partner">("volunteer");
  return (
    <>
      <PageHeader eyebrow="Get involved" title="Help us put skills, devices, and opportunity in more hands." intro="Whether you give time, money, or partnership — every contribution moves someone closer to a digital future." />

      <Section>
        <Eyebrow>Ways to give</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-4xl">Donate in the way that works for you.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {donate.map((d) => (
            <article key={d.title} className="rounded-xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-foreground p-8 text-background lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-display text-2xl font-bold">Sponsor a beneficiary</p>
              <p className="mt-1 text-sm text-background/70">$25 funds a smartphone · $75 funds a full training cycle · $250 sponsors a cohort.</p>
            </div>
            <button className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">Choose amount</button>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-secondary">
        <Section>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setTab("volunteer")} className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${tab === "volunteer" ? "border-foreground bg-foreground text-background" : "border-border bg-card text-foreground"}`}>
              <HandHeart className="h-4 w-4" /> Volunteer
            </button>
            <button onClick={() => setTab("partner")} className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${tab === "partner" ? "border-foreground bg-foreground text-background" : "border-border bg-card text-foreground"}`}>
              <Handshake className="h-4 w-4" /> Partner with us
            </button>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">{tab === "volunteer" ? "Volunteer registration" : "Partnership inquiry"}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {tab === "volunteer"
                  ? "Trainers, mentors, technicians, and storytellers — we need you."
                  : "Corporates, NGOs, and government agencies — let's design something together."}
              </p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full name" type="text" />
              <Field label="Email" type="email" />
              {tab === "partner" && <Field label="Organisation" type="text" />}
              {tab === "volunteer" && <Field label="Skills / area of interest" type="text" />}
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:border-ring focus:outline-none" />
              </div>
              <button type="submit" className="w-full rounded-md bg-foreground py-3 text-sm font-semibold text-background sm:w-auto sm:px-8">Submit</button>
            </form>
          </div>
        </Section>
      </section>
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} required className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:border-ring focus:outline-none" />
    </div>
  );
}