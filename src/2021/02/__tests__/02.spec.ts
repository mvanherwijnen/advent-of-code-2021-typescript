import fs from 'fs';
import path from 'path';
import { getProductOfHorizontalPositionAndDepth, getProductOfHorizontalPositionAndDepthWithAim } from '..';

describe('02', () => {
  test('part 1 example works', () => {
    const lines = fs.readFileSync(path.resolve('src/2021/02/input/example.txt')).toString('utf-8').split("\n");
    expect(getProductOfHorizontalPositionAndDepth(lines)).toBe(150);
  })

  test('part 1 actual works', () => {
    const lines = fs.readFileSync(path.resolve('src/2021/02/input/actual.txt')).toString('utf-8').split("\n");
    expect(getProductOfHorizontalPositionAndDepth(lines)).toBe(1636725);
  })

  test('part 2 example works', () => {
    const lines = fs.readFileSync(path.resolve('src/2021/02/input/example.txt')).toString('utf-8').split("\n");
    expect(getProductOfHorizontalPositionAndDepthWithAim(lines)).toBe(900);
  })

  test('part 2 actual works', () => {
    const lines = fs.readFileSync(path.resolve('src/2021/02/input/actual.txt')).toString('utf-8').split("\n");
    expect(getProductOfHorizontalPositionAndDepthWithAim(lines)).toBe(1872757425);
  })
})