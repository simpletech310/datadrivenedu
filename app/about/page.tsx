import type { Metadata } from 'next';
import { TeamMember } from '@/components/TeamMember';
import { CTA } from '@/components/CTA';
import { teamMembers } from '@/lib/content';

export const metadata: Metadata = { title: 'About Data Driven Education', description: 'Learn about our mission, clinical approach, and leadership team serving Riverside and Desert Hot Springs.' };

export default function AboutPage() {
  return (
    <>
      <section className="container-width section-space">
        <h1 className="font-heading text-4xl font-bold">Our Mission</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate">We help children build meaningful life skills through compassionate ABA care, measurable outcomes, and close family collaboration.</p>
        <div className="mt-8 card">
          <h2 className="font-heading text-2xl font-semibold">Our Clinical Approach</h2>
          <p className="mt-3 text-slate">We combine evidence-based behavior analysis with warmth and dignity. We set clear goals, monitor progress consistently, and adjust quickly so treatment remains relevant to your child’s real life.</p>
        </div>
      </section>
      <section className="container-width pb-10">
        <h2 className="font-heading text-3xl font-bold">Leadership Team</h2>
        <p className="mt-2 text-slate">Team entries below are placeholders and should be replaced with exact current roster details from the live About page if they differ.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => <TeamMember key={member.name} {...member} />)}
        </div>
      </section>
      <CTA title="Questions About Our Team?" description="Call or email us any time. We are here to support your family with clarity and care." />
    </>
  );
}
