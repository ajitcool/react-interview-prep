const arr = [1,2,3,4,5,6,7,8,9];

const results = arr.map(num=>num %2 ? num -1 : num +1);

console.log(results);