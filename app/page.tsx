import { LinkCard } from "@/components/link-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LINKS } from "@/lib/links";

export default function Page() {
  return (
    <main className="relative isolate">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 dark:opacity-35 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_55%)]" />
        <div className="absolute right-[-10rem] top-[8rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-35 dark:opacity-30 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.30),transparent_55%)]" />
        <div className="absolute bottom-[-12rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full blur-3xl opacity-35 dark:opacity-25 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.2))] dark:bg-[linear-gradient(to_bottom,rgba(3,7,18,0.65),rgba(3,7,18,0.2))]" />
        <div className="absolute inset-0 bg-grid opacity-[0.08] dark:opacity-[0.10]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 pb-10 pt-10 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/60 dark:bg-white/10 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 shadow-sm grid place-items-center">
            <span className="text-lg">✦</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm text-muted-foreground">Aesthetic Link Library</p>
            <p className="text-base font-semibold tracking-tight">Curated. Calm. Classy.</p>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="rounded-3xl border border-white/20 dark:border-white/10 bg-white/35 dark:bg-white/5 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] p-8 sm:p-12">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              A modern, minimalist <span className="text-gradient">link library</span>.
            </h1>
            <p className="mt-4 text-pretty text-base sm:text-lg text-muted-foreground">
              Tools, resources, playlists, and inspiration—curated into a calm grid.
              Fast, elegant, and Vercel-ready.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#links"
                className="group inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 text-sm font-medium shadow-sm transition active:scale-[0.98]"
              >
                Explore links
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/60 dark:bg-white/10 px-4 py-2.5 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-md transition hover:bg-white/75 dark:hover:bg-white/15 active:scale-[0.98]"
              >
                Deploy to Vercel
                <span className="opacity-60">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div id="links" className="mt-10 pb-16">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Curated grid</h2>
              <p className="text-sm text-muted-foreground">
                Hover for a gentle lift, glow, and crisp focus.
              </p>
            </div>
            <p className="hidden sm:block text-sm text-muted-foreground">{LINKS.length} links</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LINKS.map((link) => (
              <LinkCard key={link.href} {...link} />
            ))}
          </div>
        </div>

        <footer className="pb-10 text-center text-xs text-muted-foreground">
          <p>
            Built with Next.js + Tailwind. Minimal dependencies.{" "}
            <span className="opacity-70">© {new Date().getFullYear()}</span>
          </p>
        </footer>
      </section>
    </main>
  );
}
