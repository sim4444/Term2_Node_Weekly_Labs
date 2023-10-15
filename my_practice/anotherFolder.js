function squareFunc(value){
    return Math.pow(value, 2)
    // or we can write return value * value
}

function squareRootFunc(value){
    return Math.sqrt(value)
}

function distanceFunc(num1, num2, num3, num4){
    return squareRootFunc(squareFunc(num2 - num1) + squareFunc(num4 - num3))
}

module.exports = {distanceFunc}