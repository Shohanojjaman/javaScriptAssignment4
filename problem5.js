const money = [1, 5, 5];
/**
 *
 * @param {array} changeArray
 * @param {number} totalDue
 * @returns {Boolean}
 */
function canPay(changeArray, totalDue) {
  if (typeof changeArray !== 'object' || typeof totalDue !== 'number') {
    return 'Invalid input.';
  } else if (changeArray.length < 1) {
    return 'Your provided array in empty';
  }

  let totalMoney = changeArray.reduce((total, Value) => (total += Value));
  if (totalMoney >= totalDue) {
    return true;
  } else if (totalMoney < totalDue) {
    return false;
  }
}
console.log(canPay(money, 10));
