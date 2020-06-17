const amounts = [61.00, 52.25, 112.99, 5.00];


// Sum of array - amounts with a for loop

let total = 0;

for ( let i = 0 ; i < amounts.length ; i ++){
  total += amounts[i];
}

console.log(`Order total is ${total}`);

// Sum of array - amounts with a for....of loop

let newTotal = 0;

for ( amount of amounts) {
  newTotal += amount;
}

console.log("Order total is", newTotal);