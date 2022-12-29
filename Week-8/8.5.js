let node = [], adj;

//Initialize empty adj array of arrays of length of n
function graph(n) {
    adj = new Array(n);
    for(let i=0; i<n; i++)
        adj[i] = [];
}

//Function to add all adjcents node in array of adj array. This array position must be same as node position in node array
function addEdge(adj,arr) {
    adj[node.indexOf(arr[0])].push(arr[1]);  
}

//function to find town judge
function townJudge() {
    let temp;
    //The node which has no edge to another node stored into temp
    for(let i=0; i<n; i++){
        if(adj[i].length == 0)
            temp = node[i];
    }
    let count = 0;
    //Every other node should have connection to temp node. If yes increament the count by 1.
    for(let i=0; i<n; i++){
        if(adj[i].indexOf(temp) > -1)
        count++;
    }

    //If count is 1 less than total no. of nodes the return that node as Town Judge.
    if(count==n-1) return temp
    //Else no node is town judge return -1.
    else return -1;
}

//Input: The n value should be no.of nodes given in trust array
const n = 3, trust = [[1,3],[2,3]];

graph(n);

for(let i=0; i<trust.length; i++)
    node.push(...trust[i]);
node = new Set(node);
node = [...node];

for(let i=0; i<trust.length; i++)
    addEdge(adj,trust[i]);

const res = townJudge();
    console.log(res);