const getProductsByCategory = (products, category) =>
  products
    .filter((el) => el.category.toLowerCase() === category.toLowerCase())
    .map((el) => el.name);

const getSumOfPrices = (products) =>
  products.reduce((sum, el) => sum + el.price, 0);

const getAveragePrice = (products) => {
  const sum = getSumOfPrices(products);
  return sum / products.length;
};

const getTheCheapestProduct = (products) => {
  const copy = [...products];
  copy.sort((a, b) => a.price - b.price);

  return copy[0];
};

export default {
  getProductsByCategory,
  getSumOfPrices,
  getAveragePrice,
  getTheCheapestProduct,
};
