 // 1) split -> string to array
 // 2) reverse -> reverse an Array
 // 3) join -> array to string
 
 let str= "My name is Ajit Kumar singh";

 function reverseString(str){
     return str.split(" ").map((item)=> item.split("").reverse().join("")).join(" ");
 
    

 }

 console.log(reverseString(str));