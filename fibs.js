function fibs(n) {
  outs = [0, 1];
  if (n <= 2) return outs.slice(0, n);
  while (n > 2) {
    outs.push(outs.slice(-2).reduce((a, b) => a + b));
    n -= 1;
  }
  return outs;
}

console.log(fibs(0));
console.log(fibs(2));
console.log(fibs(8));

function fibsRec(n) {
  return n < 3
    ? [0, 1].slice(0, n)
    : fibsRec(n - 1).concat(
        fibsRec(n - 1)
          .slice(-2)
          .reduce((a, b) => a + b)
      );
}

console.log(fibsRec(0));
console.log(fibsRec(2));
console.log(fibsRec(8));
