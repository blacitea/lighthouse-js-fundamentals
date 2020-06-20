const judgeVegetable = function (vegetables, metric) {
  // Select the name & value of the metric to be used
  let compare = [];
  for ( let i = 0; i < vegetables.length; i++) {
    compare.push( { 
      name: vegetables[i]['submitter'],
      metric: vegetables[i][metric]
    })
  }
  // Testing console.log(compare);
  // Sort the selected information cased on metric value
  compare.sort(function(a, b){
    return a.metric - b.metric;
  })
  // Testing console.log(compare);
  // Return the name paired with the highest metric
  // Testing console.log(compare[compare.length - 1]['name']);
  return compare[compare.length - 1]['name'];
  
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)