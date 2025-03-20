/**
  @param {string[]} names - Array of names to frame
  @returns {string} - The framed names
*/

export const createFrame = (names) => {
  if (!names || !Array.isArray(names) || names.length === 0) return "*";

  const stringNames = names.filter((name) => typeof name === "string");
  if (stringNames.length === 0) return "*";

  const maxLength = Math.max(...stringNames.map((name) => name.length));
  const border = "*".repeat(maxLength + 4); // +4 to adjust the asteryscs and spaces on both sides

  const framedNames = stringNames.map(
    (name) => `* ${name.padEnd(maxLength)} *`
  );

  return [border, ...framedNames, border].join("\n");
};

console.log(createFrame(["buzz", "bb", "fizzbuzz"]));
