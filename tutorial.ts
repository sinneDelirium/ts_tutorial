// Use npx tsx tutorial.ts to run the file

// Primitives in TS: string, number, boolean
let myName: string = "John Doe";
// myName = 5; // Error: Type '5' is not assignable to type 'string'.
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// Custom types
type Food = string;
let myFavoriteFood: Food = "Pizza";

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // ? makes the property optional
};

let person1: Person = {
  name: "John Doe",
  age: 25,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Springfield",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jane Doe",
  age: 22,
  isStudent: true,
};

// Incorrect
// const displayPerson = (person) => {
//   console.log(`${person.name} lives at ${person.address.street} in ${person.address.city}, ${person.address.country} and is ${person.age} years old.`);
// };
// Cannot read properties of undeined (reading 'street')

// Corrected
const displayPerson = (person: Person) => {
  console.log(`${person.name} lives at ${person.address?.street} in ${person.address?.city}, ${person.address?.country} and is ${person.age} years old.`);
}
// Adding ? after address in the type definition makes the address
// property optional, but returns undefined if it does not exist

let people: Person[] = [person1, person2];
// let people: Array<People> = [person1, person2]; // Equivalent to the line above

displayPerson(people[0]);
displayPerson(people[1]);