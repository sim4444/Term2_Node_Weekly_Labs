const rect = (l, b, callback) => {
  if (l <= 0 || b <= 0) {
    return callback(
      new error("Rectangle dimensions must be greater than zero"),
      null
    );
  }
  callback(null, {
    area: l * b,
    perimeter: 2 * (l + b),
  });
};

module.exports = { rect };
