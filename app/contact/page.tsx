import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact | Data Driven Education', description: 'Contact our ABA team in Riverside and Desert Hot Springs for next steps.' };

export default function ContactPage() {
  return (
    <section className="container-width section-space">
      <h1 className="font-heading text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate">We are here to answer questions and help your family get started with the right support.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="font-heading text-2xl font-semibold">Office Information</h2>
          <p className="mt-3 text-slate">Riverside &amp; Desert Hot Springs</p>
          <p className="text-slate">Mon–Fri: 8:00 AM - 6:00 PM</p>
          <p className="mt-3"><a href="tel:+19510000000" className="focus-ring font-semibold text-primary">(951) XXX-XXXX</a></p>
          <p><a href="mailto:hello@datadrivenedu.com" className="focus-ring font-semibold text-primary">hello@datadrivenedu.com</a></p>
        </div>
        <div className="card">
          <h2 className="font-heading text-2xl font-semibold">Map Placeholders</h2>
          <div className="mt-3 space-y-3 text-center text-slate">
            <div className="rounded-xl bg-light p-8">Riverside map embed coming soon</div>
            <div className="rounded-xl bg-light p-8">Desert Hot Springs map embed coming soon</div>
          </div>
        </div>
      </div>
      <div className="mt-8 card text-center">
        <h2 className="font-heading text-2xl font-semibold">Simple Next Step</h2>
        <p className="mt-3 text-slate">Call or email us directly. We respond within 1 business day.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@datadrivenedu.com" className="focus-ring rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-slate">Email Us</a>
          <a href="tel:+19510000000" className="focus-ring rounded-xl border border-slate px-6 py-3 font-semibold text-slate hover:bg-light">Call Us</a>
        </div>
      </div>
    </section>
  );
}
