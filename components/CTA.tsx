export function CTA({ title, description }: { title: string; description: string }) {
  return (
    <section className="container-width section-space">
      <div className="rounded-2xl bg-primary px-6 py-12 text-center text-white shadow-soft md:px-12">
        <h2 className="font-heading text-3xl font-bold">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-light">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@datadrivenedu.com" className="focus-ring rounded-xl bg-white px-6 py-3 font-semibold text-dark hover:bg-light">Email Us</a>
          <a href="tel:+19510000000" className="focus-ring rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-slate">Call Us</a>
        </div>
      </div>
    </section>
  );
}
