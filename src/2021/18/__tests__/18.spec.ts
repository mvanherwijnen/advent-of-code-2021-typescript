import fs from 'fs';
import path from 'path';
import { addSnailFishNumbers } from '..';
test('18 part one example', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/18/input/example.txt')).toString('utf-8').split("\n");
  expect(addSnailFishNumbers(lines)).toBe(4140);
})

test('18 part one actual', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/18/input/actual.txt')).toString('utf-8').split("\n");
  expect(addSnailFishNumbers(lines)).toBe(903810);
})