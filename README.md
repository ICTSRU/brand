# SRU Brand Kit · v1.1

**Sulaiman Al Rajhi University · ICTD · IT Operations Center (ITOC)**

One shared source for the visual pieces every ICTD/ITOC platform uses. Projects **link** to these files instead of copying them,
so a single update here restyles every platform.

| | Link (after publishing) |
|---|---|
| Documentation / live demo | https://ictsru.github.io/brand/ |
| Tech background | `https://ictsru.github.io/brand/css/sru-tech-bg.css` |
| Brand bar + footer | `https://ictsru.github.io/brand/css/sru-shell.css` |
| Logos | `https://ictsru.github.io/brand/logos/sru-logo.png` · `ictd-logo.png` · `itoc-logo.png` |

## Contents

| Path | Purpose |
|---|---|
| `css/sru-tech-bg.css` | **SRU Tech Background · Network v1.0** — approved option C «شبكة متصلة متحركة». `.sru-tech-bg` for the purple header band, `.sru-tech-bg-dark` for the footer. Stops moving for "reduce motion", removed when printing. |
| `css/sru-shell.css` | White brand bar with 40 px logos (`.sru-brandbar`), footer layout (`.sru-footer`), support box (`.sru-support`), ITOC badge (`.sru-itoc`). |
| `logos/` | Official SRU, ICTD and ITOC logos (transparent PNG). |
| `appsscript/BrandStyles.html` | **Inline styles for Google Apps Script** — embed this (Apps Script does not load external CSS). Mirrors the two CSS files. |
| `appsscript/BrandStyles.gs` | Optional single-source helper for Apps Script (fetch + cache, with embedded fallback). |
| `appsscript/README.md` | How to use the kit inside Apps Script. |
| `index.html` | Live demo + copy-paste snippets. |
| `CHANGELOG.md`, `.nojekyll` | Change record; serve files as-is. |

## Use it — pick the path that matches the project

> ⚠️ **Google Apps Script does NOT load external `<link>` CSS** from non-Google domains
> (sandboxed iframe). Apps Script projects must **embed** the styles — see path B.
> Static HTML / GitHub Pages sites can **link** and stay single-source — path A.

### A) Static HTML / GitHub Pages — link (single source)
Put the links **after** the page's own `<style>` so the kit wins:

```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet">
<style> /* page styles */ </style>
<link rel="stylesheet" href="https://ictsru.github.io/brand/css/sru-shell.css">
<link rel="stylesheet" href="https://ictsru.github.io/brand/css/sru-tech-bg.css">
```

### B) Google Apps Script (HtmlService) — embed (default)
Add **`appsscript/BrandStyles.html`** to the project and include it in `<head>` **after** your own `<style>`:

```html
<?!= include('BrandStyles') ?>
```
Full steps and the optional single-source helper: see **`appsscript/README.md`**.

```html
<div class="sru-brandbar"><div class="in">
  <img src="https://ictsru.github.io/brand/logos/sru-logo.png" alt="جامعة سليمان الراجحي">
  <img src="https://ictsru.github.io/brand/logos/ictd-logo.png" alt="الإدارة التنفيذية للاتصالات وتقنية المعلومات">
</div></div>

<section class="hero sru-tech-bg"> … page title … </section>

<footer class="sru-footer sru-tech-bg-dark"><div class="in">
  <div class="sru-support"><b>For Support:</b> Dial <span class="star">*</span> <span class="or">or</span> Send email to: <a href="mailto:servicedesk@sr.edu.sa">servicedesk@sr.edu.sa</a></div>
  <a class="sru-itoc" href="https://ictsru.github.io/ITOC/#forms" target="_blank" rel="noopener"><img src="https://ictsru.github.io/brand/logos/itoc-logo.png" alt="ITOC — IT Operations Center"></a>
</div></footer>
```

**Existing project:** keep its header/footer markup and just add the two classes (`sru-tech-bg` on the header band, `sru-tech-bg-dark`
on the footer) plus the `<link>` to `sru-tech-bg.css`. If the kit is unreachable the page falls back to its own plain purple.

**E-mails:** mail clients ignore external CSS and animation — keep the solid purple header in e-mail templates.

## Publishing

1. Create the repository **ICTSRU/brand** (public — the files must be reachable by every platform; they contain no data).
2. Upload **the contents** of this folder to the root (including `.nojekyll`).
3. **Settings → Pages → Branch `main` / root**. After about a minute the links above work.

## Updating

Edit the file here, bump the version in its header comment, add a CHANGELOG line, and push — every linked platform picks it up
(browsers may cache for a few minutes; add `?v=1.1` to a link to force it).
