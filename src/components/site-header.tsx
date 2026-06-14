import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

const publicBase = import.meta.env.BASE_URL;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={`${publicBase}logo.jpg`} alt="DTEI logo" className="h-9 w-9 rounded-md object-cover" />
          <span className="font-display text-base font-bold tracking-tight">DTEI</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/get-involved"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Donate
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}