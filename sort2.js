// SOURCE: https://gist.github.com/Yaffle/2623011
// Version 2 using nested functions
// inplace merge sort
// http://thomas.baudel.name/Visualisation/VisuTri/inplacestablesort.html

"use strict";

let floor = Math.floor;

function doSort(array, compare) {
  mergeSort(0, array.length);
  return array;

  function lower(from, to, value) {
    while (to > from) {
      let middle = from + floor((to - from) / 2);
      if (compare(array[middle], value) < 0) {
        from = middle + 1;
      } else {
        to = middle;
      }
    }
    return from;
  }

  function upper(from, to, value) {
    while (to > from) {
      let middle = from + floor((to - from) / 2);
      if (compare(value, array[middle]) < 0) {
        to = middle;
      } else {
        from = middle + 1;
      }
    }
    return from;
  }

  function reverse(from, to) {
    --from;
    while (++from < --to) {
      let tmp = array[from];
      array[from] = array[to];
      array[to] = tmp;
    }
  }

  function rotate(from, pivot, to) {
    if (from < pivot && pivot < to) {
      reverse(from, pivot);
      reverse(pivot, to);
      reverse(from, to);
    }
  }

  function merge(from, pivot, to) {
    if (
      from < pivot &&
      pivot < to &&
      compare(array[pivot], array[pivot - 1]) < 0
    ) {
      if (to - from === 2) {
        reverse(from, to);
      } else {
        let firstCut = 0;
        let secondCut = 0;
        if (pivot - from > to - pivot) {
          firstCut = from + floor((pivot - from) / 2);
          secondCut = lower(pivot, to, array[firstCut]);
        } else {
          secondCut = pivot + floor((to - pivot) / 2);
          firstCut = upper(from, pivot, array[secondCut]);
        }
        rotate(firstCut, pivot, secondCut);
        let middle = secondCut - pivot + firstCut;
        merge(middle, secondCut, to);
        merge(from, firstCut, middle);
      }
    }
  }

  function mergeSort(from, to) {
    if (to - from > 1) {
      let middle = from + floor((to - from) / 2);
      mergeSort(from, middle);
      mergeSort(middle, to);
      merge(from, middle, to);
    }
  }
}

function toCompare(a, b) {
  return a - b;
}

let theArray = [3, 2, 1, 3, 2, 1, 3, 2, 1, -10, 0];
console.log(doSort(theArray, toCompare));
theArray = [103, 1022, 1, 3, 2, 1, 3, -200, 1, -101, 0];
console.log(doSort(theArray, toCompare));
console.log(theArray) // Mutates the array!

/*

[
  -10, 0, 1, 1, 1,
    2, 2, 2, 3, 3,
    3
]
[
  -200, -101,    0, 1,
     1,    1,    2, 3,
     3,  103, 1022
]

*/