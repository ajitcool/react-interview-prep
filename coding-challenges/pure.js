// Pure function : ek aisa function jiske pass ye sare characteristics hai  predictable , Readable , Reuseable and Testable wo pure function.

// pure function kya hota hai?

// same input ke liye same output aaye to hum usse pure function bolenge but jab 

// niche diye function  message variable ka vlaue change hone ke karna output me difference aa raha hai . jabki hum same input de rahe hai
let message = "Good Morning";

const greeting  = (name)=>{
    return `${message} ${name}`;
}

console.log(greeting('Nisha'));

message = "good Evening";

console.log(greeting('Nisha'));


// Note: Agr koi function console.log() use kar ra ha hai to wo wo pure function nhi hoga

let message =" Good Morning";

const greeting = ( name)=>{
    console.log('Hello');
    return `Hi ${name}`;
}

console.log(greeting('Nisha'));
console.log(greeting('Nisha'));
