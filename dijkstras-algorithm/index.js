import { dijkstra } from "./dijkstra.js";

const graph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        end: 1
    },
    b: {
        a: 3,
        end: 5
    },
    end: {}
};

console.log(dijkstra(graph, "start", "end")); // 6
