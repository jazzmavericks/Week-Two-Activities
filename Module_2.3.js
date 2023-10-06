// 2.3 IF ELSE SWITCH - Activity One with Stretch

console.log("**2.3 IF ELSE SWITCH - Activity One with Stretch**")
console.log(" ");

// Set test variables
let age = 18;
let country = "USA"

// Find out if the variables allow true or false
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

// Set up a switch with a variety of toppings, and depending if they match the test input, output a response
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
console.log("**2.3 IF ELSE SWITCH - Activity Six**")
console.log(" ");

let time = 17;
let placeOfWork = "Google Headquarters";
let townOfHome = "My house";


if (time >= 8 && time < 9) {
  console.log(`At ${time}:00 I'm commuting.`);
} else if (time >= 17 && time < 18) {
    console.log(`At ${time}:00 I'm commuting.`);
} else if (time > 9 && time < 17) {
  console.log(`At ${time}:00 I'm at ${placeOfWork}.`);
} else {
  console.log(`At ${time}:00, I'm at ${townOfHome}.`);
} 

console.log(" ");
console.log(" ");


// 2.3 IF ELSE SWITCH - Activity Seven
console.log("**2.3 IF ELSE SWITCH - Activity Seven**")
console.log(" ");

let characterString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let vowels = ['a', 'e', 'i', 'o', 'u'];

let foundVowels = [];

for (let i = 0; i < characterString.length; i++) {
    for (let x = 0; x < vowels.length; x++) {
        if (characterString[i] === vowels[x]) {
            foundVowels.push([i]);
            break;
        }
    }
}

console.log(`The final vowel in the string of characters is located at index: ${foundVowels[foundVowels.length - 1]}`);

console.log(" ");
console.log(" ");


// 2.3 IF ELSE SWITCH - Activity Eight
console.log("**2.3 IF ELSE SWITCH - Activity Eight**")
console.log(" ");

let word = "Moomin";
let firstLetter = word[0];
let lastLetter = word[word.length - 1];

if (firstLetter === lastLetter) {
    console.log(`Yay! The first letter of ${word} is the same as the last letter of ${word}!`);
    return true;
}
else {
    console.log(`Sadly, the first letter of ${word} is NOT the same as the last letter of ${word}!`);
}

console.log(" ");
console.log(" ");


// 2.3 IF ELSE SWITCH - Activity Nine
console.log("**2.3 IF ELSE SWITCH - Activity Nine**")
console.log(" ");

let num1 = 567;
let num2 = 988;
let sum = (num1 + num2);

let multiplied = (num1 * num2);


if (sum % 2 === 0) {
    console.log(`The sum of ${num1} and ${num2} is ${sum} - an even number.`);
}
else {
    console.log(`The sum of ${num1} and ${num2} is ${sum} - NOT an even number. Therefore, ${num1} multiplied by ${num2} is ${multiplied}`);
}

console.log(" ");
console.log(" ");