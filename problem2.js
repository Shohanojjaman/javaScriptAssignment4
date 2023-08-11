/**
 *
 * @param {string} string1 - User inputted string
 * @param {string} string2 - User inputted string
 * @returns {boolean} True / False
 */
function matchFinder(string1, string2) {
  let match = string1.includes(string2);
  return match;
}
console.log(matchFinder('John Doe', 'ohn'));
