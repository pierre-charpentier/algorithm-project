function Bellman() {
    this.graph = undefined;
    this.N = 0;
    this.D = [];
    this.E = [];
    this.pred = [];

    this.run = function(sourceVertexId) {
            if (!this.graph) {
                return;
            }

            var self = this;
            sourceVertexId--;

            this.E[sourceVertexId] = true;

            // Set initial weights
            for (var i = 0; i < this.N; i++) {
                this.D[i] = this.graph.vertices[sourceVertexId].successors[i];

                if (this.D[i] === undefined) {
                    this.D[i] = Infinity;
                }

                this.pred[i] = this.D[i] == Infinity ? undefined : sourceVertexId;
            }

            console.log("pred: " + this.pred);

            for (i = 0; i < this.N; i++) {
                var t = this.chooseVertex();

                if (t !== undefined) {
                    this.E[t] = true;
                    this.getPredecessors(t).forEach(function(predecessorId, index) {
                        var _m = self.D[predecessorId] + self.graph.vertices[predecessorId].successors[t];

                        if (_m < self.D[t]) {
                            self.D[t] = _m;
                            self.pred[t] = predecessorId;
                        }
                    });
                } else {
                    // If no minimum is found, we can stop the process. That means no new routes can be found.
                    break;
                }
            }
        },

        this.chooseVertex = function() {
            var self = this;
            var wrongVertices = [];
            var index = undefined;

            for (var i = 0; i < this.N; i++) {
                wrongVertices[i] = false;
            }

            for (var i = 0; i < this.N; i++) {
                if (!self.E[i]) {
                    self.graph.vertices[i].successors.forEach(function(value, vertexId) {
                        wrongVertices[vertexId] = true;
                    });
                } else {
                    wrongVertices[i] = true;
                }
            }

            wrongVertices.forEach(function(value, _index) {
                if (!value && index == undefined) {
                    index = _index;
                }
            });

            return index;
        }
};


Bellman.prototype.init = function(graph) {
    this.graph = graph;
    this.N = graph.vertices.length;
    this.D = [];
    this.E = [];
    this.pred = [];
}

Bellman.prototype.getPredecessors = function(vertexId) {
    var predecessors = [];

    this.graph.vertices.forEach(function(value, index) {
        if (value.successors[vertexId]) {
            predecessors.push(index);
        }
    });

    return predecessors;
}


Bellman.prototype.getPath = function(destinationVertexId) {
    var path = [destinationVertexId];

    if (this.pred.length > 0) {
        var currentVertexId = destinationVertexId - 1;

        while (currentVertexId != this.sourceVertexId) {
            path.unshift(this.pred[currentVertexId] + 1);
            currentVertexId = this.pred[currentVertexId];
        }
    }

    return path;
}

Bellman.prototype.getWeight = function(destinationVertexId) {
    return this.D[destinationVertexId - 1];
}