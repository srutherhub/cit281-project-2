/*
    CIT 281 Project 2
    Name: Sam Rutherford
*/

let result = "";

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//Returns a random lowercase letter
const getRandomLetter = function() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet[getRandomInteger(0, 26)];
}

//Returns a string of random length between 10 - 20 only containing lowercase letters

const getRandomString = function(minLength, maxLength) {
  for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
    result += getRandomLetter();
  }
  return result;
}

//Returns getRandomString that is sorted by alphabetical order
const getSortedString = function(string) {
  return string.split("").sort().join("");
}

console.log(getRandomString(19, 20));
console.log(getSortedString(result));
