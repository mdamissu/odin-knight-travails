function knightMoves(start, end) {
  const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];

  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [{ pos: start, path: [start] }];

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const { pos, path } = queue.shift();

    if (pos[0] === end[0] && pos[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(p => console.log(p));
      return path;
    }

    for (let [dx, dy] of moves) {
      const next = [pos[0] + dx, pos[1] + dy];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push({ pos: next, path: [...path, next] });
      }
    }
  }
}

knightMoves([0, 0], [1, 2]);
console.log('----------------------');
knightMoves([0, 0], [3, 3]);
console.log('----------------------');
knightMoves([0, 0], [7, 7]);
