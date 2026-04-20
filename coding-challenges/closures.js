/* Lexical scope ka matlab hai ki ek function ka scope wahan decide hota hai jahan wo code mein likha gaya hai (define hua), na ki jahan se call kiya gaya.
Jab koi variable access karna hota hai, to JavaScript pehle apne current scope mein dhundta hai, nahi mila to parent scope mein jaata hai, aur yeh chain tab tak chalti hai jab tak global scope na aa jaye.
 Isse Scope Chain kehte hain. */

function counter(){
    let count=0;
    function calculate(){
        return count +=1;
    }
    return calculate;
}
let result = counter();
result();
result();
console.log(result())


//iffe function

 const result=(function counter(){
     let count=0;

    function calculate(){
        return count+=1;
    }
    return calculate;
 })();
 console.log(result());