import type { Metadata } from 'next';
import Image from 'next/image';
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  HandHeart,
  HeartHandshake,
  Home,
  LineChart,
  MessagesSquare,
  Repeat,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Compassionate, Data-Driven ABA Therapy | Data Driven Education',
  description: 'Warm, evidence-based ABA therapy with clear progress tracking for Riverside and Desert Hot Springs families.'
};

const trustCards: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: 'BCBA-Supervised Care' },
  { icon: ClipboardCheck, title: 'Individualized Plans' },
  { icon: LineChart, title: 'Progress You Can See' },
  { icon: HandHeart, title: 'Caregiver Partnership' }
];

const processSteps: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Contact Us', description: 'Share your goals, concerns, and schedule needs.', icon: Users },
  { title: 'Assessment', description: 'A BCBA evaluates strengths and priority skills.', icon: BrainCircuit },
  { title: 'Therapy Begins', description: 'Consistent sessions begin with supportive coaching.', icon: Home },
  { title: 'Progress Reviews', description: 'We review data together and refine the plan.', icon: BarChart3 }
];

const values: { title: string; icon: LucideIcon }[] = [
  { title: 'Compassion & Dignity', icon: HeartHandshake },
  { title: 'Evidence-Based Methods', icon: ClipboardCheck },
  { title: 'Clear Communication', icon: MessagesSquare },
  { title: 'Collaborative Care', icon: Users },
  { title: 'Consistency', icon: Repeat },
  { title: 'Real-World Skills', icon: Sparkles }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Compassionate, Data-Driven ABA Therapy That Helps Skills Stick"
        subtitle="Evidence-based care with clear progress tracking. Serving Riverside and Desert Hot Springs families with warmth, expertise, and outcomes you can see."
        imageAlt="Therapist and child working together in a bright home setting"
      />

      <section className="container-width pb-10">
        <div className="grid gap-4 md:grid-cols-4">
          {trustCards.map((card) => (
            <div key={card.title} className="card flex items-center gap-3">
              <card.icon className="text-primary" />
              <p className="font-medium">{card.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-width section-space">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80"
            alt="Parent and therapist reviewing notes"
            width={1200}
            height={800}
            className="order-2 rounded-2xl shadow-soft md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl font-bold">Understanding Is Key</h2>
            <ul className="mt-6 space-y-4 text-slate">
              {[
                'Clear goals so you know exactly what your child is working on.',
                'Consistent routines that reduce stress and build confidence.',
                'Regular updates in plain language, not clinical jargon.',
                'Caregiver coaching that helps skills carry into daily life.'
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 text-success" size={20} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-light/30 section-space">
        <div className="container-width">
          <h2 className="text-center font-heading text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="card">
                <step.icon className="text-primary" />
                <h3 className="mt-3 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-slate">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="mailto:hello@datadrivenedu.com" className="focus-ring rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-slate">
              Start Today
            </a>
          </div>
        </div>
      </section>

      <section className="container-width section-space">
        <h2 className="font-heading text-3xl font-bold">Our Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="In-Home ABA Therapy"
            href="/services/in-home-aba"
            imageUrl="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
            description="Support where your child feels safest. We build communication, behavior, and daily living skills in your natural routines with practical parent coaching."
          />
          <ServiceCard
            title="ABA Therapy (Center/School)"
            href="/services/aba-therapy"
            imageUrl="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
            description="Structured sessions that strengthen focus, flexibility, and social skills. We align strategies across environments for stronger carryover."
          />
          <ServiceCard
            title="School Support & Collaboration"
            href="/services/school-support"
            imageUrl="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
            description="We collaborate with schools, teachers, and IEP teams to keep goals consistent and realistic so your child gets support that works all day."
          />
        </div>
      </section>

      <section className="container-width section-space">
        <div className="grid items-center gap-10 rounded-2xl bg-dark p-8 text-white md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold">Progress Tracking You Can Understand</h2>
            <p className="mt-4 text-light">
              Our team collects session data, defines mastery criteria, and adjusts plans based on what your child is showing us in real time.
              You receive plain-language updates that connect data to everyday wins.
            </p>
            <a href="/how-it-works" className="focus-ring mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-slate">
              Learn About Our Approach
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 text-dark">
            <svg viewBox="0 0 300 180" className="h-auto w-full" role="img" aria-label="Sample progress chart">
              <polyline fill="none" stroke="#62AEE0" strokeWidth="8" points="10,150 70,120 130,125 190,80 250,50 290,40" />
              <line x1="10" y1="150" x2="290" y2="150" stroke="#94999B" strokeWidth="2" />
              <line x1="10" y1="20" x2="10" y2="150" stroke="#94999B" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      <section className="container-width pb-10">
        <h2 className="text-center font-heading text-3xl font-bold">What Families Feel From Day One</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card flex items-center gap-3">
              <value.icon className="text-primary" />
              <p className="font-medium">{value.title}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Ready to Get Started?" description="We respond within 1 business day. Let’s talk about your child’s goals." />
    </>
  );
}
