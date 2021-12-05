import { productOfSumElementsTo2020, productOfThreeSumElementsTo2020 } from ".."
import input from '../input/input.json';

describe('2020-01', () => {
  test('example works', () => {
    expect(productOfSumElementsTo2020([1721,979,366,299,675,1456])).toBe(514579);
  })

  test('actual works', () => {
    expect(productOfSumElementsTo2020(input)).toBe(988771);
  })

  test('part-two-example-works', () => {
    expect(productOfThreeSumElementsTo2020([1721,979,366,299,675,1456])).toBe(241861950);
  })

  test('part-two-actual-works', () => {
    expect(productOfThreeSumElementsTo2020(input)).toBe(171933104);
  })
})