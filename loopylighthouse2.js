const loopyLighthouse = function(range, multiples, words) {
// range = array of 2 numbers, start & finish
// multiples = array of 2 numbers, multiples to be replaced
// words = array of 2 strings, words for replacement

// set the function to loop between range
for(let l = range[0]; l <= range[1]; l ++) {
// if statement to determine if replacement occure
  if( l % multiples[0] === 0 & l % multiples[1] === 0) {
    console.log(words[0] + words[1]);
  } else if( l % multiples[0] === 0) {
    console.log(words[0]);
  } else if( l % multiples[1] === 0) {
    console.log(words [1]);
  } else {
    console.log(l);
  }
}
}

// testing
loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"]);