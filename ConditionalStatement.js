// CONDITIONAL STATEMENT SYNTAX AND SAMPLE IMPLEMENTATION
/*
----- IF STATEMENT / SYNTAX -----
if (condition) {
    // Code to execute if condition is true
}
*/
// ----- IF STATEMENT SAMPLE IMPLEMENTATION -----
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

/*
----- IF...ELSE STATEMENT / SYNTAX -----
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
*/
// ----- IF...ELSE STATEMENT SAMPLE IMPLEMENTATION -----
let score = 60;
if (score >= 75) {
  console.log("You passed the exam!");
} else {
  console.log("You failed the exam.");
}

/*
----- IF...ELSE IF...ELSE STATEMENT / SYNTAX -----
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if none of the conditions are true
}
*/
// ----- IF...ELSE IF...ELSE STATEMENT SAMPLE IMPLEMENTATION -----
let grade = 85;
if (grade >= 90) {
  console.log("Grade: A");
} else if (grade >= 80) {
  console.log("Grade: B");
} else if (grade >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

/*
----- SWITCH STATEMENT / SYNTAX -----
switch (expression) {
    case value1:
        // Code if expression === value1
        break;
    case value2:
        // Code if expression === value2
        break;
    default:
        // Code if no cases match
}
*/
// ----- SWITCH STATEMENT SAMPLE IMPLEMENTATION -----
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}