/**
    @param { number[] } gifts - Array of gifts number
    @returns { number[] } - Sorted array of gifts number
*/

export const prepareGifts = (gifts) => {
  if (!gifts || !Array.isArray(gifts) || !gifts.length === 0) return [];

  return [
    ...new Set(
      gifts?.filter((gift) => typeof gift === "number" && !isNaN(gift)).sort()
    ),
  ];
};
