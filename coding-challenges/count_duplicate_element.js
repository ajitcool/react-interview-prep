map vs forEach — Complete Difference

1.map     → Naya array RETURN karta hai ✅ and forEach → Sirf loop karta hai, UNDEFINED return karta hai

const arr = [1, 2, 3, 4, 5];

// map — naya array milta hai
const result = arr.map(x => x * 2);
console.log(result); // [2, 4, 6, 8, 10] ✅
console.log(arr);    // [1, 2, 3, 4, 5]  ← unchanged

// forEach — undefined milta hai
const result2 = arr.forEach(x => x * 2);
console.log(result2); // undefined ❌
console.log(arr);     // [1, 2, 3, 4, 5] ← unchanged

2.map — Har item transform karta hai and forEach — Sirf loop karta hai

3. Chaining — Ek Aur Bada Difference
const arr = [1, 2, 3, 4, 5];

// map — chain kar sakte ho! ✅
const result = arr
    .map(x => x * 2)      // [2,4,6,8,10]
    .filter(x => x > 4)   // [6,8,10]
    .reduce((a,b) => a+b); // 24

// forEach — chain NAHI kar sakte ❌
const result2 = arr
    .forEach(x => x * 2)
    .filter(x => x > 4);  // ❌ TypeError — undefined pe filter nahi hoga

4. Performance
// forEach thoda faster hai map se
// Kyunki map naya array banaata hai — extra memory lagti hai

// Agar return value nahi chahiye:
arr.map(...)     // ⚠️ memory waste — naya array bana ke phekte ho
arr.forEach(...) // ✅ sahi choice

------------------------------------------------------------------------------------
    
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
