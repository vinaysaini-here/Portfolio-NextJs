type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.32em] text-accent">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}