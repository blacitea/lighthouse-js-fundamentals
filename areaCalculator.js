// function for Rectangle
const calculateRectangleArea = function (length, width) {
  // check if input is negative
  if (length < 0 | width < 0){
    return undefined;
  // actual calculation of area
  } else {
    let area = length * width;
  // return an answer
    return area;
  } 
}

// Testing for rectangle
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

// function for triangle
const calculateTriangleArea = function (base, height) {
  if (base < 0 | height < 0) {
    return undefined;
  } else {
    return ( base * height / 2);
  }
}

// Testing for triangle
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

// function for circle
const calculateCircleArea = function (radius) {
  if (radius < 0) {
    return undefined;
  } else {
    return (Math.PI * Math.pow(radius, 2));
  }
}

// Testing for circle
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined