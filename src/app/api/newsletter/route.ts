import { NextRequest, NextResponse } from "next/server";

// Placeholder newsletter API route.
// TODO: wire up to a real provider (Resend or ConvertKit) once chosen.
// For now, logs the signup and returns success.

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Adresse email requise." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    // Placeholder: log to console (visible in Vercel logs).
    // Replace with real provider integration:
    //   - Resend: POST https://api.resend.com/audiences/{id}/contacts
    //   - ConvertKit: POST https://api.convertkit.com/v3/forms/{id}/subscribe
    console.log("[newsletter] New signup:", email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }
}
