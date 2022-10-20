// Another Variation of QUICKSORT

/*

This function uses the last element as the pivot, 
and moves all smaller items to the left of pivot and all larger elements to the right of pivot, 
and inserts pivot in the appropriate location in the sorted array. 

SOURCE: Harshil Patel
https://towardsdatascience.com/an-overview-of-quicksort-algorithm-b9144e314a72 

*/

function partition1(array, start, end) {
 
    // pivot
    const pivot = array[end];
 
/* Index of a smaller element that specifies the pivot's correct position so far. */
 
    let i = (start - 1);
 
    for (let j = start; j <= end - 1; j++) {
 
        // If current element is smaller than the pivot
        if (array[j] < pivot) {       
            i++;
            [array[i],array[j]] = [array[j], array[i]]; // swap(array, i, j);
        }
    }
    [array[i + 1], array[end]] = [array[end], array[i + 1]]; // swap(array, i + 1, end);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          array[] --> Array to be sorted,
          start --> Starting index,
          end --> Ending index
*/

function quickSort1(array, start, end) {
    if (start < end) {
 
        // The partitioning index is represented by pi.
        
        let pi = partition1(array, start, end);
 
        // Separately sort elements before
        // partition and after partition
        quickSort1(array, start, pi - 1);
        quickSort1(array, pi + 1, end);
    }
}


// Use this to test the sorting of theArray2
function partition2(array, start, end) {
  // pivot
  const pivot = array[end][0];

  /* Index of a smaller element that specifies the pivot's correct position so far. */

  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    // If current element is smaller than the pivot
    if (array[j][0] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // swap(array, i, j);
    }
  }
  [array[i + 1], array[end]] = [array[end], array[i + 1]]; // swap(array, i + 1, end);
  return i + 1;
}

/* The main function that implements QuickSort
          array[] --> Array to be sorted,
          start --> Starting index,
          end --> Ending index
*/

function quickSort2(array, start, end) {
  if (start < end) {
    // The partitioning index is represented by pi.

    let pi = partition2(array, start, end);

    // Separately sort elements before
    // partition and after partition
    quickSort2(array, start, pi - 1);
    quickSort2(array, pi + 1, end);
  }
}


// Use this to test the sorting of theArray2
function partition3(origArray, array, start, end) {
  // pivot
  const pivot = array[end]; // note: not using [0] here

  /* Index of a smaller element that specifies the pivot's correct position so far. */

  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    // If current element is smaller than the pivot
    // REPLACE (array[j][0] < pivot) -  note: not using [0] here
    // Compare the Indices instead
    if (isSmaller(origArray, array[j], pivot)) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // swap(array, i, j);
    }
  }
  [array[i + 1], array[end]] = [array[end], array[i + 1]]; // swap(array, i + 1, end);
  return i + 1;
}

/* The main function that implements QuickSort
          array[] --> Array to be sorted,
          start --> Starting index,
          end --> Ending index
*/

function quickSort3(origArray, array, start, end) {
  if (start < end) {
    // The partitioning index is represented by pi.

    let pi = partition3(origArray, array, start, end);

    // Separately sort elements before
    // partition and after partition
    quickSort3(origArray, array, start, pi - 1);
    quickSort3(origArray, array, pi + 1, end);
  }
}

function isSmaller(origArray,value,pivot) {
  if (value[0] !== pivot[0])
    return value[0] < pivot[0];

  // Use the value of the indices to determine which is smaller

  let avalue = origArray.findIndex(
    (element) => element[0] === value[0] && element[1] === value[1]
  );
  let bvalue = origArray.findIndex(
    (element) => element[0] === pivot[0] && element[1] === pivot[1]
  );

  return avalue < bvalue;
}

let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
quickSort1(theArray, 0, theArray.length - 1); // mutates the array
console.log(theArray);

/*
[
  11, 22, 23, 33, 33,
  33, 44, 45, 88, 89
]
*/

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
const CopyArray = [...theArray2]
quickSort2(theArray2, 0, theArray2.length - 1); // mutates the array
console.log(theArray2);

/*
[
  [ 11, 'j1' ], [ 11, 'j' ], <=== DEFINITELY UNSTABLE
  [ 22, 'b1' ], [ 22, 'b' ], <=== DEFINITELY UNSTABLE
  [ 23, 'e1' ], [ 23, 'e' ], <=== DEFINITELY UNSTABLE
  [ 33, 'a' ],  [ 33, 'g' ], ETC
  [ 33, 'g1' ], [ 33, 'd' ],
  [ 33, 'a1' ], [ 33, 'd1' ],
  [ 44, 'i1' ], [ 44, 'i' ],
  [ 45, 'f1' ], [ 45, 'f' ],
  [ 88, 'c1' ], [ 88, 'c' ],
  [ 89, 'h' ],  [ 89, 'h1' ]
]
*/

theArray2 = [...CopyArray];
quickSort3(CopyArray, theArray2, 0, theArray2.length - 1); // mutates the array
console.log(theArray2);

/*
    STABLE IN-PLACE QUICKSORT

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