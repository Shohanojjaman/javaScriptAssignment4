const address = {
  street: 10,
  house: '15A',
  society: 'Earth',
};

/**
 * This function for print object's values.
 * @param {object} obj - User inputted object.
 * @returns {string} - Object's values.
 */
function findAddress(obj) {
  if (typeof obj !== 'object') {
    return 'please provide me a object.';
  }
  const street = address.street || '__';
  const house = address.house || '__';
  const society = address.society || '__';
  return street + ', ' + house + ', ' + society;
}

console.log(findAddress(address));
