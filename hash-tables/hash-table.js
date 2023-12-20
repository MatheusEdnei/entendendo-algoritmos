/**
 * Javascript usa o Map como hash table.
 * O object (instanciando um novo objeto) também pode ser usado como hash table. 
 * No entanto, o object possui algumas questões, tais como: propriedades herdadas que não podem ser reescritas,
 * propriedades herdadas que podem causar problemas em momentos de alteração.
 */

const collection = new Map();

collection.set("name", "John");
collection.set("age", 30);

console.log(collection.get("name"));
console.log(collection.size);

for (let [key, value] of collection) {
    console.log(`${key} = ${value}`);
}