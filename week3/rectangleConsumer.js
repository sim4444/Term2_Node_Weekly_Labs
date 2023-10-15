const {rect} = require("./rectangle");

const solveRect = (l, b) => {
    rect(l, b, (err, rectangle) => {
    if (err) {
      return console.log(err);
    }
    console.log(
      `The area is ${rectangle.area} and perimeter is ${rectangle.perimeter}`
    );
  });
};
solveRect(-1, 4)