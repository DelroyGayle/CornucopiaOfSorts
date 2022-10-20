/* Iterative javascript program for merge sort
by umadevi9616
https://www.geeksforgeeks.org/iterative-merge-sort/

References: 
http://csg.sph.umich.edu/abecasis/class/2006/615.09.pdf
This article is contributed by Shivam Agrawal.  
*/

/*
   Iterative mergesort function to sort theArray[0...n-1]
   Note: This version is in-place
*/

function mergeSort(theArray, n) {
  // For current size of subarrays to
  // be merged curr_size varies from
  // 1 to n/2
  let curr_size;

  // For picking starting index of
  // left subarray to be merged
  let left_start;

  // Merge subarrays in bottom up
  // manner. First merge subarrays
  // of size 1 to create sorted
  // subarrays of size 2, then merge
  // subarrays of size 2 to create
  // sorted subarrays of size 4, and
  // so on.
  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    // Pick starting point of different
    // subarrays of current size
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      // Find ending point of left
      // subarray. mid+1 is starting
      // point of right
      let mid = Math.min(left_start + curr_size - 1, n - 1);

      let right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      // Merge Subarrays theArray[left_start...mid]
      // & theArray[mid+1...right_end]
      merge(theArray, left_start, mid, right_end);
    }
  }
}

/*
 * Function to merge the two haves theArray[l..m] and theArray[m+1..r] of array theArray
*/
function merge(theArray, l, m, r) {
  let i, j, k;
  let n1 = m - l + 1;
  let n2 = r - m;

  /* create temp arrays */
  let L = Array(n1).fill(0);
  let R = Array(n2).fill(0);

  /*
   * Copy data to temp arrays L and R
   */
  for (i = 0; i < n1; i++) {
    L[i] = theArray[l + i];
  }

  for (j = 0; j < n2; j++) { 
    R[j] = theArray[m + 1 + j];
  }

  /*
   * Merge the temp arrays back into theArray[l..r]
  */
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      theArray[k] = L[i];
      i++;
    } else {
      theArray[k] = R[j];
      j++;
    }
    k++;
  }

  /*
   * Copy the remaining elements of L, if there are any
  */
  while (i < n1) {
    theArray[k] = L[i];
    i++;
    k++;
  }

  /*
   * Copy the remaining elements of R, if there are any
  */
  while (j < n2) {
    theArray[k] = R[j];
    j++;
    k++;
  }
}

 const array = [
   -74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30,
   -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34,
   26, 25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23,
   -3, 26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45, 47,
   29, 86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92, 52,
   -45, -2, 85, -63, 56, 55, 12, -85, 77, -39,
 ];

 const n = array.length;

mergeSort(array, n);
console.log(array)

