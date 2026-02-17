import { cn } from "@/lib/cn";

type Props = {
  href: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
};

export function LinkCard({ href, icon, title, description, tag }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/20 dark:border-white/10",
        "bg-white/40 dark:bg-white/5 backdrop-blur-xl",
        "shadow-[0_1px_0_rgba(255,255,255,0.65)_inset]",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "h-11 w-11 rounded-2xl grid place-items-center",
                "bg-white/60 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10",
                "shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
              )}
              aria-hidden="true"
            >
              <span className="text-xl">{icon}</span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">{title}</p>
              {tag ? <p className="mt-0.5 text-xs text-muted-foreground">{tag}</p> : null}
            </div>
          </div>

          <span className="mt-1 text-sm opacity-40 transition group-hover:opacity-70">↗</span>
        </div>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium">
          <span className="relative">
            <span className="opacity-70">Open</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-current opacity-40 transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </a>
  );
}
