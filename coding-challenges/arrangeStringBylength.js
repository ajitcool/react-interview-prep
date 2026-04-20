 let data = "React is a javascript library";

 //output = "a is React library javascript";


 function reverseStringByLength(data){
    
    return data
            .split(" ")
            .sort((a,b)=> b.length - a.length)
            .join(" ");
 }

 console.log(reverseStringByLength(data));

