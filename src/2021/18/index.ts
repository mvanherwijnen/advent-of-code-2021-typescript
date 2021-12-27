import XRegExp from 'xregexp';

export const addSnailFishNumbers = (numbers: string[]) => {
  const result = numbers.reduce<string>((sum, entry) => {
    return reduce(concat(sum, entry));
  }, '')
  return magnitude(result);
}

const concat = (a: string, b: string): string => {
  if (!a) {
    return b;
  }
  return `[${a},${b}]`;
}

const reduce = (snailFishNumber: string): string => {
  let performedReduceOperation = true;
  let result = snailFishNumber;

  while (performedReduceOperation) {
    performedReduceOperation = false;
    const [explosionResult, didExplode] = explode({depth: 1, left: '[', right: ']'}, XRegExp.matchRecursive(result, '\\[', '\\]')[0]);
    result = explosionResult;
    if (didExplode) {
      console.log(`Exploded: ${explosionResult}`)
      performedReduceOperation = true;
      continue;
    }

    const [splitResult, didSplit] = split(result);
    console.log(`Splitted: ${splitResult}`)
    result = splitResult;
    if (didSplit) {
      performedReduceOperation = true
    }
  }

  console.log(`Reduced ${snailFishNumber}\nresult=${result}`);

  return result;
}

type Accumulator = {
  depth: number;
  left: string;
  right: string;
}
type ProcessExplosionArgs = {
  string: string;
  position: 'left' | 'right';
  value: number;
};

const addToLastNumberInString = (v: string, value: number): string => {
  return v.replace(/[0-9]+(?!.*[0-9])/, function(match) {
      return String(parseInt(match, 10)+value);
  });
}

const addToFirstNumberInString = (v: string, value: number): string => {
  return v.replace(/[0-9]+/, function(match) {
      return String(parseInt(match, 10)+value);
  });
}

const processExplosion = ({string, position, value}: ProcessExplosionArgs): string => {
  if (position === 'left') {
    return addToLastNumberInString(string, value).slice(0,-1);

  }
  return addToFirstNumberInString(string, value).slice(1)
}

const explode = (accumulator: Accumulator, snailFishNumber: string): [string, boolean] => {
  //console.log(`left=${accumulator.left}|center=${snailFishNumber}|right=${accumulator.right}\n${accumulator.left + snailFishNumber + accumulator.right}`);
  const matches = XRegExp.matchRecursive(snailFishNumber, '\\[', '\\]', 'g');
  if (matches.length === 0) {
    //console.log(`leaf reached=${snailFishNumber} on depth=${accumulator.depth}`);
    if (accumulator.depth > 4) {
      //console.log(`Exploding`);
      const [left, right] = snailFishNumber.split(',');
      const result = `${processExplosion({string: accumulator.left, position: 'left', value: Number(left)})}0${processExplosion({string: accumulator.right, position: 'right', value: Number(right)})}`
      //console.log(`Result=${result}`);
      return [result, true];
    }
    return [`${accumulator.left}${snailFishNumber}${accumulator.right}`, false];
  }
 
  if (matches.length === 1) {
    let newAccumulator = {
      ...accumulator,
      depth: accumulator.depth + 1
    };
    if (snailFishNumber.charAt(0) === '[') {
      newAccumulator.right = ']' + snailFishNumber.split(']')[1] + accumulator.right;
      newAccumulator.left = accumulator.left + '[';
      //console.log('Performing only left explode')
    } else {
      newAccumulator.left = accumulator.left + snailFishNumber.split('[')[0] + '[';
      newAccumulator.right = ']' + accumulator.right;
     // console.log('Performing only right explode')
    }
    const [result, didExplode] = explode(newAccumulator, matches[0]);
    if (didExplode) {
      return [result, true];
    }

    return [`${accumulator.left}${snailFishNumber}${accumulator.right}`, false];
  }

  //console.log('Performing left explode')
  const [leftResult, didLeftExplode] = explode({
    ...accumulator, 
    depth: accumulator.depth + 1, 
    left: `${accumulator.left}[`, 
    right: `],[${matches[1]}]${accumulator.right}`}, matches[0]);
  if (didLeftExplode) {
    return [leftResult, true];
  }

  //console.log('Performing right explode')
  const [rightResult, didRightExplode] = explode({
    ...accumulator, 
    depth: accumulator.depth + 1, 
    right: `]${accumulator.right}`, 
    left: `${accumulator.left}[${matches[0]}],[`}, matches[1]);
  if (didRightExplode) {
    return [rightResult, true];
  }
  
  return [`${accumulator.left}${snailFishNumber}${accumulator.right}`, false];
}

const split = (snailFishNumber: string): [string, boolean] => {
  let didSplit= false;
  const result = snailFishNumber.replace(/[0-9]{2}/, function(match) {
    if (!match) {
      return match || '';
    }
    didSplit = true;
    const value = Number(match);
    return `[${Math.floor(value/2)},${Math.ceil(value/2)}]`
  });
  return [result, didSplit];
} 

const magnitude = (snailFishNumber: string): number => {
  return 0;
}