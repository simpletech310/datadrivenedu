import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Locations', href: '/locations' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="bg-dark py-2 text-sm text-white">
        <div className="container-width flex flex-wrap items-center justify-center gap-3 text-center md:justify-between">
          <p>Serving Riverside &amp; Desert Hot Springs</p>
          <div className="flex items-center gap-4">
            <a href="tel:+19510000000" className="focus-ring inline-flex items-center gap-1 hover:text-light">
              <Phone size={16} /> Call: (951) XXX-XXXX
            </a>
            <a href="mailto:hello@datadrivenedu.com" className="focus-ring inline-flex items-center gap-1 hover:text-light">
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-light/70">
        <div className="container-width flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="focus-ring text-xl font-heading font-bold text-dark" aria-label="Data Driven Education home">
            DataDrivenEdu
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring hover:text-dark">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@datadrivenedu.com"
                  className="focus-ring rounded-xl bg-primary px-4 py-2 font-semibold text-white hover:bg-slate"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
