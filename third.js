function printName(person) {
  console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "jaswanth", last: "p" });
// Excess properties
// printName({ first: "jaswanth", last: "p", age: 20 }); error
var person = { first: "jaswanth", last: "p", age: 20 };
printName(person);
// let coordinate: { x: number; y: number } = { x: 20, y: 5 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
var coordinate = { x: 20, y: 5 };
function randomCoordinate() {
  return { x: Math.random(), y: Math.random() };
}
