function Dijkstra() {
    this.graph = undefined;
    this.N = 0;
    this.D = [];
    this.E = [];
    this.pred = [];
    this.sourceVertexId;

    this.run = function() {
        if (!this.graph) {
            return;
        }

        var self = this;

        this.pred[this.sourceVertexId] = this.sourceVertexId;

        this.E[this.sourceVertexId] = true;

        for (var i = 0; i < this.N; i++) {
            this.D[i] = this.graph.vertices[this.sourceVertexId].successors[i] || Infinity;
            this.pred[i] = this.D[i] == Infinity ? undefined : this.sourceVertexId;
        }

        for (i = 0; i < this.N; i++) {
            var t = this.findMinimumIndex();

            if (t) {
                this.E[t] = true;
                this.graph.vertices[t].successors.forEach(function(weight, vertexId) {
                    var m = self.D[t] + weight;

                    if (self.D[vertexId] > m) {
                        self.D[vertexId] = m;
                        self.pred[vertexId] = t;
                    }
                });
            } else {
                // If no minimum is found, we can stop
                break;
            }
        }
    }

    this.findMinimumIndex = function() {
        var self = this;
        // This is to ignore already processed vertices (E)
        // So T is X with all vertices contained in E set to an infinite weight
        var T = this.D.map(function(value, index) {
            if (self.E[index]) {
                value = Infinity;
            }

            return value;
        });

        // Find the index of the minimum in T
        // index is undefined if everything is infinite (i.e All vertices have been processed)
        var len = T.length,
            min = Infinity,
            index = undefined;
        while (len--) {
            if (T[len] < min) {
                min = T[len];
                index = len;
            }
        }

        return index;
    }
}

Dijkstra.prototype.init = function(graph, sourceVertexId) {
    this.graph = graph;
    this.N = graph.vertices.length;
    this.D = [];
    this.E = [];
    this.pred = [];
    this.sourceVertexId = sourceVertexId - 1;
}

Dijkstra.prototype.getPath = function(destinationVertexId) {
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

Dijkstra.prototype.getWeight = function(destinationVertexId) {
    return this.D[destinationVertexId - 1];
}