/*
Test the quicksort pseudo code of Hoare partition scheme as shown at
https://en.wikipedia.org/wiki/Quicksort


// Sorts a (portion of an) array, divides it into partitions, then sorts those
algorithm quicksort(A, lo, hi) is 
  if lo >= 0 && hi >= 0 && lo < hi then
    p := partition(A, lo, hi) 
    quicksort(A, lo, p) // Note: the pivot is now included
    quicksort(A, p + 1, hi) 

// Divides array into two partitions
algorithm partition(A, lo, hi) is 
  // Pivot value
  pivot := A[ floor((hi + lo) / 2) ] // The value in the middle of the array

  // Left index
  i := lo - 1 

  // Right index
  j := hi + 1

  loop forever 
    // Move the left index to the right at least once and while the element at
    // the left index is less than the pivot
    do i := i + 1 while A[i] < pivot
    
    // Move the right index to the left at least once and while the element at
    // the right index is greater than the pivot
    do j := j - 1 while A[j] > pivot

    // If the indices crossed, return
    if i ≥ j then return j
    
    // Swap the elements at the left and right indices
    swap A[i] with A[j]
    The entire array is sorted by quicksort(A, 0, length(A) - 1).   

    THIS TEST IS TO SHOW THAT QUICKSORT IS UNSTABLE
    i.e. quicksort does not maintain the key-value pairs initial order.
*/

// Sorts a (portion of an) array, divides it into partitions, then sorts those
function quicksort(array, low, high) {
  if (low >= 0 && high >= 0 && low < high) {
    const p = partition(array, low, high);
    quicksort(array, low, p); // Note: the pivot is now included
    quicksort(array, p + 1, high);
  }
}

// Divides array into two partitions
function partition(array, low, high) {
  // Pivot value - The value in the middle of the array
  const pivot = array[Math.floor((high + low) / 2)][0];

  // Left index
  i = low - 1;

  // Right index
  j = high + 1;

  while (true) {
    // Move the left index to the right at least once
    // and while the element at
    // the left index is less than the pivot
    do {
      ++i;
    } while (array[i][0] < pivot);

    // Move the right index to the left at least once
    // and while the element at
    // the right index is greater than the pivot
    do {
      --j;
    } while (array[j][0] > pivot);

    // If the indices crossed, return
    if (i >= j) {
      return j;
    }

    // Swap the elements at the left and right indices
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let array = [
  [3, { three1: 3 }],
  [3, { three2: 3 }],
  [5, 5],
  [8, 8],
  [9, 9],
  [7, { seven: 7 }],
  [1, { one: 1 }],
  [3, { three3: 3 }],
];

console.log(array);
quicksort(array, 0, array.length - 1);
console.log(array);
