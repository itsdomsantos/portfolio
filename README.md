# Domingos Santos — Portfolio

A modern portfolio built with Next.js, TypeScript and Tailwind CSS
(bordeaux / dark-red theme, glassmorphism, animated background).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Editing content

All the site content lives in `src/data/`:

- `src/data/site.ts` — your name, bio, stats, projects, skills, experience,
  social links and contact details.
- `src/data/operager.ts` — the Operager case-study page (demo video, features,
  tech stack, screenshots).

Project media (screenshots / demo videos) go in `public/projects/` — see the
`README.md` files in there for how to wire them up.

## Contact form email (Resend)

The contact form sends submissions to your inbox using
[Resend](https://resend.com). To enable it:

1. Create a free account at [resend.com](https://resend.com).
2. Create an **API key** in the dashboard.
3. Copy `.env.example` to `.env.local` and paste your key:

   ```bash
   cp .env.example .env.local
   ```

   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_TO=domingosjsmsantos@gmail.com
   CONTACT_FROM=Portfolio <onboarding@resend.dev>
   ```

4. Restart `npm run dev`. Submissions now arrive at `CONTACT_TO`.

**Notes**
- In Resend's test setup, keep `CONTACT_FROM` as `onboarding@resend.dev`; it
  delivers to the email you signed up with. Sign up with your Gmail so the
  messages land there.
- To send from your own address (e.g. `hello@yourdomain.com`), verify your
  domain in Resend and update `CONTACT_FROM`.
- The API key stays server-side (in `.env.local`, which is git-ignored) — it
  never reaches the browser.

## Deploy on Vercel

Push to GitHub and import the repo on [Vercel](https://vercel.com/new). Add the
same environment variables (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`) in
the Vercel project settings so the contact form works in production.
