import fs from 'fs';
import path from 'path';
import { countTrees, countTreesMultipleSlopes } from '..';

describe('03', () => {
  test('03 part one example', () => {
    const lines = fs.readFileSync(path.resolve('src/2020/03/input/example.txt')).toString('utf-8').split("\n");
    expect(countTrees(lines)).toBe(7);
  })

  test('03 part one actual', () => {
    const lines = fs.readFileSync(path.resolve('src/2020/03/input/actual.txt')).toString('utf-8').split("\n");
    expect(countTrees(lines)).toBe(195);
  })

  test('03 part two example', () => {
    const lines = fs.readFileSync(path.resolve('src/2020/03/input/example.txt')).toString('utf-8').split("\n");
    expect(countTreesMultipleSlopes(lines)).toBe(336);
  })

  test('03 part two actual', () => {
    const lines = fs.readFileSync(path.resolve('src/2020/03/input/actual.txt')).toString('utf-8').split("\n");
    expect(countTreesMultipleSlopes(lines)).toBe(3772314000);
  })
})