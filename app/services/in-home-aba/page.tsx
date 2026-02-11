import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/ServiceDetailPage';

export const metadata: Metadata = { title: 'In-Home ABA Therapy | Data Driven Education', description: 'Personalized in-home ABA therapy with family coaching and measurable outcomes.' };

export default function Page() {
  return <ServiceDetailPage title="In-Home ABA Therapy" intro="We bring evidence-based ABA into your home routines, helping your child practice skills where they matter most." includes={["1:1 therapy sessions in your home", "Caregiver coaching and strategy practice", "Behavior support plans for daily routines", "Regular BCBA supervision and updates"]} whoFor="Families who want support in familiar environments and need practical strategies for everyday challenges like mealtime, transitions, and communication." steps={["Intake and goals conversation with your family.", "Assessment and individualized treatment planning.", "Consistent home sessions with data review and adjustments."]} />;
}
