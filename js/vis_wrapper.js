function displayVisNetwork(graph) {
    var viewport = document.querySelector("#viewport");
    var nodesArray = [];
    var edgesArray = [];

    graph.vertices.forEach(function (vertex, i) {
        nodesArray.push({ id: i + 1, label: vertex.label });
        vertex.successors.forEach(function (weight, j) {
            edgesArray.push({ from: i + 1, label: weight, to: j + 1, arrows: 'to'});
        });
    });

    var data = { nodes: nodesArray, edges: edgesArray };
    var options = {
    }

    var network = new vis.Network(viewport, data, options);
}