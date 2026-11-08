// Deliberately a classic script: module parse/import failures must not strand
// visitors at a loading indicator. No telemetry or automatic reload loop.
(function () {
  var failed = false;
  function fail(error) {
    if (failed) return;
    failed = true;
    var message = error && error.message ? error.message : String(error || 'Unknown startup error');
    var loading = document.getElementById('viewer-loading');
    if (loading) loading.hidden = true;
    var oldError = document.getElementById('viewer-error');
    if (oldError) oldError.hidden = true;
    var panel = document.createElement('div');
    panel.id = 'demo-startup-error';
    panel.setAttribute('role', 'alert');
    panel.style.cssText = 'position:absolute;inset:0;z-index:20;overflow:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;background:#16212e;color:#edf2f6;text-align:center;font:14px/1.5 system-ui,sans-serif;';
    var title = document.createElement('strong');
    title.textContent = /WebGL|graphics context/i.test(message) ? '3D graphics are unavailable in this browser.' : 'The scene could not start.';
    var note = document.createElement('p');
    note.textContent = /WebGL|graphics context/i.test(message) ? 'Please update your browser, or open this page in another browser with WebGL 2 support.' : 'Please retry. If it still fails, share the details below.';
    var details = document.createElement('details');
    var summary = document.createElement('summary');
    summary.textContent = 'Technical details';
    var text = document.createElement('pre');
    text.style.cssText = 'white-space:pre-wrap;word-break:break-word;text-align:left;max-width:560px;font-size:11px;';
    text.textContent = message + '\n\n' + navigator.userAgent;
    details.appendChild(summary); details.appendChild(text);
    var retry = document.createElement('button'); retry.type = 'button'; retry.textContent = 'Retry';
    retry.onclick = function () { location.reload(); };
    panel.appendChild(title); panel.appendChild(note); panel.appendChild(retry); panel.appendChild(details);
    (document.querySelector('.viewer-stage') || document.body).appendChild(panel);
  }
  window.galleryDemo = {fail: fail};
  window.addEventListener('error', function (event) { if (event.error || event.message) fail(event.error || event.message); });
  window.addEventListener('unhandledrejection', function (event) { fail(event.reason); });
  document.addEventListener('webglcontextlost', function (event) {
    event.preventDefault(); fail(new Error('The graphics context was lost. Close other graphics-heavy tabs and retry.'));
  }, true);
}());
