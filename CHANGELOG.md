# Changelog — SRU Brand Kit

## v1.1 — 2026-11-11
- **Apps Script support (inline by default).** Added `appsscript/BrandStyles.html` — the brand bar + footer + tech background as one embeddable `<style>` — because Apps Script's sandbox does not load external `<link>` CSS from non-Google domains (this had made header titles invisible and footers broken). Apps Script projects now embed this instead of linking.
- Added `appsscript/BrandStyles.gs` (optional single-source: server-side fetch + 6 h cache, with embedded fallback) and `appsscript/README.md`.
- README rewritten: path A (static → link, single-source) vs path B (Apps Script → embed). CSS unchanged (banners bumped to v1.1).

## v1.0 — 2026-10-22
- First release.
- `css/sru-tech-bg.css` v1.0 — **SRU Tech Background · Network** (approved option C «شبكة متصلة متحركة», first used in Coffee with IT v3.4):
  purple → blue gradient (#501e8c → #4a1f8a → #2b3f9e) for header bands, #3a1464 → #2e2a80 for footers, network nodes and lines drifting
  slowly (40 s); no motion for "reduce motion"; removed when printing.
- `css/sru-shell.css` v1.0 — white brand bar with 40 px logos (32 px on phones), footer layout, support box, ITOC badge.
- `logos/` — SRU, ICTD and ITOC logos (transparent PNG).
- `index.html` — live demo and copy-paste snippets.
