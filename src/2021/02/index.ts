export const getProductOfHorizontalPositionAndDepth = (input: string[]): number => {
  let hPosition = 0;
  let depth = 0;

  for (const command of input) {
    const [direction, value] = command.split(' ');
    switch (direction) {
      case 'forward':
        hPosition += Number(value);
        break;
      case 'down':
        depth += Number(value);
        break;
      case 'up':
        depth -= Number(value);
        break;
      default:
        throw new Error(`Unknown command=${direction}`)
    }
  }

  return hPosition * depth;
}

export const getProductOfHorizontalPositionAndDepthWithAim = (input: string[]): number => {
  let hPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const command of input) {
    const [direction, value] = command.split(' ');
    switch (direction) {
      case 'forward':
        hPosition += Number(value);
        depth += Number(value) * aim;
        break;
      case 'down':
        aim += Number(value);
        break;
      case 'up':
        aim -= Number(value);
        break;
      default:
        throw new Error(`Unknown command=${direction}`)
    }
  }

  return hPosition * depth;
}