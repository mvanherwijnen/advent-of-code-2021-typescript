export const countIncreasingSuccessors = (input: number[]): number => {
  
  let count = 0;
  let previous: number | undefined;
  const length = input.length;

  for (const star of input) {
    if (previous && star > previous) {
      count++;
    }

    previous = star;
  }

  return count;
}

export const countIncreasingSuccessorsWithSlidingWindows = (input: number[]): number => {

  let count = 0;
  const length = input.length

  for (let i = 0; i < length; i++) {
    if (i - 3 < 0) {
      continue;
    }

    const minus3 = input[i - 3];
    const minus2 = input[i - 2];
    const minus1 = input[i - 1];
    const self = input[i];

    if ((minus3 + minus2 + minus1) < (minus2 + minus1 + self)) {
      count++;
    }
  }

  return count;
}