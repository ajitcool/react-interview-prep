const str = "madam";

const reversedStr = str.split("").reverse().join("");


function palidrom(str){
    
    let  revStr="";

    for( let i = str.length-1;i>=0;i--){
        revStr += str[i];

    }
   
   if(revStr === str){
    console.log(str,"is Palindrome string");
   }else
   {
    console.log(str,"is not palindrome string");
   }

}


palidrom(str)