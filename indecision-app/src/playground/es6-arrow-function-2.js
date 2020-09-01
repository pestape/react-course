//arguments objects - no longer bound with arrow functions
const add = function (a, b) {
    console.log(arguments);
    return a + b
};
console.log(add(1, 2, 3));

//-------------------------------------
const addArrow = (a, b) => {
    // console.log(arguments);
    return a + b
};
console.log(addArrow(1, 2, 3));

//This keyword - no longer bound 
const user = {
    name: 'Pedro',
    cities: ['Campinas', 'Mogi Mirim'],
    printCities: function () {
        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printCities();

//--------------------------------------------------
const user2 = {
    name: 'Pedro',
    cities: ['Campinas', 'Mogi Mirim'],
    printCities() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user2.printCities();

//--------------MAP-------------------------
const user3 = {
    name: 'Pedro',
    cities: ['Campinas', 'Mogi Mirim'],
    printCities() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user3.printCities());

//-------------challenge--------------------------
const multiplier = {
    numbers:[1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * number);
    }
};
console.log(multiplier.multiply());
