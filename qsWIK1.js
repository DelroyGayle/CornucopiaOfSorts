/*
Test the quicksort pseudo code of Lomuto partition scheme as shown at
https://en.wikipedia.org/wiki/Quicksort


// Sorts a (portion of an) array, divides it into partitions, then sorts those
algorithm quicksort(A, lo, hi) is 
  // Ensure indices are in correct order
  if lo >= hi || lo < 0 then 
    return
    
  // Partition array and get the pivot index
  p := partition(A, lo, hi) 
      
  // Sort the two partitions
  quicksort(A, lo, p - 1) // Left side of pivot
  quicksort(A, p + 1, hi) // Right side of pivot

// Divides array into two partitions
algorithm partition(A, lo, hi) is 
  pivot := A[hi] // Choose the last element as the pivot

  // Temporary pivot index
  i := lo - 1

  for j := lo to hi - 1 do 
    // If the current element is less than or equal to the pivot
    if A[j] <= pivot then 
      // Move the temporary pivot index forward
      i := i + 1
      // Swap the current element with the element at the temporary pivot index
      swap A[i] with A[j]

  // Move the pivot element to the correct pivot position (between the smaller and larger elements)
  i := i + 1
  swap A[i] with A[hi]
  return i // the pivot index

  Sorting the entire array is accomplished by quicksort(A, 0, length(A) - 1).
*/

// Sorts a (portion of an) array, divides it into partitions, then sorts those
function quicksort(array, low, high) {
  // Ensure indices are in correct order
  if (low >= high || low < 0) {
    return;
  }

  // Partition array and get the pivot index
  const p = partition(array, low, high);

  // Sort the two partitions
  quicksort(array, low, p - 1); // Left side of pivot
  quicksort(array, p + 1, high); // Right side of pivot
}

// Divides array into two partitions
function partition(array, low, high) {
  pivot = array[high]; // Choose the last element as the pivot

  // Temporary pivot index
  let i = low - 1;

  for (j = low; j <= high - 1; j++) {
    // If the current element is less than or equal to the pivot
    if (array[j] <= pivot) {
      // Move the temporary pivot index forward
      i++;
      // Swap the current element with the element at the temporary pivot index
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // Move the pivot element to the correct pivot position (between the smaller and larger elements)
  i++;
  [array[i], array[high]] = [array[high], array[i]];
  return i; // the pivot index
}

let array = [3, 4, 5, 8, 9, 7, 1];
quicksort(array, 0, array.length - 1);
console.log(array);

/*
06OCT22
TESTED - WORKS CORRECTLY
Lomuto partition scheme

[
  1, 3, 4, 5,
  7, 8, 9
]
*/
