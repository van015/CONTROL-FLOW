// LOOPING STATEMENTS SYNTAX AND SAMPLE IMPLEMENTATION

/*
----- FOR LOOP / SYNTAX -----
for (initialization; condition; increment/decrement) {
    // Code to execute
}
*/
// ----- FOR LOOP SAMPLE IMPLEMENTATION -----
for (let i = 1; i <= 5; i++) {
  console.log("Iteration " + i);
}

/*
----- WHILE LOOP / SYNTAX -----
while (condition) {
    // Code to execute
}
*/
// ----- WHILE LOOP SAMPLE IMPLEMENTATION -----
let x = 1;
while (x <= 5) {
  console.log("Iteration " + x);
  x++;
}

/*
----- DO...WHILE LOOP / SYNTAX -----
do {
    // Code to execute
} while (condition);
*/
// ----- DO...WHILE LOOP SAMPLE IMPLEMENTATION -----
let y = 1;
do {
  console.log("Iteration " + y);
  y++;
} while (y <= 5);

/*
----- FOR...IN LOOP (for objects) / SYNTAX -----
for (let key in object) {
    // Code to execute
}
*/
// ----- FOR...IN LOOP SAMPLE IMPLEMENTATION -----
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

/*
----- FOR...OF LOOP (for arrays and iterables) / SYNTAX -----
for (let value of iterable) {
    // Code to execute
}
*/
// ----- FOR...OF LOOP SAMPLE IMPLEMENTATION -----
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

/*
----- BREAK STATEMENT / SYNTAX -----
Used to exit a loop immediately.
*/
// ----- BREAK STATEMENT SAMPLE IMPLEMENTATION -----
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Exits the loop when i = 3
  }
  console.log(i);
}

/*
----- CONTINUE STATEMENT / SYNTAX -----
Used to skip the current iteration and move to the next.
*/
// ----- CONTINUE STATEMENT SAMPLE IMPLEMENTATION -----
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips when i = 3
  }
  console.log(i);
}