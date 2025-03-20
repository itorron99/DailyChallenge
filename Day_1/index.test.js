import { prepareGifts } from ".";

describe("prepareGifts function", () => {
  test("should return a string", () => {
    const result = prepareGifts([]);
    expect.arrayContaining(result);
  });

  test("should return empty array if input is [] | undefined | null | number | string | NaN | boolean | infinity", () => {
    const emptyResult = prepareGifts([]);
    const undefinedResult = prepareGifts(undefined);
    const nullResult = prepareGifts(null);
    const numResult = prepareGifts(0);
    const stringResult = prepareGifts("test");
    const NaNResult = prepareGifts(NaN);
    const booleanResult = prepareGifts(false);
    const infinityResult = prepareGifts(Infinity);

    expect(emptyResult).toEqual([]);
    expect(undefinedResult).toEqual([]);
    expect(nullResult).toEqual([]);
    expect(numResult).toEqual([]);
    expect(stringResult).toEqual([]);
    expect(NaNResult).toEqual([]);
    expect(booleanResult).toEqual([]);
    expect(infinityResult).toEqual([]);
  });

  test("should return unique and sorted array", () => {
    const input = [3, 1, 2, 3, 4, 2, 5];

    const result = prepareGifts(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return array with unique values only", () => {
    const input = [10, 10, 10, 10];

    const result = prepareGifts(input);
    expect(result).toEqual([10]);
  });

  test("should return array sorted in ascending order", () => {
    const input = [5, 1, 4, 3, 2];

    const result = prepareGifts(input);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should return array of numbers even if input is an array of random values", () => {
    const input = [4, undefined, null, 2, "1", NaN, -1, false, 0 / 0];

    const result = prepareGifts(input);
    expect(result).toEqual([-1, 2, 4]);
  });
});
