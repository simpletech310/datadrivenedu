import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Careers | Data Driven Education', description: 'Join our ABA team and help families thrive with compassionate, data-informed care.' };

export default function CareersPage() {
  return (
    <section className="container-width section-space">
      <h1 className="font-heading text-4xl font-bold">Careers at Data Driven Education</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate">Join a team that values quality care, clinical growth, and supportive collaboration.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card"><h2 className="font-heading text-2xl font-semibold">Why Join DDE</h2><p className="mt-3 text-slate">We prioritize mentorship, ethical care, and manageable caseloads so clinicians can do their best work.</p></div>
        <div className="card"><h2 className="font-heading text-2xl font-semibold">Open Roles</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate"><li>BCBA / Clinical Supervisor</li><li>RBT / Behavior Technician</li><li>Care Coordinator</li><li>Operations Support</li></ul></div>
        <div className="card"><h2 className="font-heading text-2xl font-semibold">Benefits & Culture</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-slate"><li>Professional development support</li><li>Collaborative leadership team</li><li>Family-first service culture</li></ul></div>
        <div className="card"><h2 className="font-heading text-2xl font-semibold">Apply</h2><p className="mt-3 text-slate">Send your resume and interest to our team.</p><a href="mailto:careers@datadrivenedu.com" className="focus-ring mt-4 inline-block rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-slate">Email Your Application</a></div>
      </div>
    </section>
  );
}
