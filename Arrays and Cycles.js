//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let moviesList = ["Django", "Interstellar", "Whiplash", "Green book"];
moviesList.forEach(name => console.log(name));


//Given an array of car manufacturers, convert the array to a string and back to an array
let carBrands = ["BMW", "Lotus", "Audi", "Renault"];
let brandsString = carBrands.toString();
console.log(brandsString);

brandsString = brandsString.split(",");
console.log(brandsString);

//Given an array of the names of your friends, add the words hello to each element of the array

let friends = ["Misha", "Ivan", "Alex", "Roman"];
friends.forEach((name) => {
    return console.log(`Hello ${name}`);
});

//Convert numeric array to Boolean
let numberArr = [0, 1, 2, 3, 4];
let blnArr = [];
numberArr.forEach((currentNumber) => blnArr.push(!!currentNumber));
console.log(blnArr);

//Sort the array [1,6,7,8,3,4,5,6] in descending order

let numbersArr = [1,6,7,8,3,4,5,6];
numbersArr.sort((a, b) => b - a);
console.log(numbersArr);

//Filter array [1,6,7,8,3,4,5,6] by value> 3
let arrayOfNumbers = [1,6,7,8,3,4,5,6];
let arrayOfBigNumbers = arrayOfNumbers.filter(currentNumber => currentNumber > 3);
arrayOfBigNumbers.sort((a, b) => a - b);
console.log(arrayOfBigNumbers);

//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
let randomArray = [5, 10, 20, 50];
let randomFunc = (number, arr, index) => {
    console.log(`${index}`);
}
randomFunc(5, randomArray);

//﻿Implement a loop that will print the number 'a' until it is less than 10
for (let i = 20; i >= 10 ; i--) {
    console.log(i);
}

//Implement a loop that prints prime numbers to the console
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log( i );
    }
  }
  
  showPrimes(20);
  
//Implement a loop that prints odd numbers to the console
j = 25;

  for (let i = 1; i < j; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
  };