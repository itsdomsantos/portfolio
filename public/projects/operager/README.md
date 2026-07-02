# Operager media

Put the Operager demo video and screenshots here, then reference them in
`src/data/operager.ts`.

## Demo video (top of the page)
1. Drop the file here, e.g. `public/projects/operager/demo.mp4`
2. In `src/data/operager.ts` set:
   ```ts
   demoVideo: "/projects/operager/demo.mp4",
   demoPoster: "/projects/operager/demo-poster.png", // optional thumbnail
   ```

## Screenshots (below the page)
1. Drop the images here, e.g. `dashboard.png`, `movements.png`, …
2. In `src/data/operager.ts` fill the `screenshots` array:
   ```ts
   screenshots: [
     { src: "/projects/operager/dashboard.png", legenda: "Real-time dashboard" },
     { src: "/projects/operager/movements.png", legenda: "Movement history & filters" },
   ],
   ```

While `demoVideo` is empty or `screenshots` is `[]`, the page shows tasteful
placeholders instead.
