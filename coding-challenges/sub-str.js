Yeh code string ke har possible substring ko print karta hai. isme string contagious hota hai
const str = "Ajit_Kumar_Singh";

for( let i =0;i<str.length;i++){
    for( let j = i+1; j<= str.length;j++){
        console.log(str.slice(i,j));
    }
}
