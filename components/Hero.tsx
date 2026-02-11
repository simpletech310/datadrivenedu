import Image from 'next/image';

type HeroProps = {
  title: string;
  subtitle: string;
  imageAlt: string;
  imageUrl?: string;
};

export function Hero({ title, subtitle, imageAlt, imageUrl = 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1200&q=80' }: HeroProps) {
  return (
    <section className="container-width section-space">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:hello@datadrivenedu.com" className="focus-ring rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-slate">Get Started</a>
            <a href="tel:+19510000000" className="focus-ring rounded-xl border border-slate px-6 py-3 font-semibold text-slate hover:bg-light">Call Us</a>
          </div>
        </div>
        <div>
          <Image src={imageUrl} alt={imageAlt} width={1200} height={800} className="w-full rounded-2xl object-cover shadow-soft" priority />
        </div>
      </div>
    </section>
  );
}
