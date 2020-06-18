const finalPosition = function (moves) {
  // An array with the parade's location
  let position = [0, 0];
  // A for...of loop to go through each move from moves array
  for (let move of moves){
    // A switch statement to evalutate the move given
    switch (move){
      case "north":
        position[1] += 1;
        break;
      case "south":
        position[1] -= 1;
        break;
      case "east":
        position[0] += 1;
        break;
      case "west":
        position[0] -= 1;
        break;
    }
  }
  // Return a result
  return position;
}

// Testing the function
const route = ['north', 'north', 'east', 'east', 'north', 'east','north'];

console.log(finalPosition(route));

