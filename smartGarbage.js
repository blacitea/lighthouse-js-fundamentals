const smartGarbage = function (trash, bins) {
  // Array with all the keys from bins
  let keys = Object.keys(bins);
  // Switch statement to compare trash with keys
  switch(trash){
    case keys[0]:
      bins[keys[0]] += 1;
      break;
    case keys[1]:
      bins[keys[1]] += 1;
      break;
    case keys[2]:
      bins[keys[2]] += 1; 
  }
  //return the updated bins
  return bins;
}

console.log(smartGarbage('waste', {waste:1, recycling:2, compost:3}));
