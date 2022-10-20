/*
PSEUDOCODE FROM https://en.wikipedia.org/wiki/Bubble_sort 
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n-1 inclusive do
            /* if this pair is out of order * /
            if A[i-1] > A[i] then
                /* swap them and remember something changed * /
                swap(A[i-1], A[i])
                swapped := true
            end if
        end for
    until not swapped
end procedure
*/

function bubbleSort(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

bubbleSort(a);
console.log(a);

a = [8, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];
bubbleSort(a);
console.log(a);

a = arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
bubbleSort(a);
console.log(a);

/*

Optimizing bubble sort
The bubble sort algorithm can be optimized by observing that
the n-th pass finds the n-th largest element and puts it into its final place. 
So, the inner loop can avoid looking at the last n − 1 items when running for the n-th time:

procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                swapped := true
            end if
        end for
        n := n - 1
    until not swapped
end procedure

*/

// Optimizing bubble sort
function bubbleSort2(a) {
  let n = a.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
    --n;
  } while (swapped);
}

console.log("\nPART 2");

a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
bubbleSort2(a);
console.log(a);

a = [8, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];
bubbleSort2(a);
console.log(a);

a = arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
bubbleSort2(a);
console.log(a);

/* John's code from
http://www.stoimen.com/2010/07/09/friday-algorithms-javascript-bubble-sort/
*/

function bubbleSort3(theArray) {
  let i, j;
  for (i = theArray.length - 1; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      if (theArray[j + 1] < theArray[j]) {
        let temp = theArray[j];
        theArray[j] = theArray[j + 1];
        theArray[j + 1] = temp;
      }
    }
  }
  return theArray;
}

console.log("\nPART 3");

a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
bubbleSort3(a);
console.log(a);

a = [8, 4, 6, 2, 1, 9, 5, 5, 4, 3, 4, 3];
bubbleSort3(a);
console.log(a);

a = arr = [9, 2, 1, 3, 0, 8, 7, 6, 5, 4, 10];
bubbleSort3(a);
console.log(a);
