import Reveal from "./Reveal";

// Cabeçalho consistente para cada secção.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-white/60">{subtitle}</p>}
    </Reveal>
  );
}
