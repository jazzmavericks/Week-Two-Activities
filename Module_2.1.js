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

const columns = [" ", " ", " ", "|", " ", " ", "|", " ", " ", " "];
const rows = ["----------"];

// Loop to print rows and separator
for (let i = 0; i < 3; i++) {
  console.log(columns.join('')); // Log output to the console with commas removed from display
  if (i < 2) {
    console.log(`${rows}`);
  }
}