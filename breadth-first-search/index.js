import { breadthFirstSearch } from './breadth-first-search.js';

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

const family = {
    Paul: ['Annie', 'Claire', 'Ella'],
    Annie: ['Paul', 'Claire', 'Ella'],
    Claire: ['Paul', 'Annie', 'Ella'],
    Ella: ['Paul', 'Annie', 'Claire'],
};


console.log(breadthFirstSearch(graph, 'A', 'F')); 