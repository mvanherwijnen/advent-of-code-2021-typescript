import { countIncreasingSuccessors, countIncreasingSuccessorsWithSlidingWindows } from "..";
import input from '../input/input.json';

describe('01', () => {
  test('example works', () => {
    expect(countIncreasingSuccessors([199,200,208,210,200,207,240,269,260,263])).toBe(7);
  })

  test('actual-01 works', () => {
    expect(countIncreasingSuccessors(input)).toBe(1696);
  })

  test('actual-02 works', () => {
    expect(countIncreasingSuccessorsWithSlidingWindows(input)).toBe(1737);
  })
})