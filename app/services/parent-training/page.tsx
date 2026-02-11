import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/ServiceDetailPage';

export const metadata: Metadata = { title: 'Parent Training | Data Driven Education', description: 'Caregiver ABA training that builds confidence, consistency, and child progress at home.' };

export default function Page() {
  return <ServiceDetailPage title="Parent Training" intro="Caregiver involvement is one of the strongest predictors of progress. Our coaching is practical, respectful, and personalized." includes={["Weekly caregiver coaching sessions", "Behavior and communication strategy modeling", "Routine planning for home and community", "Progress check-ins with clear next steps"]} whoFor="Parents and caregivers who want confident, realistic ways to support behavior, communication, and independence outside formal sessions." steps={["Set priorities based on daily stress points.", "Practice strategies with live coaching and feedback.", "Review outcomes and refine plans over time."]} />;
}
