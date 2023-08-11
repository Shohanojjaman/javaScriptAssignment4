const numbers = [2, 9];
/**
 * This function for sort the provided array.
 * @param {array} arr - User inputted array.
 */
function sortMaker(arr) {
  if (arr.length > 2 || arr[0] < 0 || arr[1] < 0) {
    return 'Invalid input.';
  }
  if (arr[0] < arr[1] || arr[0] > arr[1]) {
    return arr.sort(function (a, b) {
      return a - b;
    });
  } else if (arr[0] === arr[1]) {
    return 'equal';
  }
}
console.log(sortMaker(numbers));
