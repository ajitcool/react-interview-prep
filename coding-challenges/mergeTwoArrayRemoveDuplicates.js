// sabse phle dono array ko merge karenge using spread operator and 
// uske baad Set ka use karenge to remove duplicates and then usko wapas array me convert karenge using spread operator. 
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let mergedArray = [...new Set([...array1, ...array2])];
console.log(mergedArray); // Output: [1, 2, 3, 4]