import type { Metadata } from "next";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produits — Parlons Compta",
  description:
    "Découvrez tous les assistants IA de Parlons Compta pour la comptabilité, le droit fiscal et civil français.",
};

export default function ProduitsPage() {
  const liveProducts = products.filter((p) => p.status === "live");
  const soonProducts = products.filter((p) => p.status === "soon");

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="border-b border-zinc-100 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Nos produits
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Des assistants IA pour chaque domaine du droit français
            </h1>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Chaque assistant est entraîné spécifiquement sur son corpus
              juridique. Des réponses précises, sourcées, et vérifiables —
              toujours en droit français.
            </p>
          </div>
        </div>
      </section>

      {/* Live products */}
      {liveProducts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Disponible maintenant
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {liveProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming soon */}
      {soonProducts.length > 0 && (
        <section className="border-t border-zinc-100 py-16 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Prochainement
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {soonProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-zinc-100 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Vous souhaitez un produit spécifique ?
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Dites-nous quel domaine juridique ou comptable vous intéresse.
          </p>
          <a
            href="mailto:contact@tckc.ai"
            className="mt-6 inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const isLive = product.status === "live";

  return (
    <a
      href={product.href}
      className={`group flex flex-col rounded-2xl border bg-white p-6 transition-all dark:bg-zinc-900 ${
        isLive
          ? "border-zinc-200 shadow-sm hover:shadow-md dark:border-zinc-700 dark:hover:border-zinc-600"
          : "cursor-default border-zinc-100 opacity-75 dark:border-zinc-800"
      }`}
      {...(!isLive && { onClick: (e) => e.preventDefault() })}
    >
      {/* Domain + status */}
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {product.domain}
        </span>
        {isLive ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Disponible
          </span>
        ) : (
          <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
            Bientôt
          </span>
        )}
      </div>

      {/* Name + tagline */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
          {product.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {product.description}
      </p>

      {/* Price + CTA */}
      <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        {isLive && product.priceDetail ? (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {product.price}
              </span>
              <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                {product.priceDetail}
              </p>
            </div>
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors group-hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:group-hover:bg-zinc-200">
              Essayer →
            </span>
          </div>
        ) : (
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Inscription à la liste d&apos;attente disponible prochainement.
          </p>
        )}
      </div>
    </a>
  );
}
