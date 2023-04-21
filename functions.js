// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to define functions with a 
//  variety of syntaxes.

// 1.1a
//  Define a function that logs the string
//  "My function was invoked!".
//  This function has no parameters and returns nothing.
//  Do this with a function declaration.
function newFunc() {
console.log("My function was invoked!")
}
newFunc()


// 1.2
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be the traditional syntax
//  of a function expresssion.

const newFunc2 = function() {
console.log("My function was invoked!")
}
newFunc2()

// 1.3
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be an arrow function.

const newFunc3 = () => console.log("My function was invoked!")
newFunc3()

// *** Problem 2 ***
//  Students should understand how to write functions that return
//  values.

// 2.1
//  Create a function that takes two parameters and returns the
//  product (multiplication) of the parameters. Assume that the
//  two parameters will always be number data types.
//  Your function must use the return keyword. Also, your function
//  should not log anything.

function mult(num1, num2) {
    return num1 * num2
}
console.log(mult(3,4))

// 2.2
//  Create the function from 2.1, only this time, use an arrow
//  function with an implicit return.

const mult2 = (a, b) => a * b
console.log(mult2(4,5))

// 2.3
//  Define a function that takes two parameters and returns the
//  quotient (division) of the parameters.  The first parameter
//  is the dividend, and the second is the divisor. Assume that
//  the two parameters are always numbers.
//  In the case that the divisor is 0 and the dividend is not,
//  your function must return null and log the string
//  "cannot divide by 0".
//  Note: as an additional constraint to this problem, your
//  function must contain an "if" statement without any "else"
//  or "else if"s chained onto it.

const div = (a, b) => {
    if(b === 0 && a !== 0){
    console.log("cannot divide by 0")
    return null}
    return a / b
}
div(1,0)
console.log(div(0,0))

// *** Problem 3 ***
//  Students should be able to invoke (call) functions.

// 3.1
//  Define a function that logs "Coding is fun!", and invoke the
//  the function. The function should not return anything.
//  Do not save the result of the function.

const fun0 = () => {
    console.log("Coding is fun!") 
}
fun0()
console.log(fun0()) // undefined

function fun(){
    console.log("Coding is fun!")
}
fun()

// 3.2
//  Define a function that takes one parameter, a number, and
//  returns the parameter plus 50. Invoke your function three
//  times with three different numbers, and save those values
//  to three different variables.


function plus50(num1){
    return num1 + 50 
}

let var1 = plus50(10)
let var2 = plus50(25)
let var3 = plus50(40)
console.log(var1, var2, var3)

// 3.3
//  Create an array with three values. These three values will be
//  the results of invoking the function from problem 2.3 three times,
//  with each invokation having different arguments.
//  After your array is created, log it to the console.

let arr1 = [plus50(1), plus50(2), plus50(3)]
console.log(arr1)

arr1.push(plus50(4))
console.log(arr1)

// *** Problem 4 ***
//  Students should understand what callback functions and higher
//  order functions are. Students should be able to write callbacks
//  that will be invoked by pre-defined higher order functions.

// 4.1a
//  Note the higher order function, "higher", which takes a callback
//  function as its second parameter. Define a callback function
//  named "callback" that has one number parameter. Your callback
//  function should return the sum of this number and 36.

function higher(num, cb) {
    return cb(num)
}
function callback(num) {
    return num + 36
}

// 4.1b
//  Finally, invoke "higher" with the first parameter being a
//  number of your choice, and the second parameter being the
//  callback written in 4.1a. Save the result of this invocation
//  to a variable.

let var4 = higher(9, callback)
console.log(var4)





// shallow vs deep copies .js

let a = [1,2,3]
let b = a
b++
console.log(a)
console.log(b)
// complex data types follow this shallow example (a new name added, pointing to original data type)

let c = 8
let d = c
d++
console.log(c)
console.log(d)
// simple data types follow this deep example (creating actual copy)