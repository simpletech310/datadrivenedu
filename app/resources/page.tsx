import type { Metadata } from 'next';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = { title: 'Resources & FAQ | Data Driven Education', description: 'Find answers about ABA basics, insurance, progress tracking, and family support.' };

const categories = [
  {
    title: 'Getting Started',
    items: [
      { question: 'How do I know if ABA is right for my child?', answer: 'If communication, flexibility, or behavior challenges affect daily life, ABA can help with practical strategies and measurable goals.' },
      { question: 'What paperwork do I need?', answer: 'Typically insurance details, diagnostic reports, and recent school or therapy information help us move quickly.' }
    ]
  },
  {
    title: 'ABA Therapy Basics',
    items: [
      { question: 'What does a typical session look like?', answer: 'Sessions balance structured teaching, play, and natural practice opportunities while collecting data on goals.' },
      { question: 'How do you handle challenging behaviors?', answer: 'We identify triggers, teach replacement skills, and use supportive, individualized behavior plans.' }
    ]
  },
  {
    title: 'Insurance & Funding',
    items: [
      { question: 'Do you accept insurance?', answer: 'Yes, we help verify benefits and navigate authorizations.' },
      { question: 'How long before we can start?', answer: 'Timelines vary by payer but we keep families informed at every step.' }
    ]
  },
  {
    title: 'Progress & Outcomes',
    items: [
      { question: 'How often will I see updates?', answer: 'Families receive regular progress updates and scheduled review meetings.' },
      { question: 'What does success look like?', answer: 'Success means meaningful skill gains that improve family life, independence, and confidence.' }
    ]
  },
  {
    title: 'Family Support',
    items: [
      { question: 'Do you train caregivers?', answer: 'Yes, caregiver coaching is central to our model.' },
      { question: 'Do you work with my child’s school?', answer: 'Yes, we collaborate with school teams when family goals include classroom success.' }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <section className="container-width section-space">
      <h1 className="font-heading text-4xl font-bold">Parent Resources & FAQ</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate">Quick, clear answers to common questions families ask when starting ABA.</p>
      <div className="mt-8 space-y-8">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="mb-4 font-heading text-2xl font-semibold">{category.title}</h2>
            <FAQ items={category.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
