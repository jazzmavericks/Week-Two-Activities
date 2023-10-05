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
console.log("**2.6 OBJECTS Part One - Activity Three**")
console.log(" ");

const person2 = {    
    name: "Mark",    
    age: 44,    
    faveTV: ["The Expanse", "Battlestar Galactica", "Better Call Saul", "Andor", "House of the Dragon", "Generation Kill"]};

for (let i = 0; i < person2.faveTV.length; i++) {    
    console.log(person2.faveTV[i]);
}

console.log(" ");
console.log(" ");


// 2.6 OBJECTS - Part Two - Activity One
console.log("**2.6 OBJECTS - Part Two - Activity One**")
console.log(" ");

const person3 = {    
    name: "Mark",    
    age: 44,    
    sayHi() {
        return `Hello! My name is ${this.name}`;
    }
}

console.log(person3.sayHi());

console.log(" ");
console.log(" ");


// 2.6 OBJECTS - Part Two - Activity Two
console.log("**2.6 OBJECTS - Part Two - Activity Two**")
console.log(" ");

const pet = {    
    name: "Gizmo",   
    typeOfPet: "Mogwai", 
    age2: 142, 
    colour: "White and Brown",   
    eat() {
        return `${this.name} is eating`;
    },
    drink() {
        return `${this.name} is drinking`;
    }
}

console.log(pet.eat());
console.log(pet.drink());

console.log(" ");
console.log(" ");


// 2.6 OBJECTS - Part Two - Activity Three
console.log("**2.6 OBJECTS - Part Two - Activity Three**")
console.log(" ");

const coffeeShop = {
    branch: "Chester",
    drinks: [["Latte", 2.75],["Cortado", 3.20],["Cappuccino", 2.90],["Flat White", 2.55],["Mocha", 3.10],["Chai Latte", 4.10]],
    food: [["Sandwich", 5.75],["Panini", 4.90],["Wrap", 4.25],["Cookie", 1.80],["Crisps", 1.10]],
    drinksOrdered() {},
    foodOrdered() {}
}

console.log(`Thanks for visiting Costa ${coffeeShop.branch}. Your order is: \n `)
console.log(" ")

for (let i = 0; i < coffeeShop.drinks.length; i++) {
    console.log(`${coffeeShop.drinks[[i][i]]} \n`);
    }