// =============================================
//   TRICKY JAVASCRIPT - OUTPUT BASED QUESTIONS
// =============================================


// Q1 - Hoisting
console.log(x);
var x = 5;
console.log(x);
// Output: ?


// Q2 - let vs var in loop
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// Output: ?


// Q3 - Closure
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const fn = outer();
fn();
fn();
fn();
// Output: ?


// Q4 - Type Coercion
console.log(1 + "2" + 3);
console.log(1 + 2 + "3");
console.log(+"3" + 3);
// Output: ?


// Q5 - == vs ===
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log(null == undefined);
console.log(null === undefined);
// Output: ?


// Q6 - typeof
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof function(){});
// Output: ?


// Q7 - Temporal Dead Zone (TDZ)
console.log(a);
let a = 10;
// Output: ?


// Q8 - Object reference
let obj1 = { name: "Ajit" };
let obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name);
// Output: ?


// Q9 - Spread vs reference
let a1 = [1, 2, 3];
let a2 = [...a1];
a2.push(4);
console.log(a1);
console.log(a2);
// Output: ?


// Q10 - Promise + setTimeout order (Event Loop)
console.log("start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: ?


// Q11 - IIFE
(function() {
    var x = 10;
    console.log(x);
})();
console.log(typeof x);
// Output: ?


// Q12 - Tricky this
const obj = {
    name: "Ajit",
    greet: function() {
        console.log(this.name);
    },
    arrowGreet: () => {
        console.log(this.name);
    }
};
obj.greet();
obj.arrowGreet();
// Output: ?


// =============================================
//   PROMISE BASED - OUTPUT QUESTIONS
// =============================================


// PQ1 - Basic Promise chain
Promise.resolve(1)
    .then(val => val + 1)
    .then(val => val * 2)
    .then(val => console.log(val));
// Output: ?


// PQ2 - Promise + setTimeout order
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: ?


// PQ3 - Promise inside setTimeout
setTimeout(() => {
    console.log("A");
    Promise.resolve().then(() => console.log("B"));
}, 0);
setTimeout(() => console.log("C"), 0);
// Output: ?


// PQ4 - Chained then with return
Promise.resolve("start")
    .then(val => {
        console.log(val);
        return "middle";
    })
    .then(val => {
        console.log(val);
        return "end";
    })
    .then(val => console.log(val));
// Output: ?


// PQ5 - Promise.reject + catch
Promise.resolve(10)
    .then(val => {
        throw new Error("Something went wrong");
    })
    .then(val => console.log("then:", val))
    .catch(err => console.log("catch:", err.message))
    .then(() => console.log("after catch"));
// Output: ?


// PQ6 - Promise.all
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(values => console.log(values));
// Output: ?


// PQ7 - Promise.all with one reject
Promise.all([
    Promise.resolve(1),
    Promise.reject("error"),
    Promise.resolve(3)
])
.then(values => console.log("then:", values))
.catch(err => console.log("catch:", err));
// Output: ?


// PQ8 - Promise.race
Promise.race([
    new Promise(resolve => setTimeout(() => resolve("slow"), 200)),
    new Promise(resolve => setTimeout(() => resolve("fast"), 100)),
    new Promise(resolve => setTimeout(() => resolve("medium"), 150)),
])
.then(val => console.log(val));
// Output: ?


// PQ9 - async/await order
async function fetchData() {
    console.log("A");
    const result = await Promise.resolve("B");
    console.log(result);
    console.log("C");
}
console.log("start");
fetchData();
console.log("end");
// Output: ?


// PQ10 - async/await with error handling
async function getData() {
    try {
        const val = await Promise.reject("failed");
        console.log("val:", val);
    } catch(err) {
        console.log("caught:", err);
    } finally {
        console.log("finally runs");
    }
}
getData();
// Output: ?
