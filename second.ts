function greet(name: string) {
  return `HI ${name}!`;
}
greet("jaswanth");
// greet(1123)

// return type annotation
function sum(x: number, y: number): number | string {
  return x + y;
}
sum(10, 20);

// anonymous function contextual typing
const colors = ["red", "green", "blue"];
colors.map((color) => {
  // return color.toFixed()
  return color.toUpperCase();
});

// void type
function printName(): void {
  console.log("jaswanth");
  return "";
}

// never type
function makeError(msg: string): never {
  throw new Error(msg);
}
