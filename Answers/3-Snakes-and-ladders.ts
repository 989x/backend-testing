type Board = { 
  ladders: [number, number][];
  snakes: [number, number][];
};

// Function to find the quickest path to win the game using BFS
function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
  const start = 1;
  const target = 100;
  const visited: boolean[] = Array(101).fill(false);
  const queue: [number, number[]][] = [[start, []]];

  while (queue.length > 0) {
    const [current, path] = queue.shift() || [0, []];

    // Check if the target position is reached
    if (current === target) {
      return path;
    }
    // Explore possible moves from the current position
    if (!visited[current]) {
      visited[current] = true;

      // Loop through possible dice rolls (from 6 to 1)
      for (let roll = 6; roll >= 1; roll--) {
        const next = current + roll;
        const nextPosition = getNextPosition(next, board);
        queue.push([nextPosition, [...path, roll]]);
      }
    }
  }

  // If no path found, return an empty array
  return [];
}

// Function to determine the next position considering ladders and snakes
function getNextPosition(position: number, board: Board): number {
  // Check if the position is the start of a ladder
  for (const [start, end] of board.ladders) {
    if (start === position) {
      return end;
    }
  }

  // Check if the position is the start of a snake
  for (const [start, end] of board.snakes) {
    if (start === position) {
      return end;
    }
  }

  // If neither ladder nor snake, return the original position
  return position;
}

// Examples
const resultOfQuickestPath = quickestPath({
  ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
  snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]],
});

console.log(resultOfQuickestPath); // Output: [2, 5, 6, 6, 1]
