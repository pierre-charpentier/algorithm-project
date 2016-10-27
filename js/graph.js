function Graph() {
    this.vertices = [];

    this.addVertex = function(vertexLabel) {
        if (!this.vertices.hasOwnProperty(vertexId)) {
            this.vertices.push()
        }
    };

    this.removeVertex = function(vertexId) {
        delete this.vertices[vertexId];
    };

    this.addEdge = function(sourceVertexId, destinationVertexId, weight) {
        if (!this.vertices[sourceVertexId].hasOwnProperty(destinationVertexId)) {
            this.vertices[sourceVertexId][destinationVertexId] = [];
        }

        this.vertices[sourceVertexId][destinationVertexId].push(weight);
    };
}

Graph.prototype.dijkstra = function(sourceVertexLabel) {
    var D = []; // undefined equal infinite
    var E = [1];

    for (var i = 2; i < this.vertices.length; i++) {
        D[i] = this.vertices[1][i];
    }

    for (var i = 2; i < this.vertices.length; i++) {
        
    }
};