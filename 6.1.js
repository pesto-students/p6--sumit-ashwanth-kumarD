largestSum = arr => {
    const  arrLength = arr.length;
    let max_now = - Number.MAX_VALUE;
    let max_final = 0;
    /* 
    Store the continuos sum in max_final
    After adding the new element if the sum gets bigger than max_final then store the max_final sum in max_now
    */
    for(let i=0; i<arrLength; i++)  {
        max_final =  max_final + arr[i];
        if(max_now < max_final)
            max_now = max_final;
    
        if(max_final < 0)
            max_final = 0;
    }
    return max_now;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const sum = largestSum(arr);
console.log(sum);