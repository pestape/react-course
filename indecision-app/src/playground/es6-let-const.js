var nameVar = 'Pedro';
var nameVar = 'Lucas';
console.log('nameVar',nameVar);

let nameLet = 'Pedro';
nameLet = 'Lucas';
console.log('nameLet', nameLet);

const nameConst = 'Pedro';
console.log('nameConst', nameConst);


//Block scoping

const fullName = 'Pedro Estape';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName', firstName);
}

console.log('firstName', firstName);