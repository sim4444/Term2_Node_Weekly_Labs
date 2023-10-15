function squareRoot(value) {
  result = Math.sqrt(value);
  return result;
}

function square(value) {
  result = Math.pow(value, 2);
  // or result = value*value
  return result;
}

function distance(num1, num2, num3, num4) {
  return squareRoot(square(num2 - num1) + square(num4 - num3));
}

module.exports = { distance };
