const seen = [0,1,1];
const fibo = (n) => {
  if (seen[n]) return seen[n];
  else {
    seen[n] = fibo(n-1) + fibo(n-2);
  }

  return seen[n];
}

console.log(fibo(60));
