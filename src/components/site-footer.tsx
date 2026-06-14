import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const publicBase = import.meta.env.BASE_URL;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={`${publicBase}logo.jpg`} alt="DTEI logo" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display text-base font-bold">DTEI</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Digital Techwise Empowerment Initiative — bridging the digital divide for youth and women across Kenya and beyond.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
            <li><Link to="/impact" className="hover:text-accent">Impact</Link></li>
            <li><Link to="/news" className="hover:text-accent">News & Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Get Involved</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/get-involved" className="hover:text-accent">Donate</Link></li>
            <li><Link to="/get-involved" className="hover:text-accent">Volunteer</Link></li>
            <li><Link to="/get-involved" className="hover:text-accent">Partner With Us</Link></li>
            <li><Link to="/get-involved" className="hover:text-accent">Sponsor a Beneficiary</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">Get updates on our work and impact.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/50" />
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 py-2.5 pl-9 pr-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
              />
            </div>
            <button type="submit" className="rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center lg:px-8">
          <p>© {new Date().getFullYear()} Digital Techwise Empowerment Initiative. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}