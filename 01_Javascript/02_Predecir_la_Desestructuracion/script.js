// 1. 

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ , otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// This will print Tesla and Mercedes. randomCar stores Tesla and otherRandomcar
// stores the second value in the array, hence storing Mercedes. 

// 2. 

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// This will print an error because name is not defined. If we remove console.log(name)
// then our code will execute properly and console.log(otherName) will print Elon.

// 3.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// In this case, console.log(password) will print 12345 and console.log(hashedPassword)
// will be undefined as there is no key-value pair 'password'. 

// 4.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// This excercise should print false for the first log and true for the second one. 
// In this case, first stores 2 (skipping the 8), second stores 5 (skipping up to number 3)
// and third stores 2 (skipping all numbers up to the last 2). 

// 5.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// This exercise will initially print value, the second log will print the array [1,5,1,8,3,3]
// the third log will print 1 (we made a new variable called secondKey which stores the array
// [1, 5, 1, 8, 3, 3], for which we have decided to access its first indexed value, 0, which will
// return the number 1). Finally, console.log(willThisWork) will print 5 (a new variable called
// willThisWork stores the second value of the secondKey array, 5). 



