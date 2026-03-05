"use client";

import { useState } from "react";

interface Props {
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setErrorMessage("Vous devez accepter la politique de confidentialité.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setConsent(false);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error ?? "Une erreur est survenue. Veuillez réessayer.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          ✓ Inscription confirmée — merci !
        </p>
        <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-500">
          Vous recevrez nos prochaines actualités par email.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {status === "loading" ? "…" : "OK"}
          </button>
        </div>
        <label className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded accent-zinc-900 dark:accent-white"
          />
          <span>
            J&apos;accepte la{" "}
            <a href="/confidentialite" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50">
              politique de confidentialité
            </a>{" "}
            (RGPD)
          </span>
        </label>
        {status === "error" && (
          <p className="text-xs text-red-600 dark:text-red-400">{errorMessage}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
          className="flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {status === "loading" ? "En cours…" : "S\u2019inscrire"}
        </button>
      </div>
      <label className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded accent-zinc-900 dark:accent-white"
        />
        <span>
          J&apos;accepte de recevoir des emails de Parlons Compta et la{" "}
          <a href="/confidentialite" className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-50">
            politique de confidentialité
          </a>{" "}
          (RGPD)
        </span>
      </label>
      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
