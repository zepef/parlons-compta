"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "Parles au PCG",
    description: "Assistant vocal pour le Plan Comptable Général 2026",
    href: "https://parles-au-pcg.com",
    status: "live" as const,
  },
  {
    name: "Parles au Code Civil",
    description: "Assistant IA pour le droit civil français",
    href: "/produits",
    status: "soon" as const,
  },
  {
    name: "Parles au Code des Impôts",
    description: "Assistant IA pour le droit fiscal français",
    href: "/produits",
    status: "soon" as const,
  },
];

export default function Nav() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
            <span className="text-xs font-bold text-white dark:text-zinc-900">PC</span>
          </div>
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Parlons Compta
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Products dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Produits
              <svg
                className={`h-3 w-3 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <>
                <div
                  className="fixed inset-0"
                  onClick={() => setProductsOpen(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-zinc-100 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                            {p.name}
                          </span>
                          {p.status === "live" ? (
                            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                              Disponible
                            </span>
                          ) : (
                            <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                              Bientôt
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                          {p.description}
                        </p>
                      </div>
                    </a>
                  ))}
                  <div className="mt-1 border-t border-zinc-100 pt-1 dark:border-zinc-800">
                    <Link
                      href="/produits"
                      className="flex items-center gap-1 rounded-lg p-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                      onClick={() => setProductsOpen(false)}
                    >
                      Voir tous les produits →
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/blog"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Blog
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#newsletter"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Restez informé
        </Link>
      </nav>
    </header>
  );
}
