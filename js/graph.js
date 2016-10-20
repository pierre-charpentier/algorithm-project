function Graph() {
    this.vertices = {};

    this.addVertex = function(vertexLabel) {
        if(!this.vertices.hasOwnProperty(vertexLabel)) {
            this.vertices[vertexLabel] = {};
        }
    };

    this.removeVertex = function(vertexLabel) {
        delete this.vertices[vertexLabel];
    };

    this.addEdge = function(sourceVertexLabel, destinationVertexLabel, weight) {
        if(!this.vertices[sourceVertexLabel].hasOwnProperty(destinationVertexLabel)) {
            this.vertices[sourceVertexLabel][destinationVertexLabel] = [];
        }

        this.vertices[sourceVertexLabel][destinationVertexLabel].push(weight);
    };

    this.dijkstra = function(sourceVertexLabel, destinationVertexLabel) {
        
    };
}