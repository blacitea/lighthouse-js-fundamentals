const raining = true;
const cold = "";
const temperature = -1;

/* Let try to do better 
if(raining){
  console.log("Don't forget your umbrella");
}

if(cold){
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");
*/


if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// Are you eligible to vote? AND && logical operator

const isCitizen = true;
const age = 21;

if ( isCitizen && age > 18){
  console.log("You are eligible to vote.");
}

// Is the weather okay to go out? OR || logical operator

if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}

// Is it raining? NOT ! logical operator

if (!raining) {
  console.log("Leave your umberlla at home!");
}