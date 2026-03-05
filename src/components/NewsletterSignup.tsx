"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "hero" | "inline" | "compact";
}

export default function NewsletterSignup({ variant = "inline" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Une erreur est survenue");
      }

      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez.");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center dark:border-emerald-900/30 dark:bg-emerald-950/20 ${variant === "compact" ? "py-4" : ""}`}>
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
          <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-3 font-medium text-emerald-900 dark:text-emerald-100">
          Inscription confirmée !
        </p>
        <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">
          Vous recevrez nos prochaines actualités par email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`flex gap-3 ${variant === "hero" ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          disabled={status === "loading"}
          className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-400 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
        />
        <button
          type="submit"
          disabled={status === "loading" || !consent}
          className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {status === "loading" ? "Inscription…" : "S'inscrire"}
        </button>
      </div>

      {/* RGPD consent */}
      <label className="mt-4 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 cursor-pointer accent-zinc-900"
        />
        <span className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          J&apos;accepte de recevoir la newsletter de Parlons Compta et je confirme avoir
          pris connaissance de la{" "}
          <a
            href="/confidentialite"
            className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            politique de confidentialité
          </a>
          . Désinscription possible à tout moment.
        </span>
      </label>

      {/* Error message */}
      {status === "error" && (
        <p className="mt-3 rounded-lg bg-red-50 px-4 py-2 text-xs text-red-600 dark:bg-red-950/30 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
