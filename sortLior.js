/*
Source: https://stackoverflow.com/questions/5185864/javascript-quicksort 

Quick Sort (ES6)
Few notes:

A random pivot keeps the algorithm efficient even when the data is sorted.
As much as it nice to use Array.filter instead of using for of loop, like some of the answers here, 
it will increase time complexity (Array.reduce can be used instead though).

answered Sep 8, 2018 at 22:13
Lior Elrom
*/

/*
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([33, 22, 88, 33, 23, 45, 33, 89, 44, 11]));
let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
console.log(quickSort(theArray)); // mutates the array

THE ABOVE IS THE ORIGINAL VERSION - THE STABILISED VERSION FOLLOWS:
*/

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    let result = compare(val, pivot);
    if ( result < 0) {
      left.push(val);
    } else if (result > 0) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

function compare(a,b) {
    return a[0] - b[0] || a[1] - b[1];  
}

function stableSort(array) {
  let stableArray = [];
  for (let i = 0; i < array.length; i++) {
    stableArray[i] = [array[i], i];
  }
  stableArray = quickSort(stableArray);
  console.log(stableArray);
  for (let i = 0; i < array.length; i++) {
    array[i] = stableArray[i][0];
  }
  return array;
}

console.log(stableSort([33, 22, 88, 33, 23, 45, 33, 89, 44, 11]));
