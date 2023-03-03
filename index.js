import { binarySearch } from './search-methods/binarySearch.js'

const list = [1, 3, 5, 7, 9]
const item = -1

console.log(binarySearch(list, item))
console.log( list[binarySearch(list, item)] )