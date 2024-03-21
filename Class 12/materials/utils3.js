const getMaxNumber = (array) => {
  const copy = [...array];
  copy.sort((a, b) => b - a);
  return copy[0];
};

export default {
  getMaxNumber,
};
