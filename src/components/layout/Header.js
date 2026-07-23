"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarCheck, ChevronDown, Menu, Phone, X } from "lucide-react";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-doctor", children: [
    { label: "About the Doctor", href: "/about-doctor" },
    { label: "About the Clinic", href: "/about-clinic" }
  ] },
  { label: "Treatments", href: "/treatments", children: treatments.slice(0, 8).map((item) => ({
    label: item.title,
    href: `/treatments/${item.slug}`
  })) },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerClass = scrolled || pathname !== "/"
    ? "bg-white/90 shadow-clinical backdrop-blur-xl"
    : "bg-white/20 backdrop-blur-md";

  return (
    <header className={`sticky top-0 z-40 border-b border-white/50 transition-all duration-300 ${headerClass}`}>
      <div className="container-wide flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${clinic.name} home`}>
          <span className="relative grid h-11 w-11 overflow-hidden rounded-[8px] bg-white shadow-glow ring-1 ring-silver">
            <Image
              src="/images/instagram-profile.jpg"
              alt={`${clinic.name} Instagram profile logo`}
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-extrabold text-ink">{clinic.name}</span>
            <span className="block text-xs font-bold text-teal">{clinic.doctor}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-sm font-extrabold transition ${
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "bg-ice text-deep"
                    : "text-slate hover:bg-white/70 hover:text-deep"
                }`}
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-72 translate-y-2 rounded-[8px] border border-silver bg-white p-3 opacity-0 shadow-clinical transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        className="rounded-[8px] px-3 py-2 text-sm font-bold text-slate hover:bg-ice hover:text-deep"
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link className="button-secondary px-4" href={clinic.contact.primaryPhone.href}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </Link>
          <Link className="button-primary px-4" href="/book-appointment">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-silver bg-white/80 text-deep lg:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[74px] z-50 border-t border-silver bg-white/95 p-4 shadow-clinical backdrop-blur-xl transition lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="grid gap-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[8px] border border-silver bg-pearl px-4 py-3 font-extrabold text-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link className="button-primary mt-2 w-full" href="/book-appointment">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}
