import Link from "next/link";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Parlons Compta — Hub IA pour la comptabilité française",
  description:
    "Des outils IA conçus pour les professionnels de la comptabilité française. Plan Comptable Général 2026, droit fiscal, droit civil — posez vos questions, obtenez des réponses instantanées.",
};

const products = [
  {
    name: "Parles au PCG",
    tagline: "Plan Comptable Général 2026",
    description:
      "Obtenez des réponses instantanées sur les règles de comptabilisation, les numéros de comptes et les obligations légales françaises.",
    status: "live" as const,
    price: "20 questions gratuites",
    href: "https://parles-au-pcg.com",
  },
  {
    name: "Parles au Code Civil",
    tagline: "Droit civil français",
    description:
      "Naviguez dans le Code civil avec un assistant IA formé sur la jurisprudence et les textes réglementaires à jour.",
    status: "soon" as const,
    price: "Bientôt disponible",
    href: "/produits",
  },
  {
    name: "Parles au Code des Impôts",
    tagline: "Droit fiscal français",
    description:
      "Interprétez le Code général des impôts avec précision. TVA, IS, IR — toutes vos questions fiscales en un instant.",
    status: "soon" as const,
    price: "Bientôt disponible",
    href: "/produits",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Parles au PCG est disponible maintenant
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
              L&apos;IA au service des{" "}
              <span className="text-zinc-500">professionnels</span> de la
              comptabilité française
            </h1>

            <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
              Des assistants IA spécialisés, conçus pour répondre aux questions
              complexes du droit comptable, fiscal et civil français. Précis,
              rapides, et toujours à jour.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://parles-au-pcg.com"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Essayer Parles au PCG →
              </a>
              <Link
                href="/produits"
                className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Voir tous les produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / trust bar */}
      <section className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: "2026", label: "PCG mis à jour" },
              { value: "20", label: "Questions gratuites" },
              { value: "< 3s", label: "Temps de réponse" },
              { value: "FR", label: "Droit français uniquement" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-white py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Une suite d&apos;outils pour chaque domaine
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Chaque assistant est entraîné spécifiquement sur son domaine
              juridique. Pas de réponses génériques — des réponses précises,
              sourcées, et vérifiables.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="group relative flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                {/* Status badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {product.tagline}
                  </span>
                  {product.status === "live" ? (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Disponible
                    </span>
                  ) : (
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      Bientôt
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {product.price}
                  </span>
                  <span className="text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                    {product.status === "live" ? "Essayer →" : "En savoir plus →"}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/produits"
              className="text-sm font-medium text-zinc-500 underline-offset-2 hover:underline dark:text-zinc-400"
            >
              Voir tous les produits et la roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* Value prop section */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Pourquoi Parlons Compta ?
              </h2>
              <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                Le droit comptable et fiscal français est complexe, dense et
                évolutif. Nos outils IA sont conçus pour les professionnels qui
                ont besoin de réponses fiables, rapidement.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Spécialisé droit français",
                  description:
                    "Chaque assistant est entraîné exclusivement sur les textes officiels français — pas de confusion avec d'autres juridictions.",
                },
                {
                  title: "Toujours à jour",
                  description:
                    "Le PCG 2026, les dernières circulaires fiscales, les mises à jour légales — intégrés automatiquement.",
                },
                {
                  title: "Réponses vérifiables",
                  description:
                    "Chaque réponse cite ses sources : articles de loi, numéros de comptes, bulletins officiels.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-white">
                    <svg
                      className="h-3 w-3 text-white dark:text-zinc-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-white py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Restez informé des nouveaux outils
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Recevez une notification lors du lancement de chaque nouveau
              produit et des mises à jour légales importantes.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              Pas de spam. Désabonnement en un clic.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
