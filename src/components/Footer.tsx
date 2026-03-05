import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 dark:bg-white">
                <span className="text-[10px] font-bold text-white dark:text-zinc-900">PC</span>
              </div>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Parlons Compta
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-zinc-500 dark:text-zinc-400">
              Le hub des outils IA pour les professionnels de la comptabilité française.
            </p>
            <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
              Une marque{" "}
              <a
                href="https://tckc.ai"
                className="font-medium text-zinc-500 underline-offset-2 hover:underline dark:text-zinc-400"
              >
                TCKC
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.456-8.52L2.25 2.25h6.891l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Produits */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Produits
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://parles-au-pcg.com"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Parles au PCG
                </a>
              </li>
              <li>
                <Link
                  href="/produits"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Tous les produits
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Légal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © 2026 TCKC. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
