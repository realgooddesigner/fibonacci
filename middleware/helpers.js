const shuffle = (xs) => {
  let i = xs.length, tmp, ri;

  while (0 !== i) {
    ri = Math.floor(Math.random() * i);
    i -= 1;
    tmp = xs[i];
    xs[i] = xs[ri];
    xs[ri] = tmp;
  }

  return xs;
}

const rand = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const fibonacci = () => {
  let i;
  let fib = []; // Initialize array!
debugger;
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  };
}

module.exports = (req, res, next) => {
  res.locals.helpers = {
    shuffle,
    rand,
    fibonacci,
  };

  next();
};