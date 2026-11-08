// These shims run before the native runtime modules. Keep the native APIs when
// available, including the iPhone path; older embedded Chromium needs these.
import 'core-js/actual/structured-clone.js';
import 'core-js/actual/array/at.js';
import 'core-js/actual/object/has-own.js';
import 'core-js/actual/string/replace-all.js';

if (typeof AbortSignal !== 'undefined' && !AbortSignal.prototype.throwIfAborted) {
  Object.defineProperty(AbortSignal.prototype, 'throwIfAborted', {
    configurable: true, writable: true,
    value() { if (this.aborted) throw this.reason || new DOMException('The operation was aborted.', 'AbortError'); }
  });
}
