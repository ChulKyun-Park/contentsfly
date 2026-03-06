import { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHero({ label, title, description, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="bg-hero-bg flex items-center min-h-[320px] py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6">
        {imageSrc ? (
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="mb-4 text-[length:var(--font-size-section-label)] font-semibold uppercase tracking-wider text-primary">{label}</p>
              <h1 className="text-[length:var(--font-size-page-hero)] font-bold leading-tight text-foreground break-keep">{title}</h1>
              {description && <p className="mt-4 max-w-2xl text-[length:var(--font-size-body)] leading-relaxed text-muted break-keep">{description}</p>}
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image src={imageSrc} alt={imageAlt || ""} width={800} height={500} className="w-full h-auto rounded-2xl" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-4 text-[length:var(--font-size-section-label)] font-semibold uppercase tracking-wider text-primary">{label}</p>
            <h1 className="text-[length:var(--font-size-page-hero)] font-bold leading-tight text-foreground break-keep">{title}</h1>
            {description && <p className="mt-4 max-w-2xl text-[length:var(--font-size-body)] leading-relaxed text-muted break-keep">{description}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
