/*
Test the Non-recursive Quicksort routine as shown at
http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/
Taken from
http://syllabus.cs.manchester.ac.uk/ugt/2019/COMP26120/SortingTool/quick_sort_info.html

TESTED TO SHOW THAT stoimen's QuickSort IS IN FACT, "STABLE"
i.e. maintains the key-value pairs initial order.
*/

// Non-recursive implementation of 'In Place' Quick Sort using Javascript.
// Code obtained from http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/
// Slightly modified with 'let, const and comments'
// NOTE: stoimen's routine is BOTH NON-IN-PLACE & STABLE

function quickSort(unsortedList) {
  // N/A - wasn't in the original besides DEEPCOPY would be needed
  // So this line has been removed
  // unsortedList = unsortedList.slice(); // slice() is Shallow Copy
  const stack = [unsortedList];
  const sorted = [];
  while (stack.length) {
    let temp = stack.pop();
    let length = temp.length;
    if (length == 1) {
      sorted.push(temp[0]);
      continue;
    } // if
    const pivot = temp[0][0];
    const left = [];
    const right = [];

    for (let i = 1; i < length; i++) {
      if (temp[i][0] < pivot) {
        left.push(temp[i]);
      } else {
        right.push(temp[i]);
      } // if-else
    } // for
    // THIS IS THE ONLY NECESSARY CHANGE
    // I.E. PUSH THE OBJECT THAT HELD THE 'pivot' IN ITS ENTIRETY
    left.push(temp[0]); // left.push(pivot);
    if (right.length) {
      stack.push(right);
    } // if
    if (left.length) {
      stack.push(left);
    } // if
  } // while
  return sorted; // <=== Return the result since this version of QuickSort is NON-IN-PLACE
} // Reference: http://www.stoimen.com/blog/2010/06/18/friday-algorithms-iterative-quicksort/

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
console.log(quickSort(array, 0, array.length - 1));
// console.log(array); - CONTENTS INTACT!

array = [
  [1, { one1: 1 }],
  [3, { three1: 3 }],
  [5, 5],
  [7, { seven1: 7 }],
  [8, 8],
  [9, 9],
  [0, 0],
  [-1, -1],
  [1, 1],
  [7, { seven2: 7 }],
  [3, { three2: 3 }],
  [1, { one2: 1 }],
  [3, { three3: 3 }],
  [7, { seven3: 7 }],
];

console.log(array);
console.log(quickSort(array, 0, array.length - 1));
// console.log(array); - CONTENTS INTACT!

/*
06OCT22

[
  [ 3, { three1: 3 } ],
  [ 3, { three2: 3 } ],
  [ 5, 5 ],
  [ 8, 8 ],
  [ 9, 9 ],
  [ 7, { seven: 7 } ],
  [ 1, { one: 1 } ],
  [ 3, { three3: 3 } ]
]
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
  [ 1, { one1: 1 } ],
  [ 3, { three1: 3 } ],
  [ 5, 5 ],
  [ 7, { seven1: 7 } ],
  [ 8, 8 ],
  [ 9, 9 ],
  [ 0, 0 ],
  [ -1, -1 ],
  [ 1, 1 ],         <== NOTE THE POSITION AFTER one1 AND BEFORE one2
  [ 7, { seven2: 7 } ],
  [ 3, { three2: 3 } ],
  [ 1, { one2: 1 } ],
  [ 3, { three3: 3 } ],
  [ 7, { seven3: 7 } ]
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
