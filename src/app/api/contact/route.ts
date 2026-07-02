import { Resend } from "resend";

// Where the form submissions are delivered.
const TO = process.env.CONTACT_TO || "domingosjsmsantos@gmail.com";
// Sender address. With Resend's test setup you can use onboarding@resend.dev
// and it will deliver to the account you signed up with. Once you verify your
// own domain, change this to something like "Portfolio <hello@yourdomain.com>".
const FROM = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const budget = clean(body.budget);
  const message = clean(body.message);

  // Validation
  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    // Misconfiguration — don't pretend it worked.
    console.error("RESEND_API_KEY is not set; cannot send contact email.");
    return Response.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `New project request from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      budget ? `Budget: ${budget}` : "Budget: (not specified)",
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 12px">New project request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Budget:</strong> ${budget ? escapeHtml(budget) : "(not specified)"}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
