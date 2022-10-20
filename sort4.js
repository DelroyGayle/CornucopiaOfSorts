/*
Stable QuickSort
Based on
Last Updated : 02 Sep, 2022
https://www.geeksforgeeks.org/stable-quicksort/ 

A sorting algorithm is said to be stable if it maintains the relative order of records 
in the case of equality of keys.

Input : (1, 5), (3, 2) (1, 2) (5, 4) (6, 4) 
We need to sort key-value pairs in the increasing order of keys of first digit 

There are two possible solutions for the two pairs where the key is same i.e. (1, 5) and (1, 2) 
as shown below: 
OUTPUT1: (1, 5), (1, 2), (3, 2), (5, 4), (6, 4) 
OUTPUT2: (1, 2), (1, 5), (3, 2), (5, 4), (6, 4) 

A stable algorithm produces the first output. You can see that (1, 5) comes before (1, 2) 
in the sorted order, which was the original order; 
i.e. in the given input, (1, 5) comes before (1, 2).

Second output can only be produced by an unstable algorithm. You can see that in the second output, 
the (1, 2) comes before (1, 5) which was not the case in the original input.


Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. 
And some sorting algorithms are not, like Heap Sort, Quick Sort, etc. 

QuickSort is an unstable algorithm because its performs swapping of the elements 
according to the pivot’s position (without considering the element's original positions).

How to make QuickSort stable?

Quicksort can be stable but it typically isn’t implemented that way. 
Making it stable either requires order N storage (as in a naive implementation) 
or a bit of extra logic for an in-place version. 
The implementation that follows uses extra space. 

The idea is to make two separate lists: 

1) First list contains items smaller than pivot. 
2) Second list contains items greater than pivot.

*/

/* Stable QuickSort.
   This version supports an optional comparing function 
   which enables sorting of an array of objects per property/properties.

   The code uses the middle element as the pivot.
*/

function compare(a, b) {
  return a - b;
}

function quickSortStable(array, comp) {

  // optional comparing function
  const compF = typeof comp === "function" ? comp : compare;

  // Base case
  if (array.length <= 1) {
    return array;
  }

  // The middle element is the pivot

  else {
    let middle = ~~(array.length / 2);
    let pivot = array[middle];

    // The pivot element is used to break the array
    // into 2 halves according to their values

    const smaller = [],
      greater = [];

    // Put the greater elements into the ‘greater’ list;
    // put the smaller elements into the ‘smaller’ list.
    // For any elements that are equal to the 'pivot' value,
    // compare positions to decide where to put them.

    array.forEach((value, index) => {
      const compResult = (compF(value, pivot));

      if (index !== middle) {
        if (compResult < 0) {
          smaller.push(value);
        } else if (compResult > 0) {
          greater.push(value);
        }

        // That is, value === pivot
        // If value is the same, then consider the
        // position to decide which list.

        else {
          if (index < middle) {
            smaller.push(value);
          } else {
            greater.push(value);
          }
        }
      }
    });
    return [
      ...quickSortStable(smaller, comp),
      pivot,
      ...quickSortStable(greater, comp),
    ];
  }
}

let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
console.log(quickSortStable([33, 22, 88, 33, 23, 45, 33, 89, 44, 11]));
console.log(theArray); // original array intact!

const stableCheck = (a,b) => a[0]-b[0];

let theArray2 = [
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

console.log(quickSortStable(theArray2, stableCheck));
console.log(theArray2); // original array intact!
