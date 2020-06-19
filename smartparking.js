const whereCanIPark = (spots, vehicle) => {
  // Code here!
  
  
  for ( r = 0; r < spots.length; r ++) {
    for ( col = 0; col < spots[r].length; col ++) {

      // regular cars
      if ( vehicle === 'regular' && spots[r][col] === 'R') {
        return [ col, r];
      } 
      
      // small cars
      else if ( vehicle === 'small' && (spots[r][col] === 'S' | vehicle === 'small' && spots[r][col] === 'R')) {
        return [ col, r];
      } 
      
      // motorcycles
      else if ( 
      vehicle === 'motorcycles' && spots[r][col] === 'M' | 
      vehicle === 'motorcycles' && spots[r][col] === 'S' |
      vehicle === 'motorcycles' && spots[r][col] === 'R' 
      ) {
        return [ col, r];
      }
    }
  }
    return false;
}


const spots = [
  ['r', 'm', 's', 's', 'r', 's'],
  ['s', 'r', 's', 's', 'r', 'm'],
  ['s', 'm', 's', 's', 'r', 'm'],
  ['S', 'r', 's', 'm', 'R', 'm'],
  ['S', 'R', 's', 'm', 'r', 's'],
  ['s', 'r', 'S', 'M', 'M', 's']
];

console.log(whereCanIPark(spots, 'motorcycles'));