export const replaceStringWithDashes = (stringToReplace) =>
  stringToReplace.replace(/\s+/g, "-").toLowerCase();

export const roundTwoDecimals = (amount) => Math.round(amount * 100) / 100;

export const calculateAmountsToPay = (productsInCart) => {
  const subtotal = productsInCart.products
    .filter((prod) => prod.status === "added")
    .map(({ price }) => price)
    .reduce((curr, next) => curr + next);
  const taxes = roundTwoDecimals(subtotal * 0.08);
  const total = roundTwoDecimals(subtotal + taxes);
  return {
    subtotal,
    taxes,
    total,
  };
};
