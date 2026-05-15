const imperativeFibonacci = (n) => {
  const lastNums = [0, 1];
  let res;

  for (let i = 1; i <= n; i++) {
    res = lastNums[1];

    let temp = lastNums[1];

    lastNums[1] = lastNums[0] + lastNums[1];

    lastNums[0] = temp;
  }

  return res;
};

export const recursiveFibonacci = (n) => {
  // TODO
  if (n === 0) return res;

  let lastNums = [0, 1];

  return res + recursiveFibonacci(n - 1);
};
