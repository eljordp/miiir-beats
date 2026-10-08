# Miiir Beats

Producer site for Miiir / [@stillmiiir](https://www.instagram.com/stillmiiir/).
Production: https://miiir-beats.vercel.app
Vercel: `jordis-projects-94d2df39/miiir-beats`; GitHub production branch: `main`.

Run `npm ci`, `npm run dev`. Validate with `npm run lint` and `npm run build`.

## Monthly offers — October 8, 2026

Source: the @stillmiiir Instagram story screenshot supplied by Jordan on October 8.
Lease: $70 for one; $60 per beat for two or more. Custom exclusives: $400 each or three for $1,000.
`src/lib/beats.ts` owns the offer values and bundle calculation. No precise end date was supplied; these prices do not automatically expire. Reconfirm before the next month.

The story does not specify license rights, file formats, or delivery terms. Requests go to the current Instagram profile for confirmation before payment. Copying the request does not send it automatically. Custom commissions are separate from catalog beat buyouts.

The pre-existing catalog has no audio files; simulated playback was removed. Supply verified catalog tracks and metadata before enabling previews or automated checkout. The existing 2025 stream/placement/view claims were preserved, not independently reverified in this update.

Selected-work links: the existing working Score Again YouTube video, plus [Miiir's 10 Summers production post](https://www.instagram.com/stillmiiir/reel/DbcX5z7BeUB/). The unavailable Gld77nmF7Xs embed was removed.

Validation: production build and lint pass; Chrome checked desktop and 390px mobile layout, $70/$120/$180 request totals, empty selection, copy, Escape dismissal, and mobile navigation. Runtime dependency audit has zero vulnerabilities after updating Next.js to 16.3.8. Five development-tool advisories remain in the ESLint/fast-glob/braces dependency chain; the registry's suggested fix downgrades ESLint's Next config across major versions and was not applied.

## October 2026 visual refresh

Five static pages: Home, Beats, Work, Deals, and Contact. The homepage uses a real studio photograph rather than generated imagery. Work includes the verified Score Again and official Ten Summers YouTube embeds, with an original-source link. The catalog keeps the manual Instagram lease request flow; Contact builds a message locally and does not submit it automatically.

Media provenance (accessed 2026-10-08):
- `public/media/session-01.webp`, `session-02.webp`, `session-03.webp`: slides 1–3 of https://www.instagram.com/stillmiiir/p/Daok7veGtiD/ . Optimized from downloaded public photographs. First slide tags @shotbyrogelio. Do not claim a specific person is Miiir from appearance alone.
- `public/media/ten-summers-youtube-loop.mp4`: 12-second silent H.264 excerpt (34–46 seconds), native 1920×1080 with a 1280×720 mobile version, sourced directly from https://www.youtube.com/watch?v=oo1GBW9xoUU (SOB X RBE — Ten Summers, Official Video). The poster is the actual frame at 40 seconds. This replaces the lower-resolution Instagram version previously retrieved through SnapInsta. Work plays the official YouTube embed; the banner pauses offscreen/background and respects reduced-motion/data-saver preferences.
- Score Again thumbnail and embed: https://www.youtube.com/watch?v=CEFfJUJmGzU .

Scroll reveals progressively enhance visible server-rendered content. Reduced-motion users receive static content; credit marquee pauses on hover and is static/scrollable with reduced motion. Photos use responsive Next Image/WebP; embeds load lazily. No generated imagery is used.

## Instrumental listening samples — October 8, 2026

Home and Beats now include three official instrumental uploads from Miiir's verified @415miiir channel: [EBK Jaaybo — 5K](https://www.youtube.com/watch?v=ieGDeo48oGE), [EBK Bckdoe — Letter To Myself](https://www.youtube.com/watch?v=sU589yM7Ff0), and [Lil Bean & Lil Yee — Feel Real](https://www.youtube.com/watch?v=Bsc7s9yXlw0). These are listening examples of released productions, not audio assigned to the pre-existing catalog entries or assertions that those records can be leased. Tracks are served as native M4A audio sourced directly from these uploads. One shared audio element handles samples and background listening across all five pages; switching tracks stops the previous one. Nothing downloads or plays until the visitor chooses sound or a sample. The player supports pause, mute, seek, source links, and dismissal.

The first homepage visit in each browser-tab session opens a native dialog with an optional “Enter with sound” action. The actual “Real badmon” tag from 5K leads into the same uninterrupted 5K instrumental, as specifically selected by the user. The intro plays 0.5–4.3 seconds before revealing the hero; audio continues from there. Gemini was explicitly requested by the user and analyzed the first 15 seconds through Google's official API, identifying the opening tag in 5K and the Miiir-naming tag in Feel Real. The user confirmed both and chose 5K for the opening. No generated voice, tag, imagery, or Gemini credential is included in this project. The tag analysis and source originals are kept outside the repository. Silent entry and Escape dismiss the dialog; reduced-motion entry skips animation. An eight-second fallback prevents slow audio from trapping visitors. Browsers require a user gesture for reliable audible playback. Direct links to other pages do not force the intro. Music-video selection pauses the beat and mounts just one YouTube player.

The requested group studio photo (`session-03.webp`) is now the full-width hero; `session-01.webp` is the square image beside Make it your own. Both remain real photographs with a responsive crop and no generative expansion.

Deployment note: the first visual-refresh Git build restored a stale stylesheet cache. A clean `vercel deploy --prod --force --yes --scope jordis-projects-94d2df39` resolved it. Verify actual live CSS and UI after future deployments; READY alone is insufficient.
