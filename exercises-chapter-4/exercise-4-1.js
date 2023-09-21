// Escreva o código para a função soma, vista anteriormente

export function soma (arr) {
    if (arr.length === 1) return arr[0];
    const arraySliced = arr.slice(1);
    return arr[0] + soma(arraySliced);
}

console.log(soma([2,4,6]));