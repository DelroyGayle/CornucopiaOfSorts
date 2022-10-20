/*
Test the Non-recursive Quicksort routine as shown at
http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/
Taken from
http://syllabus.cs.manchester.ac.uk/ugt/2019/COMP26120/SortingTool/quick_sort_info.html
*/


// Non-recursive implementation of Quick Sort using Javascript.
// Code obtained from http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/
// Slightly modified with 'let, const and comments'
// NOTE: stoimen's routine is BOTH NON-IN-PLACE & STABLE

function quickSort(unsortedList){
  // N/A - wasn't in the original besides DEEPCOPY would be needed
  // This line can be removed - see qsITER2.js
  unsortedList = unsortedList.slice(); // slice() is Shallow Copy
  const stack = [unsortedList];
  const sorted = [];
  while (stack.length) {
    let temp = stack.pop();
    let length = temp.length;

    if (length == 1) {
      sorted.push(temp[0]);
      continue;
    } // if
    const pivot = temp[0];
    const left = [];
    const right = [];

    for (let i = 1; i < length; i++) {
      if (temp[i] < pivot) {
        left.push(temp[i]);
      } else {
        right.push(temp[i]);
      } // if-else
    } // for
    left.push(pivot);
    if (right.length) {
      stack.push(right);
    } // if
    if (left.length) {
      stack.push(left);
    } // if
  } // while
  return sorted; // <=== Return the result since this version of QuickSort is NON-IN-PLACE
} // Reference: http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/

let array = [3, 4, 5, 8, 9, 7, 1];
console.log(quickSort(array));
console.log(array);

array = [3, 3, 3, -1, 1];
console.log(quickSort(array));
console.log(array);

array = [8, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];
console.log(quickSort(array));
console.log(array);

array = [9, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];
console.log(quickSort(array));
console.log(array);

array = [1,2];
console.log(quickSort(array));
console.log(array);

array = [0];
console.log(quickSort(array));
console.log(array);

array = [];
console.log(quickSort(array));
console.log(array);

/*
06OCT22
TESTED - WORKS CORRECTLY

[
  1, 3, 4, 5,
  7, 8, 9
]
[
  3, 4, 5, 8,
  9, 7, 1
]
[ -1, 1, 3, 3, 3 ]
[ 3, 3, 3, -1, 1 ]
[
  1, 2, 3, 3, 4,
  4, 4, 5, 5, 6,
  8, 9
]
[
  8, 4, 6, 2, 1,
  9, 5, 5, 4, 3,
  4, 3
]
[
  1, 2, 3, 3, 4,
  4, 4, 5, 5, 6,
  9, 9
]
[
  9, 4, 6, 2, 1,
  9, 5, 5, 4, 3,
  4, 3
]
[ 1, 2 ]
[ 1, 2 ]
[ 0 ]
[ 0 ]
[ undefined ]
[]
*/
