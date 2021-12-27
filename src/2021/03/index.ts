

export const multiplyGammaByEpsilon = (lines: string[]): number => {
  const counts = lines.reduce<number[]>((counts: number[], line: string) => {
    for (let i = 0; i < line.length ; i++) {
      if (line.charAt(i) === '1') {
        counts[i]++
      }
    }
    return counts;
  }, new Array(lines[0].length).fill(0))

  const threshold = lines.length / 2;
  const gammaBin = toGamma(counts, threshold);
  const gamma = parseInt(gammaBin, 2);
  const epsilonBin = toEpsilon(counts, threshold);
  const epsilon = parseInt(epsilonBin, 2);
  return gamma * epsilon;
}

const toGamma = (counts: number[], threshold: number): string => {
  return counts.map((count) => count > threshold ? '1' : '0').join('');
}

const toEpsilon = (counts: number[], threshold: number): string => {
  return counts.map((count) => count < threshold ? '1' : '0').join('');
}

export const multiplyOxygenByCO2 = (lines: string[]): number => {
  const oxy = calcOxy(lines);
  const co2 = calcOxy(lines, true);
  return oxy * co2;
}

const calcOxy = (lines: string[], negate = false): number => {
  let filteredLines = lines;
  for (let i = 0; i < lines.length; i++) {
    const count = filteredLines.reduce((count, line) => {
      if (line.charAt(i) === '1') {
        return count + 1;
      }
      return count;
    }, 0);

    let leadingBit = '0';
    if (filteredLines.length / 2 < count) {
      leadingBit = negate ? '0' : '1'
    }
    else if (filteredLines.length / 2 > count) {
      leadingBit = negate ? '1' : '0'
    } else {
      leadingBit = negate ? '0' : '1';
    }

    filteredLines = filteredLines.filter((line) => line.charAt(i) === leadingBit);
    console.log(`${negate ? 'co2' : 'oxy'} lines=${JSON.stringify(filteredLines)}`)
    if (filteredLines.length === 1) {
      return parseInt(filteredLines[0], 2);
    }
  }
  throw new Error('did not terminate');
}