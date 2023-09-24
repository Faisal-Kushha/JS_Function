"use strict";

let student = ["ahmad", "omar", "enas", "ghadeer", "farah", "eman"];

function myFunction(x) {
  for (let i = 0; i < student.length; i++) {
    if (student[i][0] == x) {
      console.log(student[i]);
    } else {
      console.log("Sorry this name does not start with your letter");
    }
  }
}

let x = myFunction("o");

let myFunc = (z) => {
  for (let i = 0; i < student.length; i++) {
    if (student[i][0] == z) {
      console.log(student[i]);
    } else {
      console.log("Sorry this name does not start with your letter");
    }
  }
};
let z = myFunc("o");
