// 2.2 VARIABLES & OPERATORS - Activity One

console.log("**2.1 DOT NOTATION - Activity One**")
console.log(" ");

// Set up data into an array
let details = ["Bob Ross", "52", "Vandyke Brown" ];

//Output data from the array as a string
console.log(`Meet ${details[0]}. He is ${details[1]} years old. His favourite colour is ${details[2]}.`)

console.log(" ");
console.log(" ");

// 2.2 VARIABLES & OPERATORS - Activity Two with Stretch

console.log("**2.1 DOT NOTATION - Activity Two**")
console.log(" ");

// Set up variables for today
let breakfast = ["Cornflakes"];
let lunch = ["Eggs on toast"];
let dinner = ["Spaghetti Bolognaise"];

// Output the variables as part of a string
console.log(`Hi! Yesterday for breakfast I had ${breakfast}. Then, at lunch, I had ${lunch}. For dinner, I had ${dinner}.`)
console.log(" ");

// Update the variables to new values
breakfast = "Coco Pops";
lunch = "Ramen Noodles";
dinner = "Tikka Masala"

// Outout the new variables as part of a string
console.log(`Tomorrow for breakfast I will have ${breakfast}. Then, at lunch, I plan to have ${lunch}. For dinner, I feel like ${dinner}.`)

console.log(" ");
console.log(" ");



// 2.2 VARIABLES & OPERATORS - Activity Three

console.log("**2.1 DOT NOTATION - Activity Three**")
console.log(" ");

// Set today's date and my birthday's date
let today = new Date();
let birthday = new Date(2024, 6, 29); //month is back one due to 0 index

// Calculate time remaining between today and my birthday
let daysToGo = birthday - today;

// Convery milliseconds into days
let daysUntilBirthday = Math.ceil(daysToGo / (1000 * 60 * 60 * 24));

// Output days to go
console.log(`There are ${daysUntilBirthday} days to go until my birthday.`);

console.log(" ");
console.log(" ");


// 2.2 VARIABLES & OPERATORS - Activity Four

console.log("**2.1 DOT NOTATION - Activity Four**")
console.log(" ");

// Asssign varaibles for each space
let space1 = 'x';
let space2 = 'o';
let space3 = ' ';
let space4 = 'x';
let space5 = 'x';
let space6 = ' ';
let space7 = 'o';
let space8 = ' ';
let space9 = ' ';

// set up arrays of variables for the board layout
let columns = [" ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " "];
let rows = ["---------------------"];

// Output the space variables into the board
console.log(`${columns[0]} ${space1} ${columns[2]} ${columns[3]} ${columns[4]} ${space2} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);
console.log(`${rows}`);
console.log(`${columns[0]} ${space4} ${columns[2]} ${columns[3]} ${columns[4]} ${space5} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);
console.log(`${rows}`);
console.log(`${columns[0]} ${space7} ${columns[2]} ${columns[3]} ${columns[4]} ${columns[5]} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);


console.log(" ");
console.log(" ");