function stockMarket(arr){
    var temp = [...arr];
    var max=0;
    var min=104;
    var diff=0;
    for(let i in arr)
    {
        min = arr[i];
        temp.splice(0,1);
        temp.splice(0,i);
        max = Math.max(...temp);
      
        if(diff<(max-min)){
            diff= max-min;
            // console.log("diff: ",diff);
            
        }
        temp=[...arr];
    }
    return diff;
}
console.log(stockMarket([7,1,5,3,6,4]))
