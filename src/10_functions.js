// # Write a function is_even that will return true if the passed-in number is even.

// # YOUR CODE HERE

// # Read a number from the keyboard
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", (userInput) => {
    evenNum(Number(userInput.trim()))
    rl.close()
})

// Print out "Even!" if the number is even. Otherwise print "Odd"

function evenNum(number) {
    if (number % 2 === 0) {
        console.log('Even!')
    } else {
        console.log('Odd')
    }
}
