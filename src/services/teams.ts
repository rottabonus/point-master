const combinations = <T>(xs: Array<T>, n: number): Array<T[]> =>
  xs.flatMap((x, i) => {
    const result =
      n == 1 || i > 0
        ? [[x]]
        : combinations(xs.slice(i + 1), n - 1).map(combo => {
            const arr = [x, ...combo];
            return arr;
          });
    return result;
  });

const shuffle = <T>(array: Array<T>) =>
  array
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

export const createRounds = (players: Array<string>, teamSize: number) => {
  const allCombinations = combinations(players, teamSize);

  const firstPlayerPermutations = allCombinations.filter(team =>
    team.includes(players[0]),
  );

  const complemented = firstPlayerPermutations.map(teamA => {
    const teamB = players.filter(p => !teamA.includes(p));
    return {
      teamA,
      teamB,
    };
  });
  return shuffle(complemented);
};
