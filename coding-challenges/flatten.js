Built-in flat() — Sabse Simple
const arr = [1,2,[3,4],5,[6,7,8],9,[10,[12,13,14],15]];

arr.flat()        // sirf 1 level deep
arr.flat(2)       // 2 level deep
arr.flat(Infinity) // ✅ kitni bhi depth — [1,2,3,4,5,6,7,8,9,10,12,13,14,15]

-----------------------------------------------------------------------------------------------------
const arr = [1,2,[3,4],5,[6,7,8],9,[10,[12,13,14],15]];

 // output should be [1,2,3,4,5,6,7,8,9,10,12,13,14,15

//  function flatten (arr){
//     return arr.reduce((acc,curr)=>{
//         return Array.isArray(curr)?[...acc,...flatten(curr)]:[...acc,curr];
       
//         },[])

//  }

//  console.log(flatten(arr));

-----------------------------------------------------------------------------------------------------
 
 // 2nd approach ( yaha pe array me return kar skte hai and string me bhi)
 let output ="";
 function flatten2(arr){
   

    for( let i =0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i])){
            flatten2(arr[i]);
        }else{
            output += arr[i];
        }
    }
    
    return output;


 }

 console.log(flatten2(arr));
