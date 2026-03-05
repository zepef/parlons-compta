export type ProductStatus = "live" | "soon";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  price: string | null;
  priceDetail: string | null;
  href: string;
  domain: string;
}

export const products: Product[] = [
  {
    id: "parles-au-pcg",
    name: "Parles au PCG",
    tagline: "Plan Comptable Général 2026",
    description:
      "Assistant vocal et textuel spécialisé dans le Plan Comptable Général 2026. Obtenez des réponses instantanées sur les règles de comptabilisation, les numéros de comptes, les obligations légales et les écritures comptables courantes.",
    status: "live",
    price: "Gratuit",
    priceDetail: "20 questions gratuites, puis 4,99\u00a0€ pour 200 questions",
    href: "https://parles-au-pcg.com",
    domain: "Comptabilité",
  },
  {
    id: "parles-au-code-civil",
    name: "Parles au Code Civil",
    tagline: "Droit civil français",
    description:
      "Naviguez dans le Code civil avec un assistant IA formé sur la jurisprudence et les textes réglementaires à jour. Contrats, obligations, successions, droit de la famille — posez vos questions en langage naturel.",
    status: "soon",
    price: null,
    priceDetail: null,
    href: "#",
    domain: "Droit civil",
  },
  {
    id: "parles-au-code-des-impots",
    name: "Parles au Code des Impôts",
    tagline: "Droit fiscal français",
    description:
      "Interprétez le Code général des impôts avec précision. TVA, IS, IR, droits d'enregistrement — toutes vos questions fiscales en un instant, avec des réponses citant les articles applicables.",
    status: "soon",
    price: null,
    priceDetail: null,
    href: "#",
    domain: "Fiscalité",
  },
  {
    id: "parles-au-cac40",
    name: "Parles au CAC 40",
    tagline: "Marchés financiers français",
    description:
      "Analysez les entreprises du CAC 40 avec un assistant IA formé sur les rapports annuels, les données financières et l'actualité boursière. Ratios, bilans, perspectives sectorielles.",
    status: "soon",
    price: null,
    priceDetail: null,
    href: "#",
    domain: "Finance",
  },
];
