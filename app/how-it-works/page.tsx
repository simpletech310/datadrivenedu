import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = { title: 'How ABA Works at DDE | Data Driven Education', description: 'Understand the step-by-step ABA process from first call through ongoing progress reviews.' };

export default function HowItWorksPage() {
  return (
    <>
      <section className="container-width section-space">
        <h1 className="font-heading text-4xl font-bold">A Clear Process Families Can Trust</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate">From first call to progress reviews, we keep every step transparent so you always know what’s happening and why.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ['1. Contact', 'Tell us what you are seeing at home and what support you need now.'],
            ['2. Assessment', 'A BCBA evaluates strengths, challenges, and priority outcomes.'],
            ['3. Treatment', 'Sessions start with clear goals, consistent routines, and coaching.'],
            ['4. Progress', 'Data reviews guide updates so therapy stays useful and effective.']
          ].map(([title, text]) => (
            <div key={String(title)} className="card"><h2 className="font-heading text-2xl font-semibold">{title}</h2><p className="mt-3 text-slate">{text}</p></div>
          ))}
        </div>
      </section>
      <section className="container-width pb-10">
        <div className="card">
          <h2 className="font-heading text-3xl font-bold">Timeline Expectations</h2>
          <p className="mt-4 text-slate">Most families complete intake and assessment in 2–4 weeks, depending on insurance approvals and scheduling. Therapy can begin shortly after treatment authorization.</p>
          <h3 className="mt-6 font-heading text-2xl font-semibold">What to Expect in the First Month</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate">
            <li>Initial rapport-building and routine mapping.</li>
            <li>Baseline data collection and early skill targets.</li>
            <li>Caregiver coaching on strategies you can use immediately.</li>
            <li>A first progress conversation with practical takeaways.</li>
          </ul>
        </div>
      </section>
      <CTA title="Ready to Begin?" description="Reach out today and we will walk you through every next step with clarity." />
    </>
  );
}
