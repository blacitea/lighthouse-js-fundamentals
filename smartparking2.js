const whereCanIPark = (spots, vehicle) => {
  let availableSpot = [0,0];
  for ( y = 0 ; y < spots.length; y ++) {
    for ( x = 0; x < spots[y].length; x ++) {
      switch (spots[y][x]){
        case 'R':
          if ( vehicle === 'regular' || vehicle === 'small' || vehicle === 'motorcycles') {
            availableSpot[0] = x;
            availableSpot[1] = y;
            return availableSpot;
          }
          break;
        case 'S':
          if ( vehicle === 'small' || vehicle === 'motorcycles') {
            availableSpot[0] = x;
            availableSpot[1] = y;
            return availableSpot;
          }
          break;
        case 'M':
          if ( vehicle === 'motorcycles') {
            availableSpot[0] = x;
            availableSpot[1] = y;
            return availableSpot;
          }
          }  
      }
    }
    return false;
  }



let carPark1 = [
  ['r', 'm', 's', 'M', 's', 's'],
  ['s', 'r', 's', 's', 'r', 'm'],
  ['s', 'm', 's', 's', 'r', 'm'],
  ['S', 'r', 's', 'm', 'R', 'm'],
  ['S', 'R', 's', 'm', 'r', 's'],
  ['s', 'r', 'S', 'M', 'M', 's']
];

console.log(whereCanIPark(carPark1, 'small'));
console.log(whereCanIPark(carPark1, 'regular'));
console.log(whereCanIPark(carPark1, 'motorcycles'));
console.log(whereCanIPark(carPark1, 'bicycle'));