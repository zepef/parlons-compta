import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Parlons Compta",
  description:
    "Actualités, guides et analyses sur la comptabilité française, le droit fiscal et les outils IA pour les professionnels.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">
          Actualités, guides et réflexions sur la comptabilité française et
          l&apos;intelligence artificielle.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          Aucun article pour le moment. Revenez bientôt.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime} min de lecture</span>
                  {post.author && (
                    <>
                      <span>·</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>

                <h2 className="mt-3 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                  {post.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Lire l&apos;article →
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
