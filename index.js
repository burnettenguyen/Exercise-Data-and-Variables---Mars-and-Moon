// 1. Declare and assign the variables here:
let shuttleName = "Determination";
let shuttleSpeed = 17500
let distanceToMars = 225000000
let distanceToMoon = 384400
let milesPerKm = 0.621


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distancetoMoon);
console.log(typeof milesPerKm)

// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMars * milesPerKm
let hoursToMars = shuttleSpeed / milesToMars
let daysToMars = hoursToMars / 24

let milesToMoon = distanceToMoon * milesPerKm
let hoursToMoon = shuttleSpeed / milesToMoon
let daysToMoon = hoursToMoon / 24

// Code your solution to exercise 5 here:
console.log(shuttleName,"will take",daysToMars,"days to reach Mars.")

console.log(shuttleName,"will take",daysToMoon,"days to reach the Moon.")