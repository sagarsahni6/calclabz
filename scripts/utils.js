'use strict';

/**
 * Generates a stable numeric hash for a string.
 * @param {string} s
 * @returns {number}
 */
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Picks an item from an array based on a seed.
 * @param {Array} arr
 * @param {number} seed
 * @returns {*}
 */
function pick(arr, seed) {
  return arr[Math.abs(seed) % arr.length];
}

module.exports = {
  hash,
  pick
};
