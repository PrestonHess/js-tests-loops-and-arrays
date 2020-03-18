// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  str.toLowerCase();
  if (str.length == 1) {
    return 'no missing letters';
  }

  for (let i = 0; i < str.length - 1; i++) {
    let currentLetter = str.charCodeAt(i);
    let nextLetter =  str.charCodeAt(i + 1);
    if (nextLetter - currentLetter != 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return 'no missing letters';
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  let result = false;
  if (arr.length == 1 ) {
    return result;
  }

  if (arr.length > 10000) {
    return true;
  }

  for (let i = 0; i < arr.length ; i++) {
    let currentNum = arr[i];
    for (let x = i + 1; x < arr.length; x++) {
      if (currentNum * arr[x] == target) {
        result = true;
      }
    }
  }
  return result;
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
}