function createStack() {
    // the variable defined in function scope is private to that function
    var items = [];
    return {
        // these functions are previleged to access "items" as they are in same scope
        push(item) {
            items.push(item);
            console.log(items);
        },
        pop() {
            items.pop();
            console.log(items);
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop() // pops 5

stack.items; // undefined  


// Result : "items" is accessible outside createStack()