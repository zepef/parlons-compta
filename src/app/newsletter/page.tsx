import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter — Parlons Compta",
  description:
    "Restez informé des dernières nouveautés en comptabilité IA : nouveaux outils, mises à jour légales, guides pratiques.",
};

export default function NewsletterPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Gratuit, sans spam
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Restez informé des dernières nouveautés en comptabilité IA
        </h1>
        <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
          Nouvelles lois, mises à jour du PCG, nouveaux outils IA, guides pratiques
          pour les professionnels de la comptabilité française — dans votre boîte mail,
          quand c&apos;est pertinent.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <NewsletterForm />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          {
            title: "Mises à jour légales",
            description: "PCG 2026, bulletins ANC, modifications du Code des impôts.",
          },
          {
            title: "Nouveaux outils",
            description: "Soyez les premiers informés du lancement de chaque assistant IA.",
          },
          {
            title: "Guides pratiques",
            description: "Cas concrets, questions fréquentes, bonnes pratiques métier.",
          },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h3>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
