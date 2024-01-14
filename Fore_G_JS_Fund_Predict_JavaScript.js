// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?
    
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars

// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// Prediction:
// Tesla
// Mercedes

// Output:
// Tesla
// Mercedes

// Question Answers:
// The first array value was destructured, because in destructuring an array, the first named variable represents the first array index
// The second array value was destructured by using a comma before a name, and commas represent array indices
// You could destructure the third value using two commas:
    // const [ , ,thirdCar ] = cars


// Problem 2
// Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

// const employee = {
//     employeeName: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { employeeName: otherName } = employee;
// //Predict the output
// console.log(otherName);
// console.log(employeeName);

// Prediction:
// Elon
// ReferenceError: employeeName does not exist

// Output:
// Elon
// Uncaught ReferenceError ReferenceError: employeeName is not defined

// Question answers:
// employeeName was destructured as a variable renamed otherName
// the employeeName key value does not exist outside of the employee object,  and cannot be called upon
// To call the employeeName directly, you would need to destructure it into a variable matching the name


// Problem 3
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// Prediction:
// 12345
// ReferenceError: hashedPassword is not defined

// Output:
// 12345
// undefined

// Question answers:
// The code produced 'undefined' instead of ReferenceError, because javascript is lenient
// You can alter the code by instantiating person with a password key/value


// Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first === second);
// console.log(first === third);

// Prediction:
// false
// true

// Output:
// false
// true

// Question answers:
// The console logs are showing the results of comaprisons between destructured array values
// const [,,,fourth] = numbers;
// console.log(fourth);


// Problem 5
// Why did the code produce that output? Console.log the last value in the secondKey property's array.

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

// Prediction:
// value
// [1,5,1,8,3,3]
// 1
// 5

// Output:
// value
// [1,5,1,8,3,3]
// 1
// 5

// Question answers:
// The code produced the output it did because you can destructure object key/values, and then destructure those sub-items, such as arrays
// console.log(lastTest.secondKey[secondKey.length - 1])


// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (var index = 0; index < names.length; index++) {
//             var name = names[index];
//             console.log(name + ' was found at index ' + index);
//         }
//         console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);

// T Diagram
// index=0, <4, ++
// 0
// 1
// 2
// 3
// 4

// Prediction:
// name and index after loop is Ringo:4
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// Output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

// Question answers:
// There are 4 scopes. The scopes contained in Problem 6 are Global, which is the entire scope, Function, which everything inside the main function, Inner Function, 
    // which is everything inside the function within the function, and For, which is everything inside the for loop.


// Problem 7
// Why did the code produce that output?

// function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//         let name = names[index];
//         console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
// }

// Prediction:
// Nothing

// Output:
// Nothing

// Question answers:
// The code has no output because the function is never called, and even if it was, there is no names argument on which to perform operations


// Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred.
// If there are no errors, explain the justification for each keyword used to declare variables.

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (let index = 0; index < names.length; index++) {
//             const name = names[index];
//             console.log(name + ' was found at index ' + index);
//         }
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);

// T Diagram
// index=0; <4; ++
// 0

// Prediction:
// Paul was found at index 0
// Paul was found at index 1
// Paul was found at index 2
// Paul was found at index 3

// Output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// Question answers:
// A new name gets logged each time because each time the for loop runs it reinstantiates every variable inside itself
// Name is used because the array operated on is called names, and index is used because the for loop is iterating over the index of the names array


// Problem 9
// Why did the code produce that output? Explain why each console.log looks the way it does.

// const planet = {
// 	name:"Jupiter",
// 	milesFromSun: 49849,
// 	mass: 393983,
//     composition: ["gas", "liquid", "oxygen"]
// }
// const planetCopy = {...planet}
// console.log(planet.composition[0] === planetCopy.composition[0]) 
// console.log(planet === planetCopy)

// Prediction:
// true
// true

// Output:
// true
// false

// Question answers:
// The code involves using spread to create a shallow copy, and log operations comparing the difference
// planetCopy.composition points to the same object in memory, since deep copies don't recreate the sub objects. Which results in true.
// Meanwhile, planetCopy is a deep copy of planet, meaning that the object key/values are located in a different location in memory