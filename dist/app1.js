"use strict";
//#1 - Generics
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this.map[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clearMap = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key + ": " + this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clearMap();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();
stringMap.getItem('name');
var person;
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
function createPerson(firstName, hobbies) {
    return {
        firstName: firstName,
        hobbies: hobbies,
        greet: function (lastName) {
            console.log("Hi, I am " + this.firstName + " " + lastName);
        }
    };
}
person = createPerson('John', ['Cooking', 'Sports']);
greet(person);
changeName(person);
greet(person);
person.greet('Anybody');
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
        this.lastName = '';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
console.log(myPerson);
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
