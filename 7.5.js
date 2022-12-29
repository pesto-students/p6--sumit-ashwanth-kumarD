function createArray (n){
    let arr= new Array(n);
    let a;
    for(let i=0;i<n;i++)
        arr[i]=Math.floor(Math.random()*1019);
    return arr;    
}
function nextGreatElement(arr){
    let stack = [];
    let n= arr.length;
    let result = [];
    for(let i=n-1;i>=0;i--){
        while(stack.length!=0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length==0){
            result.push(-1);
        } else {
            result.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    let str = "";
    for(let i=n-1;i>=0;i--){
        str = str+result[i]+" ";
    }
    return str;

}
let arr = createArray(6);
console.log(arr);
console.log(nextGreatElement(arr));