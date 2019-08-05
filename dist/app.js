"use strict";
//#1 - from ES-5 to ES-6
// @ts-ignore
//arrow-function, const
var double = function (value) { return value * 2; };
console.log(double(10));
//arrow-function, default value, const
var greet = function (name) {
    if (name === void 0) { name = 'Alex'; }
    console.log("Hello " + name);
};
greet();
greet("Anna");
// spread, const
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// spread, let-variable
var newArray = [55, 20].concat(numbers);
console.log(newArray);
// array destructuring, const
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
//object destructuring, const
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Alex',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
//#3 - Classes
//#1
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Tooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
//#2
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    baseObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return baseObject;
}());
var rectangle = new baseObject(5, 2);
console.log(rectangle.calcSize());
//#3
var Person = /** @class */ (function () {
    function Person(name) {
        if (name === void 0) { name = ''; }
        this._firstName = name;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = 'John';
console.log(person.firstName);
person.firstName = 'Doe';
console.log(person.firstName);
