import {BufferAttribute, InstancedBufferAttribute} from 'three';
// Touch devices share their graphics memory with a much smaller browser process.
const budgetQuery = typeof location === 'undefined' ? null : new URLSearchParams(location.search);
export const compactDevice = (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches)
  || (budgetQuery?.has('qa') && budgetQuery.get('budget') === 'mobile');

// A divisor larger than every instance count broadcasts one exact tuple to
// every vertex/instance. This avoids repeating constant ink/bounds data millions
// of times, without changing a triangle, color, or shader value.
export function constantAttribute(values, size) {
  return new InstancedBufferAttribute(new Float32Array(values), size, false, 2147483647);
}
export function displayAttribute(array, size, mutable = false) {
  if (compactDevice && array.length >= size) {
    let constant = true;
    for (let i = size; i < array.length; i++) if (!Object.is(array[i], array[i % size])) { constant = false; break; }
    if (constant) return constantAttribute(array.subarray(0, size), size);
  }
  // A small raw view must not keep an entire decoded download chunk alive.
  const detached = mutable || array.byteLength !== array.buffer.byteLength ? array.slice() : array;
  return new BufferAttribute(detached, size);
}
