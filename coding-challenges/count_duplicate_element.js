const items = ['a','b','c','a','b','b','c','d','d'];

// output = {a:2,b:3,c:2,d:1};


function count_duplicate(items){
    const output = {};

    items.map((item)=>{
     output[item]=((output[item]|| 0)+1);
    })

    for( let item of items){
        output[item]=((output[item]|| 0)+1)
    }

    return output;
}
console.log(count_duplicate(items))

// 2nd approach to solve the problem
function count_duplicate(items){
    const output = {};

    for( let item of items){
        output[item]=((output[item]|| 0)+1)
    }

    return output;
}
console.log(count_duplicate(items))


/* Explaination:  loop chala ke ye check kar rahe hai ki kya koi value array me present hai and agr present to use value 
fetch karke  and usme value add karo 1 and usko key me assign kar do.

Note: yaha pe jab koi value nhi hoga to  udefined return karega  and left side undefined return karega tab ye right side ka value assign  ho jayega 
 */