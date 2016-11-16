function displayVisNetwork(graph) {
    var viewport = document.querySelector("#viewport");
    var nodesArray = [];
    var edgesArray = [];

    graph.vertices.forEach(function (vertex, i) {
        nodeArray.push({ id: i + 1, label: vertex.label });
        vertex.successors.forEach(function (weight, j) {
            edgesArray.push({ from: i + 1, label: weight, to: j + 1});
        });
    });

    
}