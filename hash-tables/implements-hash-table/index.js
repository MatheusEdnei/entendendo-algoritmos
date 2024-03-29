import HashTable from './HashTable.js';

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("ǻ", 100);

console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]
console.log(ht.get("ǻ")); // [ 'ǻ', 100 ]   

ht.display();
