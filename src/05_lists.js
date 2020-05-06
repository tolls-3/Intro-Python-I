var x = [1, 2, 3]
var y = [8, 9, 10]

//Change x so that it is [1, 2, 3, 4]
x.push(4)
console.log('1-', x)

//Using y, change x so that it is [1, 2, 3, 4, 8, 9, 10]
x.push(...y)
console.log('2-', x)

//Change x so that it is [1, 2, 3, 4, 9, 10]
x.splice(4, 1)
console.log('3-', x)

//Change x so that it is [1, 2, 3, 4, 9, 99, 10]
x.splice(5, 0, 99)
console.log('4-', x)

//Print the length of list x
console.log('length of x is: ', x.length)

//Print all the values in x multiplied by 1000
var z = []
x.forEach(num => {
    z.push(num * 100)
})
console.log(z)