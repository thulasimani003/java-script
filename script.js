function countChars(str){
    const countChars={};
    for(let char of str){
        if(countChars[char]){
        countChars[char]++;
    }
    else {
        countChars[char]=1;
    }
}
return countChars;}
console.log(countChars("hello"));
console.log(countChars("aabbccdd"));