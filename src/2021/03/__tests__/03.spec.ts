import fs from 'fs';
import path from 'path';
import { multiplyGammaByEpsilon, multiplyOxygenByCO2 } from '..';

test('03 part one example', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/03/input/example.txt')).toString('utf-8').split("\n");
  expect(multiplyGammaByEpsilon(lines)).toBe(198);
})

test('03 part one actual', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/03/input/actual.txt')).toString('utf-8').split("\n");
  expect(multiplyGammaByEpsilon(lines)).toBe(741950);
})

test('03 part two example', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/03/input/example.txt')).toString('utf-8').split("\n");
  expect(multiplyOxygenByCO2(lines)).toBe(230);
})

test('03 part two actual', () => {
  const lines = fs.readFileSync(path.resolve('src/2021/03/input/actual.txt')).toString('utf-8').split("\n");
  expect(multiplyOxygenByCO2(lines)).toBe(903810);
})