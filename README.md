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
