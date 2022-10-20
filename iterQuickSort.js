/* Iterative javascript program for quicksort
// This code is contributed by mukesh07.
https://www.geeksforgeeks.org/iterative-quick-sort/ 

References: 
http://csg.sph.umich.edu/abecasis/class/2006/615.09.pdf
This article is contributed by Shivam Agrawal.  
*/

// Javascript program for implementation of QuickSort
     
    /* This function takes the last element as pivot,
    places the pivot element at its correct
    position in the sorted array, and places all
    smaller (smaller than the pivot) to the left of
    pivot and all greater elements to the right
    of pivot */
    function partition(theArray, low, high)
    {
        let temp;
        let pivot = theArray[high];
  
        // index of smaller element
        let i = (low - 1);
        for (let j = low; j <= high - 1; j++) {
            // If current element is smaller
            // than or equal to pivot
            if (theArray[j] <= pivot) {
                i++;
  
                // swap theArray[i] and theArray[j]
                temp = theArray[i];
                theArray[i] = theArray[j];
                theArray[j] = temp;
            }
        }
  
        // swap theArray[i+1] and theArray[high]
        // (or pivot)
  
        temp = theArray[i + 1];
        theArray[i + 1] = theArray[high];
        theArray[high] = temp;
  
        return i + 1;
    }
  
    /* A[] --> Array to be sorted,
    l --> Starting index,
    h --> Ending index */
    function quickSortIterative(theArray, l, h)
    {
        // Create an auxiliary stack
        let stack = new Array(h - l + 1);
        stack.fill(0);
  
        // initialize the top of stack
        let top = -1;
  
        // push initial values of l and h to
        // stack
        stack[++top] = l;
        stack[++top] = h;
  
        // Keep popping from stack while it
        // is not empty
        while (top >= 0) {
            // Pop h and l
            h = stack[top--];
            l = stack[top--];
  
            // Set the pivot element at its
            // correct position in
            // sorted array
            let p = partition(theArray, l, h);
  
            // If there are elements on the
            // left side of pivot, then
            // push left side to stack
            if (p - 1 > l) {
                stack[++top] = l;
                stack[++top] = p - 1;
            }
  
            // If there are elements on the
            // right side of pivot, then
            // push right side to stack
            if (p + 1 < h) {
                stack[++top] = p + 1;
                stack[++top] = h;
            }
        }
    }

const array = [
  -74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30,
  -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34, 26,
  25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23, -3,
  26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45, 47, 29,
  86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92, 52, -45,
  -2, 85, -63, 56, 55, 12, -85, 77, -39,
];

const n = array.length;

// Function calling
quickSortIterative(array, 0, n - 1);
    
console.log(array);
