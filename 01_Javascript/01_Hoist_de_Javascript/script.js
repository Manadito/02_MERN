// 1
// Given
console.log(hello);                                   
var hello = 'world';                                 
// After hoisting by the interpreter
// var hello = 'world';
// console.log(hello); 

// 2 
// Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// Result is 'magnet'

// 3
// Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Result is 'super cool' because
// function is never called.
// We log the original variable

// 4 
// Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// Result is 'chicken' and 'half chicken'
// Initial log reads the first food variable
// The function called reads the new variable
// stored in food. The last var is not logged. 

// 5
// Given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// Results in an error
// mean is not properly written as a function
// var food should be a global variable

// This is a better way to write it:

//var food = "fish";
//mean();
//console.log(food);
//function mean() {
//    console.log(food);
//    food = "chicken"
//    console.log(food);
//}
//console.log(food);

// This resutls in fish, chicken, chicken, chicken

// 6
// Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// This should result in undefined, rock, r&b, disco
// Switching places between the first two lines
// should produce disco, rock, r&b, disco
// This happens because var genre = "r&b" is an 
// internal variable (local var) of the function
// In this case its possible to have var not defined 
// on top. 
// if we change var to let, this will give an error
// showing that the variable is not initialized, 
// meaning that the let variable should be put on
// top. 

// 7
// Given 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// I thought this would give undefined, undefined, burbank, undefined
// For some reason it doesn't mind not adding the var keyword before the
// variable name. 

// 8 
// Given 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// This should give an error. It seems there is no definition of an object literal. 



