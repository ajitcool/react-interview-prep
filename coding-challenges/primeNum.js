

function prime(num){

    for( let i =2;i<num;i++){
        if(num%i){  console.log(num,"is not a prime number")
            break;
        }
        else {console.log(num,"is prime number")}
    }
}

console.log(prime(9));