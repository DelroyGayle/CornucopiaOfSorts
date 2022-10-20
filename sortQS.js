/*
Quick Sort (ES6)
https://stackoverflow.com/questions/5185864/javascript-quicksort 

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let value of arr) {
    if (value < pivot) {
      left.push(value);
    } else if (value > pivot) {
      right.push(value);
    } else {
      equal.push(value);
    }
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ];
}

Few notes:

A random pivot keeps the algorithm efficient even when the data is sorted.
As much as it nice to use Array.filter instead of using for of loop, 
like some of the answers here, it will increase time complexity 
(Array.reduce can be used instead though).

answered Sep 8, 2018 at 22:13
Lior Elrom
*/

let GLOBAL_ARRAY, GLOBAL_INDICES;

function quickSortES6(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let value of arr) {
    if (value[0] < pivot[0]) {
      left.push(value);
    } else if (value[0] > pivot[0]) {
      right.push(value);
    } else {
      equal.push(value);
    }
  }
  return [...quickSortES6(left), ...equal, ...quickSortES6(right)];
}

/*
QuickSort is an unstable algorithm because we do swapping of elements 
according to pivot’s position (without considering their original positions).

How to make QuickSort stable?

Recommended: Please try your approach on {IDE} first, before moving on to the solution.
Quicksort can be stable but it typically isn’t implemented that way. 
Making it stable either requires order N storage (as in a naive implementation) or a bit of extra logic for an in-place version. 
In below implementation, we use extra space. 

The idea is to make two separate lists: 

1) First list contains items smaller than pivot. 
2) Second list contains items greater than pivot.
This is based on a PYTHON3 solution at
https://www.geeksforgeeks.org/stable-quicksort/ 
*/

// Stable QuickSort.
// The code uses the middle element as pivot.
function quickSortStable1(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Let us choose middle element a pivot
  else {
    let mid = ~~(array.length / 2);
    let pivot = array[mid];

    // key element is used to break the array
    // into 2 halves according to their values
    const smaller = [],
      greater = [];

    // Put greater elements in the 'greater' list,
    // smaller elements in the 'smaller' list. Also,
    // compare positions to decide where to put them.
    array.forEach((value, index) => {
      if (index !== mid) {
        if (value < pivot) {
          smaller.push(value);
        } else if (value > pivot) {
          greater.push(value);
        }

        // That is, value === pivot
        // If value is the same, then consider the
        // position to decide the list.
        else {
          if (index < mid) {
            smaller.push(value);
          } else {
            greater.push(value);
          }
        }
      }
    });
    return [...quickSortStable1(smaller), pivot, ...quickSortStable1(greater)];
    /* OR
        return [].concat(
          quickSortStable1(smaller),
          [pivot],
          quickSortStable1(greater)
        );
    */
  }
}

// Stable QuickSort.
// The code uses the middle element as pivot.
function quickSortStable2(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Let us choose middle element a pivot
  else {
    let mid = ~~(array.length / 2);
    let pivot = array[mid];

    // key element is used to break the array
    // into 2 halves according to their values
    const smaller = [],
      greater = [];

    // Put greater elements in the 'greater' list,
    // smaller elements in the 'smaller' list. Also,
    // compare positions to decide where to put them.
    array.forEach((value, index) => {
      if (index !== mid) {
        if (value[0] < pivot[0]) {
          smaller.push(value);
        } else if (value[0] > pivot[0]) {
          greater.push(value);
        }

        // That is, value[0] === pivot[0]
        // If value is the same, then consider the
        // position to decide the list.
        else {
          if (index < mid) {
            smaller.push(value);
          } else {
            greater.push(value);
          }
        }
      }
    });
    return [...quickSortStable2(smaller), pivot, ...quickSortStable2(greater)];
    /* OR
        return [].concat(
          quickSortStable2(smaller),
          [pivot],
          quickSortStable2(greater)
        );
    */
  }
}

/*
// Sorts a (portion of an) array, divides it into partitions, then sorts those

algorithm quicksort(A, low, high) is 
  if low >= 0 && high >= 0 && low < high then
    p = partition(A, low, high) 
    quicksort(A, low, p) // Note: the pivot is now included
    quicksort(A, p + 1, high) 

// Divides array into two partitions
algorithm partition(A, low, high) is 
  // Pivot value
  pivot = A[ floor((high + low) / 2) ] // The value in the middle of the array

  // Left index
  i = low - 1 

  // Right index
  j = high + 1

  loop forever 
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do i = i + 1 while A[i] < pivot
    
    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do j = j - 1 while A[j] > pivot

    // If the indices crossed, return
    if i ≥ j then return j
    
    // Swap the elements at the left and right indices
    swap A[i] with A[j]
The entire array is sorted by quicksort(A, 0, length(A) - 1).

https://en.wikipedia.org/wiki/Quicksort 

*/

function quicksortHoare1(array, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    let pivotIndex = partition1(array, low, high);
    quicksortHoare1(array, low, pivotIndex); // Note: the pivot's index is now included
    quicksortHoare1(array, pivotIndex + 1, high);
  }
  return;
}

// Divides array into two partitions
function partition1(array, low, high) {
  // Pivot value
  const pivot = array[~~((high + low) / 2)]; // The value in the middle of the array

  // Left index
  let left = low - 1;

  // Right index
  let right = high + 1;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do {
      ++left;
    } while (array[left] < pivot);

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do {
      --right;
    } while (array[right] > pivot);

    // If the indices crossed, return
    if (left >= right) {
      return right;
    }

    // Swap the elements at the left and right indices
    // swap A[left] with A[right]
    [array[left], array[right]] = [array[right], array[left]];
  }
}

function quicksortHoare1A(array, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    let pivotIndex = partition1A(array, low, high);
    quicksortHoare1A(array, low, pivotIndex); // Note: the pivot's index is now included
    quicksortHoare1A(array, pivotIndex + 1, high);
  }
  return;
}

/*
  1A - This version calculates the 'median of three values' to determine the pivot. 
  Using the XOR operator as described by caiohamamura at
  https://stackoverflow.com/questions/7559608/median-of-three-values-strategy 

    This uses bitwise XOR operator. So you would read:

    Is a greater than exclusively one of the others? return a
    Is b smaller than exclusively one of the others? return b
    If none of above: return c

  Also used Jordan Ward's layout
  https://stackoverflow.com/questions/49764892/how-to-partition-correctly-using-the-median-of-the-first-middle-and-last-eleme
*/

function medianThree(a, b, c) {
  if ((a > b) ^ (a > c)) {
    return a;
  } else if ((b < a) ^ (b < c)) {
    return b;
  } else {
    return c;
  }
}

// Divides array into two partitions
function partition1A(array, low, high) {
  let middle = ~~((high + low) / 2);
  middle = medianThree(low, middle, high);
  // Pivot value
  let pivot = array[middle]; // The value which is the median of the three

  // Left index
  let left = low - 1;

  // Right index
  let right = high + 1;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do {
      ++left;
    } while (array[left] < pivot);

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do {
      --right;
    } while (array[right] > pivot);

    // If the indices crossed, return
    if (left >= right) {
      return right;
    }

    // Swap the elements at the left and right indices
    // swap A[left] with A[right]
    [array[left], array[right]] = [array[right], array[left]];
  }
}

function quicksortHoare2(array, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    let pivotIndex = partition2(array, low, high);
    quicksortHoare2(array, low, pivotIndex); // Note: the pivot's index is now included
    quicksortHoare2(array, pivotIndex + 1, high);
  }
  return;
}

// Divides array into two partitions
function partition2(array, low, high) {
  // Pivot value
  const pivot = array[~~((high + low) / 2)]; // The value in the middle of the array

  // Left index
  let left = low - 1;

  // Right index
  let right = high + 1;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do {
      ++left;
    } while (array[left][0] < pivot[0]);

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do {
      --right;
    } while (array[right][0] > pivot[0]);

    // If the indices crossed, return
    if (left >= right) {
      return right;
    }

    // Swap the elements at the left and right indices
    // swap A[left] with A[right]
    [array[left], array[right]] = [array[right], array[left]];
  }
}

/*
As suggested by Blindy and Rcgldr, you can sort just the indices, 
then a variation of cycle sort can be used to sort the original array in place, 
with the side effect that the sorted indices will be rearranged back to 0 to n-1. 
Every move places an element in place, so the time complexity is O(n).
https://stackoverflow.com/questions/32675087/how-can-i-implement-a-stable-quicksort-algorithm-using-on-additional-space 
*/

function quicksortIX1(array) {
/* first calculate the indices [0,...,n-1]
EG
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
  const indicesArray = [...Array(array.length).keys()];

  // Perform the QuickSort using the indices
  quicksortIX1A(array, indicesArray, 0, indicesArray.length - 1);

/*
EG indicesArray =
[
  9, 1, 4, 6, 0,
  3, 8, 5, 2, 7
]
FOR valuesArray which =
[
  33, 22, 88, 33, 23,
  45, 33, 89, 44, 11
]
*/

// Use the indices to create the sorted array
  return indicesArray.map((index) => array[index]);
}

function quicksortIX1A(valuesArray, indicesArray, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    const pivotIndex = partitionIX1A(valuesArray, indicesArray, low, high);
    // Note: the pivot's index is now included
    quicksortIX1A(valuesArray, indicesArray, low, pivotIndex);
    quicksortIX1A(valuesArray, indicesArray, pivotIndex + 1, high);
  };
  return;
}

// Divides array into two partitions
function partitionIX1A(valuesArray, indicesArray, left, right) {

/*    
  Median - of - three strategy;  
  The pivot should be the median of the
  first, middle, and last elements.
*/

  let first = left;
  let last = right;
  let middle = first + ~~((last - first) / 2);

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[middle]]) {
    [indicesArray[first], indicesArray[middle]] = [
      indicesArray[middle],
      indicesArray[first],
    ];
    [first, middle] = [middle, first];
  };

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[last]]) {
    [indicesArray[first], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[first],
    ];
    [first, last] = [last, first];
  };

  if (valuesArray[indicesArray[middle]] > valuesArray[indicesArray[last]]) {
    [indicesArray[middle], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[middle],
    ];
    [middle, last] = [last, middle];
  };

  [indicesArray[middle], indicesArray[first]] = [
    indicesArray[first],
    indicesArray[middle],
  ];
  [middle, first] = [first, middle];

  // Pivot value
  const pivotIndex = first; // The index of the median of the three
  const pivot = valuesArray[indicesArray[first]]; // The value corresponding to that index

  // Left index
  --left;

  // Right index
  ++right;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot

    do {
      ++left;
    } while (valuesArray[indicesArray[left]] < pivot);

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot

    do {
      --right;
    } while (valuesArray[indicesArray[right]] > pivot);

    // If the indices crossed, return
    if (left >= right) {
      return right;
    };

    // Swap the elements at the left and right indices
    // That is, swap index of A[left] with index of A[right]
    [indicesArray[left], indicesArray[right]] = [
      indicesArray[right],
      indicesArray[left],
    ];
  }
}

function quicksortIX2(array) {
/* first calculate the indices [0,...,n-1]
EG
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

  GLOBAL_ARRAY = [...array];
  const indicesArray = [...Array(array.length).keys()];

  // Perform the QuickSort using the indices
  quicksortIX2A(array, indicesArray, 0, indicesArray.length - 1);

// Use the indices to create the sorted array
  return indicesArray.map((index) => array[index]);
}

function quicksortIX2A(valuesArray, indicesArray, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    const pivotIndex = partitionIX2A(valuesArray, indicesArray, low, high);
    // Note: the pivot's index is now included
    quicksortIX2A(valuesArray, indicesArray, low, pivotIndex);
    quicksortIX2A(valuesArray, indicesArray, pivotIndex + 1, high);
  };
  return;
}

// Divides array into two partitions
function partitionIX2A(valuesArray, indicesArray, left, right) {

/*    
  Median - of - three strategy;  
  The pivot should be the median of the
  first, middle, and last elements.
*/

  let first = left;
  let last = right;
  let middle = first + ~~((last - first) / 2);

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[middle]]) {
    [indicesArray[first], indicesArray[middle]] = [
      indicesArray[middle],
      indicesArray[first],
    ];
    [first, middle] = [middle, first];
  };

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[last]]) {
    [indicesArray[first], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[first],
    ];
    [first, last] = [last, first];
  };

  if (valuesArray[indicesArray[middle]] > valuesArray[indicesArray[last]]) {
    [indicesArray[middle], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[middle],
    ];
    [middle, last] = [last, middle];
  };

  [indicesArray[middle], indicesArray[first]] = [
    indicesArray[first],
    indicesArray[middle],
  ];
  [middle, first] = [first, middle];

  // Pivot value
  const pivotIndex = first; // The index of the median of the three
  const pivot = valuesArray[indicesArray[first]]; // The value corresponding to that index

  // Left index
  --left;

  // Right index
  ++right;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    // If the values are identical, use the value of the pointers
    // to decide
    // i.e. is the left index's pointer less than the pivot's pointer?

/*
    do {
      ++left;
    } while (valuesArray[indicesArray[left]][0] < pivot[0]);
*/

    do {
      ++left;
    } while (doCompare(valuesArray[indicesArray[left]], pivot, -1));

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    // If the values are identical, use the value of the pointers
    // to decide
    // i.e. is the right index's pointer greater than the pivot's pointer?

/*
    do {
      --right;
    } while (valuesArray[indicesArray[right]][0] > pivot[0]);
*/

    do {
      --right;
    } while (doCompare(valuesArray[indicesArray[right]], pivot, 1));

    // If the indices crossed, return
    if (left >= right) {
      return right;
    };

    // Swap the elements at the left and right indices
    // That is, swap index of A[left] with index of A[right]
    [indicesArray[left], indicesArray[right]] = [
      indicesArray[right],
      indicesArray[left],
    ];
  }
}

/*
BEFORE CHANGES

[
  [ 11, 'j' ],  [ 11, 'j1' ],
  [ 22, 'b' ],  [ 22, 'b1' ],
  [ 23, 'e' ],  [ 23, 'e1' ],
  [ 33, 'a' ],  [ 33, 'd' ],
  [ 33, 'a1' ], [ 33, 'd1' ],
  [ 33, 'g' ],  [ 33, 'g1' ],
  [ 44, 'i' ],  [ 44, 'i1' ],
  [ 45, 'f' ],  [ 45, 'f1' ],
  [ 88, 'c' ],  [ 88, 'c1' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
]

AFTER CHANGES:

[
  [ 11, 'j' ],  [ 11, 'j1' ],
  [ 22, 'b' ],  [ 22, 'b1' ],
  [ 23, 'e' ],  [ 23, 'e1' ],
  [ 33, 'a' ],  [ 33, 'd' ],
  [ 33, 'g' ],  [ 33, 'a1' ],
  [ 33, 'd1' ], [ 33, 'g1' ],
  [ 44, 'i' ],  [ 44, 'i1' ],
  [ 45, 'f' ],  [ 45, 'f1' ],
  [ 88, 'c' ],  [ 88, 'c1' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
]
*/

function doCompare(value1, value2, sign) {
  // while (valuesArray[indicesArray[left]][0] < pivot[0]);
  // while (valuesArray[indicesArray[right][0] > pivot[0]);
  if (value1[0] !== value2[0])
    return sign < 0 ? value1[0] < value2[0] : value1[0] > value2[0];

/*
EG
[ 45, 'f1' ] [ 45, 'f' ]   
[ 45, 'f1' ] [ 45, 'f' ] 15 5
[ 89, 'h1' ] [ 89, 'h' ] 17 7
[ 44, 'i1' ] [ 44, 'i' ] 18 8
[ 88, 'c' ] [ 88, 'c1' ] 2 12
*/

  let avalue = GLOBAL_ARRAY.findIndex(
    (element) => element[0] === value1[0] && element[1] === value1[1]
  );
  let bvalue = GLOBAL_ARRAY.findIndex(
    (element) => element[0] === value2[0] && element[1] === value2[1]
  );

  return sign < 0 ? avalue < bvalue : avalue > bvalue;
}

function quicksortIX3(array) {
/* first calculate the indices [0,...,n-1]
EG
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

  const indicesArray = [...Array(array.length).keys()];

  // Perform the QuickSort using the indices
  quicksortIX3A(array, indicesArray, 0, indicesArray.length - 1);

  GLOBAL_INDICES = indicesArray;

  // Use the indices to create the sorted array
  return indicesArray.map((index) => array[index]);
}

function quicksortIX3A(valuesArray, indicesArray, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    const pivotIndex = partitionIX3A(valuesArray, indicesArray, low, high);
    // Note: the pivot's index is now included
    quicksortIX3A(valuesArray, indicesArray, low, pivotIndex);
    quicksortIX3A(valuesArray, indicesArray, pivotIndex + 1, high);
  }
  return;
}

// Divides array into two partitions
function partitionIX3A(valuesArray, indicesArray, left, right) {
/*    
  Median - of - three strategy;  
  The pivot should be the median of the
  first, middle, and last elements.
*/

  let first = left;
  let last = right;
  let middle = first + ~~((last - first) / 2);

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[middle]]) {
    [indicesArray[first], indicesArray[middle]] = [
      indicesArray[middle],
      indicesArray[first],
    ];
    [first, middle] = [middle, first];
  }

  if (valuesArray[indicesArray[first]] > valuesArray[indicesArray[last]]) {
    [indicesArray[first], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[first],
    ];
    [first, last] = [last, first];
  }

  if (valuesArray[indicesArray[middle]] > valuesArray[indicesArray[last]]) {
    [indicesArray[middle], indicesArray[last]] = [
      indicesArray[last],
      indicesArray[middle],
    ];
    [middle, last] = [last, middle];
  }

  [indicesArray[middle], indicesArray[first]] = [
    indicesArray[first],
    indicesArray[middle],
  ];
  [middle, first] = [first, middle];

  // Pivot value
  const pivotIndex = first; // The index of the median of the three
  const pivot = valuesArray[indicesArray[first]]; // The value corresponding to that index

  // Left index
  --left;

  // Right index
  ++right;

  while (true) {
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    // If the values are identical, use the value of the pointers
    // to decide
    // i.e. is the left index's pointer less than the pivot's pointer?

/*
    do {
      ++left;
    } while (valuesArray[indicesArray[left]][0] < pivot[0]);
*/

    do {
      ++left;
    } while (compareIndices(valuesArray, valuesArray[indicesArray[left]], pivot, -1));

    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    // If the values are identical, use the value of the pointers
    // to decide
    // i.e. is the right index's pointer greater than the pivot's pointer?

/*
    do {
      --right;
    } while (valuesArray[indicesArray[right]][0] > pivot[0]);
*/

    do {
      --right;
    } while (compareIndices(valuesArray,valuesArray[indicesArray[right]], pivot, 1));

    // If the indices crossed, return
    if (left >= right) {
      return right;
    }

    // Swap the elements at the left and right indices
    // That is, swap index of A[left] with index of A[right]
    [indicesArray[left], indicesArray[right]] = [
      indicesArray[right],
      indicesArray[left],
    ];
  }
}

function compareIndices(valuesArray,value1, value2, sign) {
  // while (valuesArray[indicesArray[left]][0] < pivot[0]);
  // while (valuesArray[indicesArray[right][0] > pivot[0]);
  if (value1[0] !== value2[0])
    return sign < 0 ? value1[0] < value2[0] : value1[0] > value2[0];

  let avalue = valuesArray.findIndex(
    (element) => element[0] === value1[0] && element[1] === value1[1]
  );
  let bvalue = valuesArray.findIndex(
    (element) => element[0] === value2[0] && element[1] === value2[1]
  );

  return sign < 0 ? avalue < bvalue : avalue > bvalue;
}


let theArray = [
  [33, "a"],
  [22, "b"],
  [88, "c"],
  [33, "d"],
  [23, "e"],
  [45, "f"],
  [33, "g"],
  [89, "h"],
  [44, "i"],
  [11, "j"],
  [33, "a1"],
  [22, "b1"],
  [88, "c1"],
  [33, "d1"],
  [23, "e1"],
  [45, "f1"],
  [33, "g1"],
  [89, "h1"],
  [44, "i1"],
  [11, "j1"],
];

let copy = [...theArray];
/*
  ES6: This is Lior Elrom's version. It appears 'stable' to me!
  Also it is NOT in-place; so 'theArray' contents stay intact
*/
console.log("ES6");
console.log(quickSortES6(theArray));

/*
  QSS:
  This is stable
  Also it is NOT in-place; so 'theArray/theArrayB' contents stay intact
*/

console.log("QSS");
console.log(quickSortStable2(theArray));
console.log(theArray);

console.log("STABLE V2");
let theArrayB = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
let copyB = [...theArrayB];

console.log(quickSortStable1(theArrayB));
console.log(theArrayB);

/*
  HOARE1: Based on the wikipedia pseudocode found at
  https://en.wikipedia.org/wiki/Quicksort 
  In-place sort, so 'theArrayB' contents have been sorted
*/

console.log("HOARE");
// The entire array is sorted by quicksort(array, 0, length(array) - 1).
quicksortHoare1(theArrayB, 0, theArrayB.length - 1);
console.log(theArrayB);

// median of three values strategy for the pivot
theArrayB = [...copyB];
quicksortHoare1A(theArrayB, 0, theArrayB.length - 1);
console.log(theArrayB);

/*
  HOARE2: Based on the wikipedia pseudocode found at
  https://en.wikipedia.org/wiki/Quicksort 
  In-place sort, so 'theArray' contents have been sorted
  However this definitely shows that Quicksort is 'unstable' !!!
  See:
[
  [ 11, 'j' ],  [ 11, 'j1' ],
  [ 22, 'b1' ], [ 22, 'b' ],
  [ 23, 'e1' ], [ 23, 'e' ],
  [ 33, 'a1' ], [ 33, 'a' ],
  [ 33, 'd1' ], [ 33, 'g1' ],
  [ 33, 'd' ],  [ 33, 'g' ],
  [ 44, 'i' ],  [ 44, 'i1' ],
  [ 45, 'f1' ], [ 45, 'f' ],
  [ 88, 'c' ],  [ 88, 'c1' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
]  
*/

quicksortHoare2(theArray, 0, theArray.length - 1);
console.log(theArray);
theArray = [...copy];

/*
As suggested by Blindy and Rcgldr, I will just sort the indices
See 
https://stackoverflow.com/questions/32675087/how-can-i-implement-a-stable-quicksort-algorithm-using-on-additional-space 
*/

console.log("INDICES");
theArrayB = [...copyB];
theArrayB = quicksortIX1(theArrayB);
console.log(theArrayB);

console.log("INDICES[0]");
theArray = [...copy];
theArray = quicksortIX2(theArray);
console.log(theArray);

// THIS VERSION DOES NOT USE 'doCompare' which uses 'GLOBAL_ARRAY'
console.log("INDICES[1]"); 
GLOBAL_ARRAY = [...copy]
theArray = [...copy];
theArray = quicksortIX3(theArray);
console.log(theArray);

/*
THESE VERSIONS OF QUICKSORT: 'quicksortIX2' and 'quicksortIX3'
ARE BOTH STABLE & IN-PLACE

[
  [ 11, 'j' ],  [ 11, 'j1' ],
  [ 22, 'b' ],  [ 22, 'b1' ],
  [ 23, 'e' ],  [ 23, 'e1' ],
  [ 33, 'a' ],  [ 33, 'd' ],
  [ 33, 'g' ],  [ 33, 'a1' ],
  [ 33, 'd1' ], [ 33, 'g1' ],
  [ 44, 'i' ],  [ 44, 'i1' ],
  [ 45, 'f' ],  [ 45, 'f1' ],
  [ 88, 'c' ],  [ 88, 'c1' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
]

*/


/*
  
TEST Rcgldr's routine: a variation of cycle sort can be used to sort the original array in place
SOURCE:
https://stackoverflow.com/questions/32675087/how-can-i-implement-a-stable-quicksort-algorithm-using-on-additional-space


void reorder_according_to(int array[], size_t indices[], size_t len)  
{
size_t i, j, k;
int t;
    for(i = 0; i < len; i++){
        if(i != indices[i]){
            t = array[i];
            k = i;
            while(i != (j = indices[k])){
                array[k] = array[j];
                indices[k] = k;
                k = j;
            }
            array[k] = t;
            indices[k] = k;
        }
    }
}  

console.log(GLOBAL_ARRAY);

[
  [ 33, 'a' ],  [ 22, 'b' ],
  [ 88, 'c' ],  [ 33, 'd' ],
  [ 23, 'e' ],  [ 45, 'f' ],
  [ 33, 'g' ],  [ 89, 'h' ],
  [ 44, 'i' ],  [ 11, 'j' ],
  [ 33, 'a1' ], [ 22, 'b1' ],
  [ 88, 'c1' ], [ 33, 'd1' ],
  [ 23, 'e1' ], [ 45, 'f1' ],
  [ 33, 'g1' ], [ 89, 'h1' ],
  [ 44, 'i1' ], [ 11, 'j1' ]
]

console.log(GLOBAL_INDICES);
[
  9, 19,  1, 11,  4, 14,  0,
  3,  6, 10, 13, 16,  8, 18,
  5, 15,  2, 12,  7, 17
]

*/

let i, j, k, t;
const len = GLOBAL_ARRAY.length;
    for(i = 0; i < len; i++) {
        if (i !== GLOBAL_INDICES[i]) {
            t = GLOBAL_ARRAY[i];
            k = i;
            while (i !== (j = GLOBAL_INDICES[k])) {
                GLOBAL_ARRAY[k] = GLOBAL_ARRAY[j];
                GLOBAL_INDICES[k] = k;
                k = j;
            };
            GLOBAL_ARRAY[k] = t;
            GLOBAL_INDICES[k] = k;
        }
    }

/*   
    console.log(GLOBAL_INDICES);

 [
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19
 ]   

    console.log(GLOBAL_ARRAY);

 [
  [ 11, 'j' ],  [ 11, 'j1' ],
  [ 22, 'b' ],  [ 22, 'b1' ],
  [ 23, 'e' ],  [ 23, 'e1' ],
  [ 33, 'a' ],  [ 33, 'd' ],
  [ 33, 'g' ],  [ 33, 'a1' ],
  [ 33, 'd1' ], [ 33, 'g1' ],
  [ 44, 'i' ],  [ 44, 'i1' ],
  [ 45, 'f' ],  [ 45, 'f1' ],
  [ 88, 'c' ],  [ 88, 'c1' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
 ]
*/

