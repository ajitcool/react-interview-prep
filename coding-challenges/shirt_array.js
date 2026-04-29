const input  =  [1,2,3,4,5,6];

//output  = [6,1,2,3,4,5]

console.log(input.unshift(input.pop()));
console.log(input);

///2nd coding question
-----------------------------------------------------------------
const input  =  [1,2,3,4,5,6];
//output  = [24,20,16,12,8,4];

const output = input.map((num)=>{
    return num*4;
})
.sort((a,b)=>b-a)
console.log(output);

-----------------------------------------------------------------

    pop()- last se element ke value nikalna
    push()- last se value ko insert karna and length return karna
    shift()- starting se value fetch karna
    unshift() - starting se value ko insert karna and array ke length return karna
