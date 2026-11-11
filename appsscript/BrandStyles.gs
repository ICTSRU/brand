/**
 * SRU Brand Kit v1.1 — OPTIONAL single-source styles for Apps Script.
 * ---------------------------------------------------------------------
 * Default is to EMBED BrandStyles.html (no network, fully reliable).
 * If you prefer the kit to stay single-source (edit the repo once, every
 * platform picks it up), use this instead: it fetches the published CSS
 * server-side, caches it 6 hours, and falls back to the embedded copy on
 * any failure. Needs the scope: https://www.googleapis.com/auth/script.external_request
 *
 *   In Index.html <head>, after your own <style>:
 *       <style><?!= brandCss_() ?></style>
 */
function brandCss_() {
  var cache = CacheService.getScriptCache();
  var hit = cache.get('sru_brand_css_v11');
  if (hit) return hit;
  var base = 'https://ictsru.github.io/brand/css/';
  var css = '';
  try {
    ['sru-shell.css', 'sru-tech-bg.css'].forEach(function (f) {
      var r = UrlFetchApp.fetch(base + f + '?v=1.1', { muteHttpExceptions: true, followRedirects: true });
      if (r.getResponseCode() === 200) css += '\n' + r.getContentText();
    });
  } catch (e) { css = ''; }
  if (!css.trim()) {
    // fallback to the embedded copy so the page is never unstyled
    return HtmlService.createHtmlOutputFromFile('BrandStyles').getContent()
      .replace(/^[\s\S]*?<style>/, '').replace(/<\/style>[\s\S]*$/, '');
  }
  try { cache.put('sru_brand_css_v11', css, 21600); } catch (e) {}
  return css;
}
