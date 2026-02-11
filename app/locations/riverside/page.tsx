import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = { title: 'ABA Therapy in Riverside | Data Driven Education', description: 'Riverside ABA services including in-home therapy, school support, and parent training.' };

export default function Page() {
  return (
    <>
      <section className="container-width section-space">
        <h1 className="font-heading text-4xl font-bold">ABA Services in Riverside</h1>
        <p className="mt-4 text-lg text-slate">We support Riverside families with compassionate, data-driven care built around your child’s goals and your daily life.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card"><h2 className="font-heading text-2xl font-semibold">Service Area Overview</h2><p className="mt-3 text-slate">Serving central Riverside and surrounding neighborhoods with in-home and community-based therapy options.</p></div>
          <div className="card"><h2 className="font-heading text-2xl font-semibold">Map Placeholder</h2><div className="mt-3 rounded-xl bg-light p-10 text-center text-slate">Embedded map coming soon</div></div>
        </div>
      </section>
      <section className="container-width pb-10"><div className="card"><h2 className="font-heading text-3xl font-bold">Local FAQ</h2><FAQ items={[{question:'What parts of Riverside do you serve?',answer:'We support families across Riverside and nearby areas based on therapist availability.'},{question:'Do you coordinate with Riverside schools?',answer:'Yes, we partner with school teams to keep behavior and communication goals aligned.'}]} /></div></section>
      <CTA title="Need Riverside ABA Support?" description="Call or email us and we’ll help you understand next steps right away." />
    </>
  );
}
