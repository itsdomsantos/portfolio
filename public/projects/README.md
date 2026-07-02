# Project media (screenshots & demo videos)

Drop your project images or demo videos in this folder, then reference them
from `src/data/site.ts`.

## How to add media to a project

1. Put your file here, e.g.:
   - `public/projects/operager.png` (screenshot)
   - `public/projects/operager-demo.mp4` (demo video)

2. Open `src/data/site.ts`, find the project, and set ONE of:

   ```ts
   imagem: "/projects/operager.png",   // shows an image
   // or
   video: "/projects/operager-demo.mp4", // shows a playable video
   ```

   (You can set both — the `imagem` is used as the video's poster/thumbnail.)

3. If neither is set, the card shows a coloured gradient with the project's
   initials as a fallback.

## Tips
- Recommended image size: ~1200×675 (16:9). It's cropped to fill the card.
- Keep videos short and compressed (MP4/H.264). A 10–30s screen recording works great.
- The featured project (`destaque: true`) has a larger media area, so use your
  best screenshot or demo there.
