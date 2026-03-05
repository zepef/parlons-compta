import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllPosts, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Parlons Compta`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.ogImage ? [{ url: post.ogImage }] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
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
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <div className="mt-6 border-b border-zinc-100 dark:border-zinc-800" />
      </header>

      {/* Content */}
      <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-zinc-900 prose-a:underline-offset-2 dark:prose-a:text-zinc-100 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm dark:prose-code:bg-zinc-800">
        <MDXRemote source={post.content} />
      </div>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Essayer Parles au PCG
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          20 questions gratuites sur le Plan Comptable Général 2026. Aucune
          inscription requise.
        </p>
        <a
          href="https://parles-au-pcg.com"
          className="mt-4 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Commencer gratuitement →
        </a>
      </div>
    </main>
  );
}
