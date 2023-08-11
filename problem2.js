/**
 *
 * @param {string} string1 - User inputted string
 * @param {string} string2 - User inputted string
 * @returns {boolean} True / False
 */
function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Please provide me string.';
  }
  let match = string1.includes(string2);
  return match;
}
console.log(matchFinder('John Doe', 'ohn'));
