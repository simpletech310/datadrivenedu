import Image from 'next/image';
import Link from 'next/link';

export function ServiceCard({
  title,
  description,
  href,
  imageUrl
}: {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}) {
  return (
    <article className="card overflow-hidden p-0">
      <Image src={imageUrl} alt={`${title} placeholder image`} width={800} height={500} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-slate">{description}</p>
        <Link href={href} className="focus-ring mt-4 inline-block font-semibold text-primary hover:text-slate">Learn More →</Link>
      </div>
    </article>
  );
}
