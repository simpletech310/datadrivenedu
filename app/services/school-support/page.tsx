import type { Metadata } from 'next';
import { ServiceDetailPage } from '@/components/ServiceDetailPage';

export const metadata: Metadata = { title: 'School Support and Collaboration | Data Driven Education', description: 'ABA collaboration with teachers and school teams to improve consistency and classroom outcomes.' };

export default function Page() {
  return <ServiceDetailPage title="School Support & Collaboration" intro="We partner with teachers and school teams to align interventions, behavior plans, and communication goals across your child’s day." includes={["Classroom observations and strategy recommendations", "IEP collaboration support", "Teacher and staff consultation", "Data-informed school-home coordination"]} whoFor="Families needing stronger alignment between therapy and school expectations, especially when behavior or communication challenges show up in class." steps={["Gather school and home concerns from caregivers.", "Develop collaborative recommendations with staff.", "Track implementation and update supports with your team."]} />;
}
