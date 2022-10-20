// Taken from https://en.wikipedia.org/wiki/Insertion_sort

/*
Pseudocode of the complete algorithm follows, where the arrays are zero-based:[1]

i ← 1
while i < length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
    i ← i + 1
end while
*/

const insertionSort1 = (array) => {
      let i = 1;
      while (i < array.length) {
            let j = i;
            while (j > 0 && array[j-1] > array[j]) {
                // swap array[j] && array[j-1]
                [array[j], array[j-1]] = [array[j-1], array[j]]
                --j;
            }
            ++i;
      }
}

/*
After expanding the swap operation in-place as 
x ← A[j]; A[j] ← A[j-1]; A[j-1] ← x 
(where x is a temporary variable), 
a slightly faster version can be produced that moves A[i] to its position 
in one go and only performs one assignment in the inner loop body:

i ← 1
while i < length(A)
    x ← A[i]
    j ← i - 1
    while j >= 0 and A[j] > x
        A[j+1] ← A[j]
        j ← j - 1
    end while
    A[j+1] ← x
    i ← i + 1
end while

The new inner loop shifts elements to the right
to clear a spot for x = A[i].
*/

const insertionSort2 = (array) => {
      let i = 1;
      while (i < array.length) {
            let temp = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > temp) {
                array[j+1] = array[j];
                --j;
            }
            array[j+1] = temp;
            ++i;
      }
}

/*
The algorithm can also be implemented in a recursive way.
The recursion just replaces the outer loop, 
calling itself and storing successively smaller values of n on the stack until n equals 0, 
where the function then returns up the call chain 
to execute the code after each recursive call starting with n equal to 1, 
with n increasing by 1 as each instance of the function returns to the prior instance. 

The initial call would be insertionSortR(A, length(A)-1).

function insertionSortR(array A, int n)
    if n > 0
        insertionSortR(A, n-1)
        x ← A[n]
        j ← n-1
        while j >= 0 and A[j] > x
            A[j+1] ← A[j]
            j ← j-1
        end while
        A[j+1] ← x
    end if
end function
*/

function insertionSortR(array, n) {
    if (n > 0) {
        insertionSortR(array, n - 1);
        let temp = array[n];
        let j = n - 1;
        while (j >= 0 && array[j] > temp) {
            array[j+1] = array[j];
            --j;
        }
        array[j+1] = temp;
    }
}

let array = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
insertionSort1(array);
console.log(array); // SORTED IN-PLACE

/*
[
  1, 1, 1, 2, 2,
  3, 5, 5, 7, 8
]
*/

array = [34, 203, 3, 746, 200, 984, 198, 764];
insertionSort1(array);
console.log(array); // SORTED IN-PLACE

/*
[
    3,  34, 198, 200,
  203, 746, 764, 984
]
*/

array = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
insertionSort2(array);
console.log(array); // SORTED IN-PLACE

array = [34, 203, 3, 746, 200, 984, 198, 764];
insertionSort2(array);
console.log(array); // SORTED IN-PLACE


array = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
insertionSortR(array, array.length - 1);
console.log(array); // SORTED IN-PLACE

array = [34, 203, 3, 746, 200, 984, 198, 764];
insertionSortR(array, array.length - 1);
console.log(array); // SORTED IN-PLACE

