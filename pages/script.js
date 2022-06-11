function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    clean: true,
};

const rodri = new Dog("rodri");

console.log(rodri.constructor === Dog);
console.log(rodri.constructor === Object);
console.log(rodri instanceof Dog);
console.log(Dog.prototype.isPrototypeOf(rodri));
console.log(rodri);
