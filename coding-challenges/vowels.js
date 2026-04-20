const string = "The quick brown fox jumps over the lazy dog";


function getStrWithNoVowels (str){
    const vowels = ["a","e","i","o","u"];
    let results = "";

    for( let char of str){
        if(!vowels.includes(char.toLowerCase())){
            results+=char;
        }
    }

    return results;
}

const updatedStr = getStrWithNoVowels(string);
console.log(updatedStr);