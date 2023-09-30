"use strict";

let student = ["ahmad", "omar", "enas", "ghadeer", "farah", "eman"];

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let x = letters[Math.floor(Math.random() * letters.length)];
console.log(x);

function myFunction() {
  for (let i = 0; i < student.length; i++) {
    if (student[i][0] == x) {
      console.log(`This name ${student[i]} start with the letter ${x}`);
    } else {
      console.log("Sorry this name does not start with your letter");
    }
  }
}

myFunction();

let myFunc = () => {
  for (let i = 0; i < student.length; i++) {
    if (student[i][0] == x) {
      console.log(`This name ${student[i]} start with the letter ${x}`);
    } else {
      console.log("Sorry this name does not start with your letter");
    }
  }
};

myFunc();
