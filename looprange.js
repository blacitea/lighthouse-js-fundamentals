const range = function ( start, end, step) {
  let result = [];
  if ( typeof(start) !== undefined && typeof(end) !== undefined && typeof(step) !== undefined) {
  if ( end > start && step > 0) {
  for ( let i = start; i <= end; i += step) {
    result.push(i);
  }
}
} 
return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));