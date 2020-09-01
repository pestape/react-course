const square = function (x) {
    return x * x ;
};

console.log(square(2));
//--------------------------------------

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(3));
//--------------------------------------

const shortSquareArrow = (x) => x * x;
console.log(shortSquareArrow(4));

//--------------------------------------

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Pedro Estape'));


