//function to return the paths from source to destination
function allPathsSourceTarget(graph) {
    if (!graph) return [];
    const ans = [];
    dfs(graph, [0], ans);
    return ans;
};

//Recusive function which keeps on adding nodes to check if path is found, if not backtrack.
const dfs = (graph, path, ans) => {
    //assign last element in path to rooot
    const root = path[path.length - 1];
    
    //If node in path is destination node then push all the nodes in path and return
    if (root === graph.length - 1) {
        ans.push([...path]);
        return;
    }

    //If there is no edges from root then return
    if (!graph[root] ||!graph[root].length) return;

    //Traverse through the nodes connected with edges
    for (let i = 0; i < graph[root].length; ++i) {
        path.push(graph[root][i]);
        dfs(graph, path, ans);
        path.pop();
    }
}

//Input
const graph = [[4,3,1],[3,2,4],[3],[4],[]];
console.log(allPathsSourceTarget(graph)); 