let root;

//Create a new node with data and assign its left and right childrens null value.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to insert nodes in level order
function insert(arr, root, i) {

    // Base case for recursion
    if(i < arr.length) {
        let temp = new Node(arr[i]);
        root = temp;

        // insert left child
        root.left = insert(arr, root.left, i*2+1);

        // insert right child
        root.right = insert(arr, root.right, i*2+2);
    }
    return root;
}

//Function to print the nodes in level order
function print(arr2) {
    let arr = [];
    let i = 0;

    //If tree is empty return
    if(arr2.length == null) {
        arr.push([]);
        return arr;
    }

    //add first node in array arr
    arr.push([arr2[i]]);

    //While all childrens are visited
    while(i*2+2 < arr2.length){
        
        //If left child is not null
        if(arr2[i*2+1] != null) {
            //and right child is also not null then add both in arr
            if(arr2[i*2+2] != null) {
                arr.push([arr2[i*2+1],arr2[i*2+2]]);
            } else{
            //else add only left child into arr
                arr.push([arr2[i*2+1]]);  
            }         
        } else if(arr2[i*2+2] != null)
            //else only add right child into array
            arr.push([arr2[i*2+2]]);  
        i++;
    }
    return arr;
}

//Input
const arr = [3,9,20,9,34,15,7,5,8];  
root = insert(arr, root, 0);

const result = print(arr);
console.log(result);
