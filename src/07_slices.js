var a = [2, 4, 1, 7, 9, 6]

// Output the second element: 4:
console.log(a[1])

// Output the second-to-last element: 9
console.log(a.slice(a.length - 2, a.length -1 ))

// Output the last three elements in the array: [7, 9, 6]
console.log(a.slice(a.length - 3, a.length ))

// Output the two middle elements in the array: [1, 7]
console.log()

// Output every element except the first one: [4, 1, 7, 9, 6]
console.log(a.slice(1, a.length  ))

// Output every element except the last one: [2, 4, 1, 7, 9]
console.log(a.slice(0, a.length -1  ))

// Output just the 8th-12th characters: "world"
var s = "Hello, world!"
console.log(s.slice(6, 12))



