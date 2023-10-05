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