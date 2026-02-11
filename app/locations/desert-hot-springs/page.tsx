import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = { title: 'ABA Therapy in Desert Hot Springs | Data Driven Education', description: 'Desert Hot Springs ABA services for children and families needing measurable, compassionate support.' };

export default function Page() {
  return (
    <>
      <section className="container-width section-space">
        <h1 className="font-heading text-4xl font-bold">ABA Services in Desert Hot Springs</h1>
        <p className="mt-4 text-lg text-slate">Our team provides flexible care plans for Desert Hot Springs families, including in-home sessions and parent coaching.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card"><h2 className="font-heading text-2xl font-semibold">Service Highlights</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate"><li>In-home ABA options</li><li>Caregiver training and support</li><li>Data-based goal monitoring</li></ul></div>
          <div className="card"><h2 className="font-heading text-2xl font-semibold">Map Placeholder</h2><div className="mt-3 rounded-xl bg-light p-10 text-center text-slate">Embedded map coming soon</div></div>
        </div>
      </section>
      <section className="container-width pb-10"><div className="card"><h2 className="font-heading text-3xl font-bold">Local FAQ</h2><FAQ items={[{question:'How quickly can services begin?',answer:'Start times depend on insurance and schedule availability, and we guide families through each step quickly.'},{question:'Can sessions happen at home?',answer:'Yes, in-home options are available for many families in Desert Hot Springs.'}]} /></div></section>
      <CTA title="Looking for Care in Desert Hot Springs?" description="Reach out and we’ll help you build a practical, personalized ABA plan." />
    </>
  );
}
