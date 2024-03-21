// named export
export const getDoubleDigitsNumbers = (array) =>
  array.filter((el) => Math.abs(el).toString().length === 2);
