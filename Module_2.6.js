console.log(" ");
// 2.6 OBJECTS - Part One - Activity One
console.log("**2.6 OBJECTS - Activity One**")
console.log(" ");
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

// set up responses to which alarm notice is required
const wakeUp = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am",
};

// New loop to decide which alarm response is needed
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
console.log(" ");

const coffeeShop = {
    branch: "Chester",
    drinks: {
      cappuccino: 3.90,
      cortado: 3.20,
      latte: 3.65,
      tea: 2.90
    },
    food: {
      sandwich: 4.15,
      panini: 3.95,
      cookie: 1.80,
      crisps: 1.20
    },
    finalTotal: (order, type) => { // A function to set an array of the products (items) that the customer has ordered, which updates a running total cost looping however many times there are items in the order array. The price is pulled depending on the type of order (food or drink).
      const items = order;
      let totalCost = 0;
  
      items.forEach((item) => {
        const price = type[item];
        totalCost += price;
      });
  
      return totalCost;
    }
};

// Set the example food and drinks orders
let drinkOrder = ["cortado", "cappuccino", "tea"];
let foodOrder = ["cookie", "crisps", "panini"];

// Set the total costs for food and drinks and then a total cost for everything, and output to the console
let drinksCost = coffeeShop.finalTotal(drinkOrder, coffeeShop.drinks);
let foodCost = coffeeShop.finalTotal(foodOrder, coffeeShop.food);
let totalBill = drinksCost + foodCost;
  
console.log(`Hi! Thanks for visiting Costa ${coffeeShop.branch}.\n\nYou ordered: ${drinkOrder.join(', ')} and ${foodOrder.join(', ')}.\n\nThe total cost for your order comes to: £${totalBill}.`); // Added in the join function to display the commas correctly in the output

  
console.log(" ")
console.log(" ")
  