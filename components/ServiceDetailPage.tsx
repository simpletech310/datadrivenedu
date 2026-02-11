import { FAQ } from './FAQ';
import { CTA } from './CTA';
import { sharedFaqs } from '@/lib/content';

export function ServiceDetailPage({
  title,
  intro,
  includes,
  whoFor,
  steps
}: {
  title: string;
  intro: string;
  includes: string[];
  whoFor: string;
  steps: string[];
}) {
  return (
    <>
      <section className="container-width section-space">
        <h1 className="font-heading text-4xl font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate">{intro}</p>
        <div className="mt-6"><a href="mailto:hello@datadrivenedu.com" className="focus-ring rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-slate">Get Started</a></div>
      </section>
      <section className="container-width grid gap-8 md:grid-cols-2">
        <article className="card">
          <h2 className="font-heading text-2xl font-semibold">What It Includes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate">{includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="card">
          <h2 className="font-heading text-2xl font-semibold">Who It’s For</h2>
          <p className="mt-4 text-slate">{whoFor}</p>
        </article>
      </section>
      <section className="container-width section-space">
        <h2 className="font-heading text-3xl font-bold">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{steps.map((step, i) => <div key={step} className="card"><p className="font-heading text-xl font-semibold">Step {i + 1}</p><p className="mt-2 text-slate">{step}</p></div>)}</div>
      </section>
      <section className="container-width section-space">
        <h2 className="mb-6 font-heading text-3xl font-bold">Frequently Asked Questions</h2>
        <FAQ items={sharedFaqs} />
      </section>
      <CTA title="Let’s Build a Plan Together" description="Talk with our team about your child’s goals, schedule, and insurance options." />
    </>
  );
}
