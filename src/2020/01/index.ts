export const productOfSumElementsTo2020 = (input: number[]): number => {
  input.sort((a,b) => a - b);

  const length = input.length;
  let lIndex = 0;
  let rIndex = length -1;

  while (true) {
    const left = input[lIndex];
    const right = input[rIndex];
    if (left + right === 2020) {
      return left * right;
    }

    if (left + right < 2020) {
      lIndex++;
    }

    if (left + right > 2020) {
      rIndex--;
    }

    if (lIndex === rIndex) {
      throw new Error('No solution possible');
    }
  }
}

interface SumOfTwoEntry {
  value: number;
  product: number;
  index1: number;
  index2: number;
} 

export const productOfThreeSumElementsTo2020 = (input: number[]): number => {
  input.sort((a,b) => a - b);
  const length = input.length;

  const sumOfTwoArray: SumOfTwoEntry[] = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      sumOfTwoArray.push({
        value: input[i] + input[j],
        product: input[i] * input[j],
        index1: i,
        index2: j,
      })
    }
  }

  sumOfTwoArray.sort((a,b) => a.value - b.value);
  const lengthSumOfTwo = sumOfTwoArray.length;
  let lIndex = 0;
  let rIndex = lengthSumOfTwo - 1;

  while (true) {
    console.log(lIndex, rIndex);

    const left = input[lIndex];
    const right = sumOfTwoArray[rIndex];

    console.log(left, right.value);

    const numberAlreadyUsed = lIndex === right.index1 || lIndex === right.index2;

    if (left + right.value === 2020 && !numberAlreadyUsed) {
      return left * right.product;
    }

    if (left + right.value < 2020) {
      lIndex++;
    }

    if (left + right.value > 2020) {
      rIndex--;
    }

    if (numberAlreadyUsed && left + right.value === 2020) {
      lIndex++;
    }

    if (lIndex > length || rIndex < 0) {
      throw new Error('No solution possible');
    }
  }
}