// Write a function f1 that takes two integer positional arguments and returns
// the sum. This is what you'd consider to be a regular, normal function.

function f1(a, b) {
    console.log('f1-', a + b)
}
f1(1, 2)

// # Write a function f2 that takes any number of integer arguments and prints the
// # sum.

function f2() {
    var arg = Array.from(arguments);
    let sum = arg.reduce((acc, v) => {
        return acc + v
    }, 0)
    console.log(sum)
}

f2(1)
f2(1, 3)
f2(1, 4, -12)
f2(7, 9, 1, 3, 4, 9, 0)


