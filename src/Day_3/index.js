/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */

export const organizeInventory = (inventory) => {
  if (!inventory || !Array.isArray(inventory) || inventory.length === 0) {
    return {};
  }

  return inventory.reduce((accValue, { name, category, quantity }) => {
    accValue[category] = accValue[category] || {};
    accValue[category][name] = (accValue[category][name] || 0) + quantity;
    return accValue;
  }, {});
};
