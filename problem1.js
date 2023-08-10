function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'Please provide me a number.';
  }
  let cubeNumber = Math.pow(number, 3);
  return cubeNumber;
}
