let adj;

//Function to add all adjecents of node elements in array adj
function graph(num, edges) {
    adj = new Array();

    //Initialize empty array of arrays of length of n
    for(let i=0; i<num; i++)
        adj[i] = [];
    
    //temp=first element in first array
    let temp = edges[0][0];
    let j=0;

    //get all adjecent nodes of node in one array and store that array in adj array 
    for(let i=0;i<edges.length;i++) {
        if(edges[i][0] == temp){
            adj[temp][j] = edges[i][1];
            j++;
        } else{
            j=0;
            temp = edges[i][0];
            adj[temp][j] = edges[i][1];
            j++;   
        }      
    }
}

//Function to check if path exists
function pathExist(s, d) {
    const visited =new Array(n);
    //Assign all elements in visited array as false value
     for(let i=0;i<n;i++) 
        visited[i] = false;

    const queue = [];

    //Make source visited and push it into queue
    visited[s] = true;
    queue.push(s);

    while(queue.length){
        let temp =  queue.pop();

        //If queue popped node is equal to destination node then return true
        if(temp == d) return true;

        //If the next node is not visited then push it into queue and the make its position in visisted array as true
        for(let i=0; i<adj[temp].length; i++) {
            if(visited[adj[temp][i]] === false) {
                queue.push(adj[temp][i]);
                visited[adj[temp][i]] = true;
            }
        }
    }
    //If path not found return false
    return false;   
}

//Input 
const n = 3, edges = [ [0,1],[0, 4],[1,2],[2,0]], source = 0, destination = 2
graph(n, edges);

const bool = pathExist(source, destination);
console.log(bool);