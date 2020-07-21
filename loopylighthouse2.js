const loopyLighthouse = function(range, multiples, words) {
  // range = array of 2 numbers, start & finish
  // multiples = array of 2 numbers, multiples to be replaced
  // words = array of 2 strings, words for replacement

  // set the function to loop between range
  for (let l = range[0]; l <= range[1]; l++) {
    // a new variable to store the return string
    let result = "";
    // if statement to determine if replacement occure
    if (l % multiples[0] === 0) {
      result += words[0];
    }
    if (l % multiples[1] === 0) {
      result += words[1];
    }
    if (!result) {
      result += l;
    }
    console.log(result);
  }
};

// testing
loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"]);