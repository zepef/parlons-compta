export const metadata = {
  title: "parlons-compta.com — Bientôt disponible",
  description:
    "Le hub des outils IA pour la comptabilité française. Bientôt disponible.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 dark:bg-zinc-950">
      <main className="flex max-w-xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium tracking-widest text-zinc-400 uppercase">
            parlons-compta.com
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Bientôt disponible
          </h1>
          <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
            Le hub des outils IA pour la comptabilité française.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://parles-au-pcg.com"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Essayer Parles au PCG →
          </a>
          <p className="text-xs text-zinc-400">
            Assistant vocal pour le Plan Comptable Général 2026
          </p>
        </div>
      </main>
    </div>
  );
}
