function isVowel(char){
    let vowels=['a','e','i','o','u'];
    return vowels.includes(char);
}
function vowelCount(str)
{
    const vowelMap=new Map();
    for(let char of str)
    {
        let lowerCaseChar=char.toLowerCase()
        if(isVowel(lowerCaseChar) && vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    return vowelMap;
}
console.log(vowelCount("hello world"));

