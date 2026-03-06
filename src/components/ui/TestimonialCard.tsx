interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="text-[length:var(--font-size-section-body)] text-foreground leading-relaxed break-keep">
        &ldquo;{content}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
            {name[0]}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}
