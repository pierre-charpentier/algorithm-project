function Graph() {
    this.vertices = [];

    this.addVertex = function (vertexLabel) {
        this.vertices.push({ label: vertexLabel, successors: [] });
    };

    this.removeVertex = function (vertexId) {
        delete this.vertices[vertexId];
    };

    this.addEdge = function (sourceVertexId, destinationVertexId, weight) {
        this.vertices[sourceVertexId - 1].successors[destinationVertexId - 1] = weight;
    };
}

Graph.prototype.dijkstra = function (sourceVertexId) {
    sourceVertexId--;
    var N = this.vertices.length;
    var D = [];
    var E = [];
    E[sourceVertexId] = true;

    for (var i = 1; i < N; i++) {
        D[i] = this.vertices[sourceVertexId].successors[i] ||  Infinity;
    }

    for (i = 1; i < N && findMinimumIndex() >= 0; i++) {
        var t = findMinimumIndex();

        E[t] = true;
        this.vertices[t].successors.forEach(function (weight, vertexId) {
            var m = D[t] + weight;

            if(D[vertexId] > m) {
                D[vertexId] = m;
            }
        });
    }

    return D;

    function findMinimumIndex() {
        // This is to pass already processed vertices.
        var T = D.map(function (value, index) {
            if (E[index]) {
                value = Infinity;
            }

            return value;
        });

        var len = T.length,
            min = Infinity,
            index = -1;
        while (len--) {
            if (T[len] < min) {
                min = T[len];
                index = len;
            }
        }
        return index;
    }
};