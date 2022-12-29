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

//Function to validate if left children is always less than root and right children always greater than root
function validate(root) {
    //If tree is empty return false
    if(root == null) return false;
    
    //If tree contains only one node return true
    else if (root.left == null && root.right == null) return true;

    //Else validate for all nodes
    else{
        //If for any node left children is greater than root or right children is smaller than root then return false
        if(root.left.data > root.data || root.right.data < root.data) return false;
        //traverse the binary tree
        root = root.left;
        root = root.right;
    }
    return true;
}

//Input
const arr = [3,2,4,null,null,3,6];  
root = insert(arr, root, 0);

const bool = validate(root);
console.log(bool);