// 2.1 DOT NOTATION - Activity One

// I use cd .. to change the directory up a level. I use dir to check what files or folders are located within that folder, and then to choose a folder, I use cd "Day 2" for example (if there is a space in the filename).

// To create a new folder, I use mkdir example where example is the foldername

// To create a new empty file, I use ni example.html



// 2.1 DOT NOTATION - Activity Two

console.log("**2.1 DOT NOTATION - Activity Two**")
console.log(" ");

console.log(" ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log(" ");
console.log(" ");


// 2.1 DOT NOTATION - Activity Two Stretch

console.log("**2.1 DOT NOTATION - Activity Two Stretch**")
console.log(" ");

let columns = ["   |   |   ", "   |   |   ", "   |   |   "]
let rows = ["-----------", "-----------"]

for (let i = 0; i< 3; i++){
    console.log(columns[i]);
}
for (let j = 0; j< 1; j++){
        console.log(rows[j]);
}
for (let i = 0; i< 3; i++){
    console.log(columns[i]);
}
for (let j = 0; j< 1; j++){
        console.log(rows[j]);
}
for (let i = 0; i< 3; i++){
    console.log(columns[i]);
}

console.log(" ");
console.log(" ");


// 2.2 VARIABLES & OPERATORS - Activity One

console.log("**2.1 DOT NOTATION - Activity One**")
console.log(" ");

let details = ["Bob Ross", "52", "Vandyke Brown" ];

console.log(`Meet ${[0]}, they are ${1} years old. Their favourite colour is ${2}`)

console.log(" ");
console.log(" ");

// 2.2 VARIABLES & OPERATORS - Activity Two

console.log("**2.1 DOT NOTATION - Activity Two**")
console.log(" ");


// 2.2 VARIABLES & OPERATORS - Activity Three

console.log("**2.1 DOT NOTATION - Activity Three**")
console.log(" ");


// 2.2 VARIABLES & OPERATORS - Activity Four

console.log("**2.1 DOT NOTATION - Activity Four**")
console.log(" ");




// 2.3 IF ELSE SWITCH - Activity One with Stretch

console.log("**2.3 IF ELSE SWITCH - Activity One with Stretch**")
console.log(" ");

let age = 18;
let country = "USA"

if (age < 18 && country == "United Kingdom") {
    console.log ("You aren't old enough")
}

else {
    console.log("Yes I can serve you!")
}

    
console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Two

console.log("**2.3 IF ELSE SWITCH - Activity Two**")
console.log(" ");

let ingredient = "Pepperoni";

switch (ingredient) {
    case "Pepperoni":
    case "Chicken & Peppers":
    case "Meatball":
        console.log("That's a pretty tasty pizza!!");
        break;
    case "Ham & Pineapple":
        console.log("Mmmmmmmmm - the best!");
        break;
    case "Veggie":
    case "Cheese & Tomato":
        console.log("No thanks!!!");
        break;
    default:
        console.log("I'll need to try that one!");
}


    
console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Three

console.log("**2.3 IF ELSE SWITCH - Activity Three**")
console.log(" ");

let password = "mypassword";

let numberOfLetters = (password.length);

if (numberOfLetters < 8) {
    console.log("That password is not valid");
}

else {
    console.log("Congratulations - that is a valid password");
}

    
console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Three - Stretch

console.log("**2.3 IF ELSE SWITCH - Activity Three - Stretch**")
console.log(" ");

let num = 37;

if (num % 3 === 0 || num % 5 === 0) {
    console.log(num + " is divisible by either 3 or 5");
}
else {
    console.log(num + " is not divisible by 3 or 5");
}

    
console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Four

console.log("**2.3 IF ELSE SWITCH - Activity Four**")
console.log(" ");

let number = 30;

switch (true) {
    case (number % 5 === 0) && (number % 3 === 0):
        console.log("Fizz Buzz");
        break;
    case (number % 3) === 0:
    console.log("Fizz");
        break;
    case (number % 5) === 0:
        console.log("Buzz");
        break;
    default:
        console.log(number)
}


console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Five

console.log("**2.3 IF ELSE SWITCH - Activity Five**")
console.log(" ");

let num3 = 4003;

let numString = num3.toString();

let reversedNumber = numString.split("").reverse("").join("");

switch (true) {
    case num3 == reversedNumber:
        console.log("The number " + numString + " IS a palindrome!");
        break;
    default:
        console.log("The number " + numString + " is NOT a palindrome!");  
}

    
console.log(" ");
console.log(" ");



// 2.3 IF ELSE SWITCH - Activity Six

let time = "7";
let placeOfWork = "I'm at work";
let townOfHome = "I'm at home";


// 2.3 IF ELSE SWITCH - Activity Seven


// 2.3 IF ELSE SWITCH - Activity Eight


// 2.3 IF ELSE SWITCH - Activity Nine





// 2.4 ARRAYS AND LOOPS - Part One - Activity One and Stretch

console.log("**2.4 ARRAYS AND LOOPS - Part One - Activity One and Stretch**")
console.log(" ");

let faveSongs = ["Buddy Holly", "Fortunate Son", "Midnight In A Perfect World"];

faveSongs.push("Regulate");
faveSongs.push("Wake Up");

console.log(faveSongs);

faveSongs.pop();

console.log(faveSongs);

    
console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part One - Activity Two

console.log("**2.4 ARRAYS AND LOOPS - Part One - Activity Two**")
console.log(" ");

let originalNumbers = [1, 4, 9, 16];

let doubledNumbers = originalNumbers.map((number) => number * 2);

console.log(doubledNumbers);

    
console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity One

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity One**")
console.log(" ");

let faveFilms = ["In the Heat of the Night", "Stand By Me", "Robocop", "LOTR", "Shaun of the Dead"];

faveFilms.push("ESB");
faveFilms.push("Miami Vice");

for (let i = 0; i< faveFilms.length; i++){
        console.log(faveFilms[i]);
}

    
console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity Two

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Two**")
console.log(" ");

let loopCount = "50";
let allNumbers = [];

for (let i = 0; i< loopCount; i++){
    allNumbers.push(Math.ceil(Math.random() * 10));
    console.log(allNumbers[i]);
}
    

console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity Three

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Three**")
console.log(" ");

console.log("Let's count from 0 to 9!");
console.log(" ");

let counter3 = [];

for (let i = 0; i< 10; i++){
    counter3.push(i);
    console.log(counter3[i]);
}
    
console.log(" ");
console.log("End of 0 to 9 in normal, time for it backwards!");
console.log(" ");
let counterReversed = counter3.reverse();
    for (let i = 0; i< 10; i++) {
        console.log(counterReversed[i]);
    }
    

console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity Four

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Four**")
console.log(" ");

let comedyFilms = ["Hangover", "Clerks", "Zoolander", "Ghostbusters", "Anchorman"];

    for (let c = 0; c < comedyFilms.length; c++){
         console.log(comedyFilms[c]);
    }
    if (comedyFilms [3] == "Ghostbusters") {
        console.log("Yaaaaaay - Ghostbusters!!");
    }
    else {
        console.log("Boo! We want GHOSTBUSTERS!!!");
    }
    

console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity Five

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Five**")
console.log(" ");

let loopCounter = "6";
let allRandomNumbers = [];

for (let i = 0; i< loopCounter; i++) {
    allRandomNumbers.push(Math.ceil(Math.random() * 30));
    switch (true) {
        case (allRandomNumbers[i] % 7 === 0):
            console.log(`${allRandomNumbers[i]} - is divisible by 7`);
            break;
        default:
            console.log(`${allRandomNumbers[i]} - is not divisible by 7`);
    }
}


console.log(" ");
console.log(" ");


// 2.4 ARRAYS AND LOOPS - Part Two - Activity Six TEST

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Six TEST**")
console.log(" ");

let bobsFollowers2 = ["zach", "slater", "screech", "lisa"];
let hannahsFollowers2 = ["lisa", "kelly", "zach", "slater"];
let mutualFollowers2 = [];

for (let i = 0; i< bobsFollowers2.length; i++) {
    if (bobsFollowers2[i] == hannahsFollowers2[0]){
        mutualFollowers2.push(bobsFollowers2[i]);
    }
}
for (let i = 0; i< bobsFollowers2.length; i++) {
    if (bobsFollowers2[i] == hannahsFollowers2[1]){
        mutualFollowers2.push(bobsFollowers2[i]);
    }
}
for (let i = 0; i< bobsFollowers2.length; i++) {
    if (bobsFollowers2[i] == hannahsFollowers2[2]){
        mutualFollowers2.push(bobsFollowers2[i]);
    }
}
for (let i = 0; i< bobsFollowers2.length; i++) {
    if (bobsFollowers2[i] == hannahsFollowers2[3]){
        mutualFollowers2.push(bobsFollowers2[i]);
    }
}

console.log(mutualFollowers2);


console.log(" ");
console.log(" ");



// 2.4 ARRAYS AND LOOPS - Part Two - Activity Six

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Six**")
console.log(" ");

let bobsFollowers = ["zach", "slater", "screech", "lisa"];
let hannahsFollowers = ["lisa", "kelly", "zach", "jessie"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let x = 0; x < hannahsFollowers.length; x++) {
        if (bobsFollowers[i] === hannahsFollowers[x]) {
            mutualFollowers.push(bobsFollowers[i]);
            break;
        }
    }
}

console.log(mutualFollowers);


console.log(" ");
console.log(" ");


// 2.4 ARRAYS AND LOOPS - Part Two - Activity Seven

console.log("**2.4 ARRAYS AND LOOPS - Part Two - Activity Seven**")

console.log(" ");

console.log("**For Loops**")
console.log(" ");
console.log("You define how many times it loops, why it keeps looping, and the iteration in one area, which keeps it tidy - and it works better with arrays. ");
console.log("However, it can be more complicated than other methods of looping, especially for simple loops. It also can't repeat endlessly until a condition is met if you don't know how many iterations are needed. ");
console.log(" ");
console.log(" ");

console.log("**While Loops**")
console.log(" ");
console.log("A more simple method of looping, it is also perfect for looping indefinitely. ");
console.log("However, this can also lead to infinite looping, which isn't the best. It also needs to be initialised and iterated outside of the loop, which could be messy. ");
console.log(" ");
console.log(" ");

console.log("**Do...While Loops**")
console.log(" ");
console.log("Usually best for geting information from a user, as it executes at LEAST once, regardless of what the original condition was. ");
console.log("Not commonly used, and like 'while' loops, you have to set up the loop variables outside the loop. ");
console.log(" ");
console.log(" ");


// 2.5 FUNCTIONS - Part One - Activity One

console.log("**2.5 Functions - Part One - Activity One**")

console.log(" ");


console.log(" ");
console.log(" ");



// 2.5 FUNCTIONS - Part Two - Activity One

console.log("**2.5 Functions - Part Two - Activity One**")

console.log(" ");


console.log(" ");
console.log(" ");



// 2.5 FUNCTIONS - Part Two - Activity Two

console.log("**2.5 Functions - Part Two - Activity Two**")

console.log(" ");


console.log(" ");
console.log(" ");



// 2.5 FUNCTIONS - Part Two - Activity Three

console.log("**2.5 Functions - Part Two - Activity Three**")

console.log(" ");

let availableFunds = 100;

const checkPin = (pin, amount) => {
    if (pin == 1234) {
        console.log("Pin is correct")
        withdrawCash(amount);
    }
}

const withdrawCash = (amount) => {
    if (checkBalance(amount)) {
        console.log(`£${amount} has been withdrawn. New balance = £${availableFunds}`);
        availableFunds -= amount;
    }
    else {
        console.log(`£${amount} cannot be withdrawn - balance insufficient`);
    }
}

const checkBalance = (amount) => {
    if (amount <= availableFunds) {
        return true;
    }
    else {
        return false;
    }
}

checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)
checkPin(1234, 10)

console.log(" ");
console.log(" ");


// 2.6 OBJECTS - Activity One

console.log("**2.6 OBJECTS - Activity One**")

console.log(" ");

let example = "name";

const person = {
    name: "Mark",
    age: 44
};

console.log(person.name);
console.log(person[`name`]);


let offer = "none";
let time2 = 1700;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry - no offers avaiable"
};

if (time2 < 1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} 

else if (time2 < 1500) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}

else {
    offer = cafe.noOffer;
    console.log(cafe.noOffer);
}