var nodes = new vis.DataSet([{
            id: 1,
            label: 'A'
        }, {
            id: 2,
            label: 'B'
        }, {
            id: 3,
            label: 'C'
        }, {
            id: 4,
            label: 'D'
        }, {
            id: 5,
            label: 'E'
        }]);

        // create an array with edges
        var edges = new vis.DataSet([{
            from: 1,
            to: 2,
            value: 10,
            label: 10
        }, {
            from: 5,
            to: 3,
            value: 9,
            label: 9
        }, {
            from: 4,
            to: 3,
            value: 6,
            label: 6
        }, {
            from: 1,
            to: 5,
            value: 5,
            label: 5
        }, {
            from: 4,
            to: 1,
            value: 7,
            label: 7
        }, {
            from: 5,
            to: 4,
            value: 2,
            label: 2
        }, {
            from: 2,
            to: 5,
            value: 2,
            label: 2
        }, {
            from: 5,
            to: 2,
            value: 3,
            label: 3
        }, {
            from: 3,
            to: 4,
            value: 4,
            label: 4
        }, {
            from: 2,
            to: 3,
            value: 1,
            label: 1
        }]);

        // create a network
        var container = document.getElementById('network');

        // provide the data in the vis format
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            edges: {
                arrows: {
                    to: {
                        enabled: true,
                        scaleFactor: .5
                    }
                },
                scaling: {
                    max: .5,
                    label: {
                        enabled: false
                    }
                }
            }
        };

        // initialize your network!
        var network = new vis.Network(container, data, options);