function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "jaswanth", last: "p" });

// Excess properties
// printName({ first: "jaswanth", last: "p", age: 20 }); error
let person = { first: "jaswanth", last: "p", age: 20 };
printName(person);

// type Alias
type Point = {
  x: number;
  y: number;
};

// let coordinate: { x: number; y: number } = { x: 20, y: 5 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

let coordinate: Point = { x: 20, y: 5 };
function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

// Nested Objects

// Optional properties
type Version = {
  x: number;
  y: number;
  z?: number;
};
let v: Version = { x: 2, y: 3 };

// Readonly Modifier
type User = {
  readonly id: number;
  name: string;
};
const user: User = { id: 123, name: "jaswanth" };
user.id = 223434; // error
