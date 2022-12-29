let root;
    //Create a new node with data and assign its left and right childrens null value.
    class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    // Function to insert nodes in level order
    function insertLevelOrder(arr, root, i)
    {
        // Base case for recursion
        if (i < arr.length) {
            let temp = new Node(arr[i]);
            root = temp;   

            // insert left child
            root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
                   
            // insert right child
            root.right = insertLevelOrder(arr, root.right, 2 * i + 2);                                              
        }
        return root;
    }

    //Function to find the depth of tree
    function depth(root) {
        //If root is empty return 0
        if(!root) return 0;
        //Else traverse through all the left and right childrens and calculate the depth
        else {
            leftHeight = depth(root.left);
            rightHeight = depth(root.right);

            if(leftHeight > rightHeight) 
                return leftHeight + 1;
            else return rightHeight + 1;
        } 
    }
       
//Input
let arr = [3,9,null,null,24,15,7];
root = insertLevelOrder(arr, root, 0);

const h = depth(root);
console.log(h);