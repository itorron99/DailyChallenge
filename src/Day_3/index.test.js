import { organizeInventory } from ".";

describe("organizeInventory function", () => {
  test("should return an object", () => {
    const result = organizeInventory([]);
    expect.objectContaining(result);
  });

  test("should return empty object if input is [] | undefined | null | number | string | NaN | boolean | infinity", () => {
    const emptyResult = organizeInventory([]);
    const undefinedResult = organizeInventory(undefined);
    const nullResult = organizeInventory(null);
    const numResult = organizeInventory(0);
    const stringResult = organizeInventory("test");
    const NaNResult = organizeInventory(NaN);
    const booleanResult = organizeInventory(false);
    const infinityResult = organizeInventory(Infinity);

    expect(emptyResult).toEqual({});
    expect(undefinedResult).toEqual({});
    expect(nullResult).toEqual({});
    expect(numResult).toEqual({});
    expect(stringResult).toEqual({});
    expect(NaNResult).toEqual({});
    expect(booleanResult).toEqual({});
    expect(infinityResult).toEqual({});
  });

  test("should return object with name and total quantity inside object which is category", () => {
    const input = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
      { name: "piano", quantity: 4, category: "music" },
    ];
    const output = {
      toys: { car: 5, doll: 5 },
      sports: { ball: 2, racket: 4 },
      music: { piano: 4 },
    };

    const result = organizeInventory(input);
    expect(result).toEqual(output);
  });

  test("should return object with name and total quantity inside object which is category", () => {
    const input = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "bus", quantity: 0, category: "toys" },
      { name: "videogame", quantity: 1 },
    ];
    const output = {
      toys: { bus: 0, car: 3, doll: 5 },
      sports: { ball: 2 },
      undefined: { videogame: 1 },
    };

    const result = organizeInventory(input);
    expect(result).toEqual(output);
  });

  test("should return object even if input is an array of objects of random values", () => {
    const input = [
      { name: undefined, quantity: 5, category: "toys" },
      { name: "car", quantity: "3", category: "toys" },
      { name: "ball", quantity: 2, category: null },
      { name: "car", quantity: null, category: "toys" },
      { name: NaN, quantity: 4, category: "sports" },
      { name: "piano", quantity: NaN, category: "music" },
    ];
    const output = {
      music: { piano: NaN },
      null: { ball: 2 },
      sports: { NaN: 4 },
      toys: { car: "03null", undefined: 5 },
    };

    const result = organizeInventory(input);
    expect(result).toEqual(output);
  });
});
