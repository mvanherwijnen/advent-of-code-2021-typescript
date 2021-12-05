export const countTrees = (input: string[]): number => {
  let count = 0;
  let x = 0;
  let y = 0;
  while (y < input.length) {
    if (input[y].charAt(x % input[0].length) === '#') {
      count++;
    }
    x += 3; 
    y++;
  }

  return count;
}

export const countTreesMultipleSlopes = (input: string[]): number => {
  const counts = [];

  const slopes = [
    {x: 1, y: 1},
    {x: 3, y: 1},
    {x: 5, y: 1},
    {x: 7, y: 1},
    {x: 1, y: 2},
  ]

  for (const slope of slopes) {
    let count = 0;
    let x = 0;
    let y = 0;
  
    while (y < input.length) {
      if (input[y].charAt(x % input[0].length) === '#') {
        count++;
      }
      x += slope.x; 
      y += slope.y;
    }
  
    counts.push(count);
  }


  return counts.reduce((total, count) => total * count, 1);
}