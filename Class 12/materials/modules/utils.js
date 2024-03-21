const getEvenNumbers = (array) => array.filter((el) => el % 2 === 0);

const getOddNumbers = (array) => array.filter((el) => el % 2 !== 0);

const test = 123;

// named export
export { 
    getEvenNumbers,
    getOddNumbers,
    test,
};
