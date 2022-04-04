import emojipedia from "./emojipedia";

var emojiMeanings = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(emojiMeanings);
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// var newNumbers = numbers.map(function (number) {
//   return 2 * number;
// });
// console.log(newNumbers);
// var newNumbers = [];
// numbers.forEach(function (number) {
//   newNumbers.push(number);
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// var newNumbers = numbers.filter(function (number) {
//   return number > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = numbers.reduce(function (accumulator, number) {
//   return accumulator+number;
// });
// console.log(newNumbers);

//Find - find the first item that matches from an array.
// var newNumber = numbers.find(function (number) {
//   return number > 10;
// });
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// var index = numbers.findIndex(function (number) {
//   return number == 48;
// });
// console.log(index);
