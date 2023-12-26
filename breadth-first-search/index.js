import { breadthFirstSearch } from './breadth-first-search.js';

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

console.log(breadthFirstSearch(graph, 'A', 'F')); 