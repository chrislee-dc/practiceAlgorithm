/**
 * @typedef {((...args: Array<unknown>) => void) & {
 *   cancel: () => void,
 *   flush: () => void,
 * }} DebouncedFunction
 */

/**
 * @param {Function} func
 * @param {number} [wait=0]
 * @return {DebouncedFunction}
 */
export default function debounce(func, wait) {
  let timeoutId = null;
  let newArgs = null;
  let context = null;
  

  function cancel() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function flush() {
    if(!timeoutId) return;
    cancel();
    func.apply(context, newArgs)
  }

  function fn(...args) {
    newArgs = args;
    context = this;
    cancel()
    timeoutId = setTimeout(() => {
      flush()
    }, wait);
  }

  fn.cancel = cancel;
  fn.flush = flush;

  return fn
}

