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
    if (L[i][0] <= R[j][0]) {
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

 let n = array.length;

 mergeSort(array, n);

console.log(array); // - CONTENTS SORTED IN-PLACE

array = [
  [1, { one1: 1 }],
  [3, { three1: 3 }],
  [5, 5],
  [7, { seven1: 7 }],
  [8, 8],
  [9, 9],
  [0,0],
  [-1,-1],
  [1,1],
  [7, { seven2: 7 }],
  [3, { three2: 3 }],
  [1, { one2: 1 }],
  [3, { three3: 3 }],
  [7, { seven3: 7 }],
];

 n = array.length;

 mergeSort(array, n);

console.log(array);

/*
12OCT22

[
  [ 1, { one: 1 } ],
  [ 3, { three1: 3 } ],
  [ 3, { three2: 3 } ],
  [ 3, { three3: 3 } ],
  [ 5, 5 ],
  [ 7, { seven: 7 } ],
  [ 8, 8 ],
  [ 9, 9 ]
]
[
  [ -1, -1 ],
  [ 0, 0 ],
  [ 1, { one1: 1 } ],
  [ 1, 1 ],         <== CORRECTLY POSITIONED AFTER one1 AND BEFORE one2
  [ 1, { one2: 1 } ],
  [ 3, { three1: 3 } ],
  [ 3, { three2: 3 } ],
  [ 3, { three3: 3 } ],
  [ 5, 5 ],
  [ 7, { seven1: 7 } ],
  [ 7, { seven2: 7 } ],
  [ 7, { seven3: 7 } ],
  [ 8, 8 ],
  [ 9, 9 ]
]
*/
