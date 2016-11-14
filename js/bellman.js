function Bellman() {
    this.graph = undefined,
        this.N = 0,
        this.D = [],
        this.E = [],
        this.pred = [];

    this.init = function (graph) {
            this.graph = graph,
                this.N = graph.vertices.length,
                this.D = [],
                this.E = [],
                this.pred = [];
        },
        this.run = function (sourceVertexId) {
            if (!this.graph) {
                return;
            }

            var self = this;
            sourceVertexId--;

            this.E[sourceVertexId] = true;
            console.log("E1 : " + this.E);

            for (var i = 0; i < this.N; i++) {
                this.D[i] = this.graph.vertices[sourceVertexId].successors[i] || Infinity;
            }

            for (i = 0; i < this.N; i++) {
                var t = this.chooseVertex();
                console.log("t: " + t);
                if (t !== undefined) {
                    this.E[t] = true;
                    this.getPredecessors(t).forEach(function (predecessorId, index) {
                        var _m = self.D[predecessorId] + self.graph.vertices[predecessorId].successors[t];

                        if (_m < self.D[predecessorId]) {
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

        this.chooseVertex = function () {
            var self = this;
            var wrongVertices = [];
            var index = undefined;

            console.log("E: " + this.E);

            for (var i = 0; i < this.N; i++) {
                wrongVertices[i] = false;
            }

            for (var i = 0; i < this.N; i++) {
                if (!self.E[i]) {
                    self.graph.vertices[i].successors.forEach(function (value, vertexId) {
                            console.log(i + " : " + vertexId);
                            wrongVertices[vertexId] = true;
                    });
                } else {
                    wrongVertices[i] = true;
                }
            }

            console.log("Wrong: " + wrongVertices);

            wrongVertices.forEach(function (value, _index) {
                if (!value && index == undefined) {
                    index = _index;
                }
            });

            console.log("Index: " + index);

            return index;
        }
};

Bellman.prototype.getPredecessors = function (vertexId) {
    var predecessors = [];

    this.graph.vertices.forEach(function (value, index) {
        if (value.successors[vertexId]) {
            predecessors.push(index);
        }
    });

    return predecessors;
}