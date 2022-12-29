//The function of set is to maintain unique values and since uiques tores only uniquevalues
//by comparing the length with old array with duplicate values it returns false as set stores uniquevalues



function hasDuplicate(arr){
const newarr= new Set(arr);
return newarr.size!=arr.length;
}
console.log(hasDuplicate([1,5,4,4,55]))


