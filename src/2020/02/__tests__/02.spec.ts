import { countCorrectPasswords, countCorrectPasswordsUsingPositions } from "..";
import exampleInput from '../input/example.json';
import actualInput from '../input/actual.json';


describe('02', () => {
  test('02-example', () => {
    expect(countCorrectPasswords(exampleInput)).toBe(2);
  })

  test('02-actual', () => {
    expect(countCorrectPasswords(actualInput)).toBe(622);
  })

  test('02-part-two-example', () => {
    expect(countCorrectPasswordsUsingPositions(exampleInput)).toBe(1);
  })

  test('02-part-two-actual', () => {
    expect(countCorrectPasswordsUsingPositions(actualInput)).toBe(263);
  })
})