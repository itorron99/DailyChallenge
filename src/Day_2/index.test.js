import { createFrame } from ".";

describe("createFrame function", () => {
  test("should return a string", () => {
    const result = createFrame([]);
    expect.stringContaining(result);
  });

  test("should return unique '*' if input is [] | undefined | null | number | string | NaN | boolean | infinity", () => {
    const emptyResult = createFrame([]);
    const undefinedResult = createFrame(undefined);
    const nullResult = createFrame(null);
    const numberResult = createFrame(0);
    const stringResult = createFrame("test");
    const NaNResult = createFrame(NaN);
    const booleanResult = createFrame(false);
    const infinityResult = createFrame(Infinity);

    expect(emptyResult).toMatch("*");
    expect(undefinedResult).toMatch("*");
    expect(nullResult).toMatch("*");
    expect(numberResult).toMatch("*");
    expect(stringResult).toMatch("*");
    expect(NaNResult).toMatch("*");
    expect(booleanResult).toMatch("*");
    expect(infinityResult).toMatch("*");
  });

  test("should return a frame with sorted names", () => {
    const result = createFrame(["fizz", "fizzbuzz"]);
    const output = `************\n* fizz     *\n* fizzbuzz *\n************`;

    // Open console to see what´s the expected output
    console.info(output);
    expect(result).toMatch(output);
  });

  test("should return a frame with not sorted names", () => {
    const result = createFrame(["buzz", "bb", "fizzbuzz"]);
    const output = `************\n* buzz     *\n* bb       *\n* fizzbuzz *\n************`;

    // Open console to see what´s the expected output
    console.info(output);
    expect(result).toMatch(output);
  });

  test("should return a frame with names even if input is an array of random values", () => {
    const input = [4, undefined, null, 2, "1", NaN, -1, false, 0 / 0];

    const result = createFrame(input);
    const output = `*****\n* 1 *\n*****`;

    // Open console to see what´s the expected output
    console.info(output);
    expect(result).toMatch(output);
  });
});
