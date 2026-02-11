import Image from 'next/image';

export function TeamMember({ name, title, credentials }: { name: string; title: string; credentials: string }) {
  return (
    <article className="card text-center">
      <Image
        src={`https://placehold.co/400x400/BFDEF2/231F20?text=${encodeURIComponent(name)}`}
        alt={`Portrait placeholder for ${name}`}
        width={280}
        height={280}
        className="mx-auto rounded-2xl"
      />
      <h3 className="mt-4 font-heading text-xl font-semibold">{name}</h3>
      <p className="text-slate">{title}</p>
      <p className="text-sm font-medium text-dark">{credentials}</p>
    </article>
  );
}
