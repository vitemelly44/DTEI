import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Eyebrow } from "@/components/section";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DTEI" },
      { name: "description", content: "Get in touch with the DTEI team — phone, email, and office address." },
      { property: "og:title", content: "Contact DTEI" },
      { property: "og:description", content: "Phone, email, office address, and contact form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState('');

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  emailjs.sendForm(
    'service_njq6hhp',
    'template_pofikxs',
    e.currentTarget,
    '-4M99Ugx2AnYye_ZS'
  ).then(() => {
    setStatus('success');
    (e.target as HTMLFormElement).reset();
  }).catch(() => {
    setStatus('error');
  });
}
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build digital inclusion together." intro="Drop us a message — partnerships, media, volunteering, or just to say hello." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <ContactRow icon={Phone} title="Phone" value="+254726721421" />
              <ContactRow icon={Mail} title="Email" value="info@dtei.org" />
              <ContactRow icon={MapPin} title="Office" value="Westlands, Nairobi, Kenya" />
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="DTEI office location"
                src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <form className="space-y-5 lg:col-span-3" onSubmit={handleSubmit}>
            <Eyebrow>Send a message</Eyebrow>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" type="text" name="from_name" />
<Field label="Email" type="email" name="from_email" />
<Field label="Subject" type="text" name="subject" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea  rows={6} name="message" required className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:border-ring focus:outline-none" />
            </div>
            <button type="submit" className="rounded-md bg-foreground px-8 py-3 text-sm font-semibold text-background">Send message</button>
            {status === 'success' && (
  <p className="text-green-500 font-medium">
    Message sent successfully! We'll get back to you soon.
  </p>
)}
{status === 'error' && (
  <p className="text-red-500 font-medium">
    Failed to send message. Please try again.
  </p>
)}
</div>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} name={name} required className="mt-1.5 w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:border-ring focus:outline-none" />
    </div>
  );
}

function ContactRow({ icon: Icon, title, value }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-gradient-hero text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}