// SOURCE: https://gist.github.com/Yaffle/2623011
// Version 1 'as is' using (array,...)
// inplace merge sort
// http://thomas.baudel.name/Visualisation/VisuTri/inplacestablesort.html

  "use strict";

  let floor = Math.floor;

  function lower(array, from, to, value, compare) {
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

  function upper(array, from, to, value, compare) {
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

  function reverse(array, from, to) {
    --from;
    while (++from < --to) {
      let tmp = array[from];
      array[from] = array[to];
      array[to] = tmp;
    }
    return array;
  }

  function rotate(array, from, pivot, to) {
    if (from < pivot && pivot < to) {
      array = reverse(array, from, pivot);
      array = reverse(array, pivot, to);
      array = reverse(array, from, to);
    }
    return array;
  }

  function merge(array, from, pivot, to, compare) {
    if (from < pivot && pivot < to && compare(array[pivot], array[pivot - 1]) < 0) {
      if (to - from === 2) {
        array = reverse(array, from, to);
      } else {
        let firstCut = 0;
        let secondCut = 0;
        if (pivot - from > to - pivot) {
          firstCut = from + floor((pivot - from) / 2);
          secondCut = lower(array, pivot, to, array[firstCut], compare);
        } else {
          secondCut = pivot + floor((to - pivot) / 2);
          firstCut = upper(array, from, pivot, array[secondCut], compare);
        }
        array = rotate(array, firstCut, pivot, secondCut);
        let middle = secondCut - pivot + firstCut;
        array = merge(array, middle, secondCut, to, compare);
        array = merge(array, from, firstCut, middle, compare);
      }
    }
    return array;
  }

  function mergeSort(array, from, to, compare) {
    if (to - from > 1) {
      let middle = from + floor((to - from) / 2);
      array = mergeSort(array, from, middle, compare);
      array = mergeSort(array, middle, to, compare);
      array = merge(array, from, middle, to, compare);
    }
    return array;
  }

  let theArray = [3, 2, 1, 3, 2, 1, 3, 2, 1, -10, 0];
  console.log(mergeSort(theArray, 0, theArray.length, toCompare));
  console.log(theArray) // Mutates the array!

  function toCompare(a,b) { return a - b}

  /*
  [
  -10, 0, 1, 1, 1,
    2, 2, 2, 3, 3,
    3
  ]
  */