# SRU Brand Kit — Google Apps Script usage (v1.1)

**Why this folder exists:** Apps Script serves pages inside a sandboxed iframe that
**does not load external `<link>` stylesheets** from non-Google domains. Linking to
`https://ictsru.github.io/brand/css/*.css` therefore leaves the header title invisible
and the footer broken. Apps Script projects must **embed** the brand styles.

## Default — embed (reliable, no network)
1. Apps Script editor → **+ → HTML** → name it **`BrandStyles`** → paste `BrandStyles.html`.
2. Add the include helper to `Code.gs` (most projects already have it):
   ```js
   function include(f){ return HtmlService.createHtmlOutputFromFile(f).getContent(); }
   ```
3. In `Index.html` `<head>`, **after** your own `<style>`:
   ```html
   <?!= include('BrandStyles') ?>
   ```
4. Use the markup:
   ```html
   <div class="sru-brandbar"><div class="in">
     <img src="SRU_LOGO"> <img src="ICTD_LOGO">
   </div></div>
   <section class="hero sru-tech-bg"> … title … </section>
   <footer class="sru-footer sru-tech-bg-dark"><div class="in">
     <div class="sru-support"><b>For Support:</b> Dial <span class="star">*</span> <span class="or">or</span> Send email to: <a href="mailto:servicedesk@sr.edu.sa">servicedesk@sr.edu.sa</a></div>
     <a class="sru-itoc" href="https://ictsru.github.io/ITOC/#forms" target="_blank" rel="noopener"><img src="ITOC_LOGO"></a>
   </div></div></footer>
   ```
   Logos can be embedded as base64 (common in Apps Script) or any reachable URL.

## Optional — single source (`BrandStyles.gs`)
If you want repo edits to propagate automatically, add `BrandStyles.gs` and use
`<style><?!= brandCss_() ?></style>` instead of the include. It fetches the published
CSS, caches it 6 h, and falls back to the embedded copy on failure. Requires the
`script.external_request` scope.

## Updating
Embedded projects carry their own copy — after changing the kit, re-paste `BrandStyles.html`
(or redeploy if you use `brandCss_()`, which refreshes within 6 hours).
