import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Service Locations | Data Driven Education', description: 'ABA therapy services in Riverside and Desert Hot Springs with local, family-centered support.' };

export default function LocationsPage() {
  return (
    <section className="container-width section-space">
      <h1 className="font-heading text-4xl font-bold">Local Care for Local Families</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate">Our team serves families in Riverside and Desert Hot Springs with in-home and collaborative ABA services.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Link href="/locations/riverside" className="card block hover:border-primary"><h2 className="font-heading text-2xl font-semibold">Riverside</h2><p className="mt-3 text-slate">Neighborhood-based support with flexible scheduling and caregiver coaching.</p></Link>
        <Link href="/locations/desert-hot-springs" className="card block hover:border-primary"><h2 className="font-heading text-2xl font-semibold">Desert Hot Springs</h2><p className="mt-3 text-slate">ABA therapy designed for family routines and school collaboration in your area.</p></Link>
      </div>
    </section>
  );
}
