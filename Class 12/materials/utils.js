const getOddNumbers = (array) => array.filter((el) => el % 2 !== 0);
const getEvenNumbers = (array) => array.filter((el) => el % 2 === 0);

export {
    getOddNumbers,
    getEvenNumbers,
}
