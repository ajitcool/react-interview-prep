 const arr = [1,2,3,4,5,6,7,8,9,10];

 const total_sum = arr.reduce((acc,curr)=>{return curr>4? acc+curr:acc},0)
//   const total_sum = arr.reduce((acc,curr)=>( curr>6? acc+curr:acc),0)

 console.log(total_sum);
