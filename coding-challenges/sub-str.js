Yeh code string ke har possible substring ko print karta hai. isme string contagious hota hai
const str = "Ajit_Kumar_Singh";

for( let i =0;i<str.length;i++){
    for( let j = i+1; j<= str.length;j++){
        console.log(str.slice(i,j));
    }
}

----------------------------------------------------------------------------------------
Sirf unique substrings chahiye?
    
const str = "Ajit_Kumar_Singh";
const substrings = new Set();
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    substrings.add(str.slice(i, j));
  }
}
console.log([...substrings]);

----------------------------------------------------------------------------------------

Sirf specific length ke substrings?

const str = "Ajit_Kumar_Singh";    
const k = 3; // length 3 ke substrings
for (let i = 0; i <= str.length - k; i++) {
  console.log(str.slice(i, i + k));
}
// "Aji", "jit", "it_", "t_K" ...
