//When you use a variable in a function, it's local in scope to the function.
var x = 12

function changeX(){
    var x = 99
    console.log(x)
}

//This prints 12. What do we have to modify in change_x() to get it to print 99?
changeX()