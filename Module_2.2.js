// 2.2 VARIABLES & OPERATORS - Activity One

console.log("**2.1 DOT NOTATION - Activity One**")
console.log(" ");

let details = ["Bob Ross", "52", "Vandyke Brown" ];

console.log(`Meet ${details[0]}. He is ${details[1]} years old. His favourite colour is ${details[2]}.`)

console.log(" ");
console.log(" ");

// 2.2 VARIABLES & OPERATORS - Activity Two with Stretch

console.log("**2.1 DOT NOTATION - Activity Two**")
console.log(" ");

let breakfast = ["Cornflakes"];
let lunch = ["Eggs on toast"];
let dinner = ["Spaghetti Bolognaise"];

console.log(`Hi! Yesterday for breakfast I had ${breakfast}. Then, at lunch, I had ${lunch}. For dinner, I had ${dinner}.`)
console.log(" ");

breakfast = "Coco Pops";
lunch = "Ramen Noodles";
dinner = "Tikka Masala"

console.log(`Tomorrow for breakfast I will have ${breakfast}. Then, at lunch, I plan to have ${lunch}. For dinner, I feel like ${dinner}.`)

console.log(" ");
console.log(" ");



// 2.2 VARIABLES & OPERATORS - Activity Three

console.log("**2.1 DOT NOTATION - Activity Three**")
console.log(" ");

let today = new Date();
let birthday = new Date(2024, 6, 29); //month is back one due to 0 index

let daysToGo = birthday - today;

let daysUntilBirthday = Math.ceil(daysToGo / (1000 * 60 * 60 * 24));

console.log(`There are ${daysUntilBirthday} days to go until my birthday.`);

console.log(" ");
console.log(" ");


// 2.2 VARIABLES & OPERATORS - Activity Four

console.log("**2.1 DOT NOTATION - Activity Four**")
console.log(" ");

let space1 = 'x';
let space2 = 'o';
let space3 = ' ';
let space4 = 'x';
let space5 = 'x';
let space6 = ' ';
let space7 = 'o';
let space8 = ' ';
let space9 = ' ';

let columns = [" ", " ", " ", "|", " ", " ", " ", "|", " ", " ", " "];
let rows = ["---------------------"];

console.log(`${columns[0]} ${space1} ${columns[2]} ${columns[3]} ${columns[4]} ${space2} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);
console.log(`${rows}`);
console.log(`${columns[0]} ${space4} ${columns[2]} ${columns[3]} ${columns[4]} ${space5} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);
console.log(`${rows}`);
console.log(`${columns[0]} ${space7} ${columns[2]} ${columns[3]} ${columns[4]} ${columns[5]} ${columns[6]}  ${columns[7]} ${columns[8]} ${columns[9]} ${columns[10]}`);


console.log(" ");
console.log(" ");