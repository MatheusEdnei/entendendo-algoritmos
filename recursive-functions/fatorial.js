// Fatorial function using recursive

export function fatorial(x) {
    if (x === 1) return 1;
    return x * fatorial(x - 1);
}

console.log(fatorial(3));