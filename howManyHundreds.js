const howManyHundreds = function (num) {
  let numOfContainer = Math.floor( num / 100);
  return numOfContainer
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(789));
console.log(howManyHundreds(201));
console.log(howManyHundreds(999));