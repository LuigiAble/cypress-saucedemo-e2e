import productsInCart from "../cypress/fixtures/productsInCart.json";

export const replaceStringWithDashes = (stringToReplace) =>
  stringToReplace.replace(/\s+/g, "-").toLowerCase();

export const roundTwoDecimals = (amount) => Math.round(amount * 100) / 100;

export const calculateSubTotal = () => {
  const subtotal = productsInCart.products
    .filter((prod) => !productsInCart.removedProducts.includes(prod.title))
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
