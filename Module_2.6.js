console.log(" ");
// 2.6 OBJECTS - Part One - Activity One
console.log("**2.6 OBJECTS - Activity One**")
console.log(" ");

let example = "name";

const person = {
    name: "Mark",
    age: 44
};

console.log(person.name);
console.log(person[`name`]);

console.log(" ");
console.log(" ");



// 2.6 OBJECTS - Part One - Activity Two
console.log("**2.6 OBJECTS - Part One - Activity Two**")
console.log(" ");


let day = "Saturday";
let alarm = "That is not a day of the week.";

// Change the first letter to lower case and validate day of the week
day = day.toLowerCase();
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// Function to change the first letter back to a capital for output
function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }
  
const capitalizedDay = capitalizeFirstLetter(day);

const wakeUp = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am",
};

for (let i = 0; i < days.length; i++) {
    if (day == days[i]) {
        if (day == "saturday" || day == "sunday"){
            alarm = wakeUp.weekendAlarm;
            console.log(`Don't worry - it's ${capitalizedDay}! ${alarm}. Have a nice lie in :)`);
        } 
        else {
            alarm = wakeUp.weekdayAlarm;
            console.log(`Work to go to! ${alarm}`);
        }
    }
}

console.log(" ");
console.log(" ");


// 2.6 OBJECTS - Part One - Activity Three
// console.log("**2.6 OBJECTS Part One - Activity Three**")
// console.log(" ");


// 2.6 OBJECTS - Part Two - Activity One
// console.log("**2.6 OBJECTS - Part Two - Activity One**")
// console.log(" ");


// 2.6 OBJECTS - Part Two - Activity Two
// console.log("**2.6 OBJECTS - Part Two - Activity Two**")
// console.log(" ");


// 2.6 OBJECTS - Part Two - Activity Three
// console.log("**2.6 OBJECTS - Part Two - Activity Three**")
// console.log(" ");