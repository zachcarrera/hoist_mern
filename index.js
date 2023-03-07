// #1
console.log(hello);
var hello = "world";

// var hello
// console.log(hello); // logs undefined
// hello = "world";

// #2
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}

// function test() {
//     var needle = "magnet";
//     console.log(needle);
// }
// var needle = "haystack";
// test(); // logs magnet

// #3
var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);

// function print() {
//     brendan = "only okay";
//     console.log(brendan); // logs "only okay"
// }
// var brendan = "super cool";
// console.log(brendan) // logs "super cool" only since print() is never called

// #4
var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

// var food;
// function eat() {
//     food = "half-chicken";
//     console.log(food);
//     var food = "gone";
// }
// food = "chicken"
// console.log(food) // logs "chicken"
// eat() // logs "half-chicken"

// #5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
};
console.log(food);

// var mean
// mean(); // TypeError that mean is not a function
// mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// };
// console.log(food); // TypeError food not defined
// console.log(food); // TypeError food not defined

// #6
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

// var genre
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs undefined
// genre = "disco"
// rewind() // logs "rock" and "r&b"
// console.log(genre) // logs "disco"

// #7
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

// var dojo;
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); // logs "san jose"
// learn(); // logs "seattle" and "burbank"
// console.log(dojo) // logs "san jose"

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // logs {name: "Chicago", students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); // TypeError: cannot reassign a const
