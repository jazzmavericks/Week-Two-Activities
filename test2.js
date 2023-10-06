console.log(" ");
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

let board = [[space1, space2, space3], [space4, space5, space6], [space7, space8, space9]];

for (let i = 0; i < board.length; i++) {
  console.log(`${columns[0]} ${board[i][0]} ${columns[2]} ${columns[3]} ${columns[4]} ${board[i][1]} ${columns[6]}  ${columns[7]} ${columns[8]} ${board[i][2]} ${columns[10]}`);
  if (i < board.length - 1) {
    console.log(`${rows}`);
  }
}

console.log(" ");
console.log(" ");
