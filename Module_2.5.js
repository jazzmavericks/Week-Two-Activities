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