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