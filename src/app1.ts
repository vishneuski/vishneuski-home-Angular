//#1 - Generics
class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, value: T) {
    this.map[key] = value;
  }

  getItem(key: string): T {
    return this.map[key];
  }

  clearMap() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(`${key}: ${this.map[key]}`);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clearMap();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();
stringMap.getItem('name');


//#2 - Interfaces

interface IPerson {
  firstName: string;
  hobbies?: string[];
  lastName?: string;
  greet(lastName: string): void;
}

let person: IPerson;

function greet(person: IPerson): void {
  console.log("Hello, " + person.firstName);
}

function changeName(person: IPerson): void {
  person.firstName = 'Anna';
}

function createPerson(firstName: string, hobbies: string[]): IPerson {
  return {
    firstName,
    hobbies,
    greet(lastName: string): void {
      console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
  }
}

person = createPerson('John', ['Cooking', 'Sports']);

greet(person);
changeName(person);
greet(person);
person.greet('Anybody');


class Person implements IPerson {
  firstName: string = '';
  lastName: string = '';
  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}

const myPerson = new Person();
console.log(myPerson);
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);