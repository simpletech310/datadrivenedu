import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 bg-dark text-white">
      <div className="container-width grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-heading text-xl font-semibold">Data Driven Education</h2>
          <p className="mt-3 text-sm text-light">Compassionate, outcomes-focused ABA therapy for families in Riverside and Desert Hot Springs.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-light">
            <li><Link href="/services" className="focus-ring hover:text-white">Services</Link></li>
            <li><Link href="/how-it-works" className="focus-ring hover:text-white">How It Works</Link></li>
            <li><Link href="/resources" className="focus-ring hover:text-white">Resources</Link></li>
            <li><Link href="/careers" className="focus-ring hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-light">
            <li>Riverside &amp; Desert Hot Springs</li>
            <li><a href="tel:+19510000000" className="focus-ring hover:text-white">(951) XXX-XXXX</a></li>
            <li><a href="mailto:hello@datadrivenedu.com" className="focus-ring hover:text-white">hello@datadrivenedu.com</a></li>
            <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate/50 py-4 text-center text-xs text-light">© {new Date().getFullYear()} Data Driven Education. All rights reserved.</div>
    </footer>
  );
}
