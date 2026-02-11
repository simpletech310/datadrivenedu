import type { Metadata } from 'next';
import { ServiceCard } from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'ABA Services | Data Driven Education',
  description: 'Explore in-home, center/school ABA, school collaboration, and parent training services in Riverside and Desert Hot Springs.'
};

export default function ServicesPage() {
  return (
    <section className="container-width section-space">
      <h1 className="font-heading text-4xl font-bold">Services Designed Around Real Family Life</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate">Every service is tailored to your child’s goals, your schedule, and your daily routines. Our focus: meaningful progress that families can see and use.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ServiceCard title="In-Home ABA Therapy" href="/services/in-home-aba" imageUrl="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80" description="Therapy in your child’s natural environment with caregiver coaching." />
        <ServiceCard title="ABA Therapy" href="/services/aba-therapy" imageUrl="https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=900&q=80" description="Structured skill-building in center and school settings." />
        <ServiceCard title="School Support & Collaboration" href="/services/school-support" imageUrl="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=900&q=80" description="Coordination with teachers and teams for consistency across settings." />
        <ServiceCard title="Parent Training" href="/services/parent-training" imageUrl="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=900&q=80" description="Hands-on caregiver coaching that helps skills stick beyond sessions." />
      </div>
    </section>
  );
}
