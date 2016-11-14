function Graph() {
    this.vertices = [];

    this.addVertex = function (vertexLabel) {
        this.vertices.push({
            label: vertexLabel,
            successors: []
        });
    };

    this.removeVertex = function (vertexId) {
        if(vertexId > 0) {
            this.vertices.slice(vertexId - 1, vertexId);
        }
    };

    this.removeSuccessor = function (vertexId, successorVertexId) {
        if(vertexId > 0 && successorVertexId > 0) {
            this.vertices[vertexId - 1].successors[successorVertexId - 1]
        }
    };

    // First vertex is written 1 in this function
    this.addEdge = function (sourceVertexId, destinationVertexId, weight) {
        if(sourceVertexId > 0 && destinationVertexId > 0) {
            this.vertices[sourceVertexId - 1].successors[destinationVertexId - 1] = weight;
        }
    };
}