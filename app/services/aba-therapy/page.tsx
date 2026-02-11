import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/ServiceDetailPage';

export const metadata: Metadata = { title: 'ABA Therapy Programs | Data Driven Education', description: 'Center and school-based ABA therapy with clear communication and trackable progress.' };

export default function Page() {
  return <ServiceDetailPage title="ABA Therapy (Center/School)" intro="Structured programs focused on communication, social development, adaptive behavior, and independence across settings." includes={["Personalized skill-acquisition programs", "Behavior reduction and replacement goals", "Social and play-based interventions", "Coordination between therapists and supervisors"]} whoFor="Children who benefit from structured teaching environments and families seeking coordinated support between home, school, and clinical teams." steps={["Schedule an assessment and review current concerns.", "Create a treatment roadmap with measurable targets.", "Begin sessions and monitor progress in weekly data reviews."]} />;
}
