const getMaxNumber = (array) => {
  //   let max = Number.NEGATIVE_INFINITY;// 6
  //   // 45 21 6
  //   array.forEach((element) => {
  //     if (element < max) {
  //       max = element;
  //     }
  //   });
  //   return max;

  const copy = [...array];
  copy.sort((a, b) => b - a);
  return copy[0];
};

// default export
export default {
  getMaxNumber,
};
