//#1 - from ES-5 to ES-6

// @ts-ignore
//arrow-function, const
const double = value => value * 2;
console.log(double(10));

//arrow-function, default value, const
const greet = (name = 'Alex') => {
  console.log(`Hello ${name}`);
};
greet();
greet("Anna");

// spread, const
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// spread, let-variable
let newArray = [55, 20, ...numbers];
console.log(newArray);

// array destructuring, const
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//object destructuring, const
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);


//#2 - TypeScript types
interface bankAccount {
  money: number;
  deposit(value: number): void;
}

interface myself {
  name: string;
  bankAccount: bankAccount;
  hobbies: string[];
}

let bankAccount: bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: myself = {
  name: 'Alex',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);
console.log(myself);


//#3 - Classes
//#1
class Car {
  name: string;
  acceleration: number;

  constructor(name: string) {
    this.name = name;
    this.acceleration = 0;
  }

  honk(): void {
    console.log('Tooooooooot!');
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


//#2
class baseObject {
  width: number;
  length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  calcSize(): number {
    return this.width * this.length;
  }
}

let rectangle = new baseObject(5, 2);
console.log(rectangle.calcSize());


//#3
class Person {
  _firstName: string;

  constructor(name: string = '') {
    this._firstName = name;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name;
    }
    else {
      this._firstName = '';
    }
  }
}

let person = new Person();
console.log(person.firstName);
person.firstName = 'John';
console.log(person.firstName);
person.firstName = 'Doe';
console.log(person.firstName);