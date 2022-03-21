export const combinations = <T>(xs: Array<T>, n: number): Array<T[]> =>
  xs.flatMap((x, i) => {
    const result =
      n == 1
        ? [[x]]
        : combinations(xs.slice(i + 1), n - 1).map(combo => [x, ...combo]);
    return result;
  });
