const str = "123456789023456";

const maskChar = "#".repeat(4);
const results = str.slice(0,str.length - 4) + maskChar;

console.log(results);


