/*
This program is based on the C++ program at
https://www.interviewkickstart.com/learn/iterative-merge-sort

/* Iterative javascript program for merge sort */

function merge(array, left, middle, right) {

   let i, j, k;

   let n1 = middle - left + 1;

   let n2 = right - middle;

   // left[n1], right[n2];

   //const leftArray = array.slice(0,n1);
   //const rightArray = array.slice(n1);

   const leftArray =[];
   const rightArray = [];
   for (i = 0; i < n1; i++) {
        leftArray[i] = array[left + i];
   }

   for (j = 0; j < n2; j++) {
        rightArray[j] = array[middle + 1 + j];
   }

   i = 0;
   j = 0;
   k = left;

   while (i < n1 && j < n2) {

      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];

        i++;
      } else {
        array[k] = rightArray[j];

        j++;
      }

      k++;

   }

   while (i < n1) {

      array[k] = leftArray[i];

      i++;

      k++;

   }

   while (j < n2) {

      array[k] = rightArray[j];

      j++;

      k++;

   }

}

function merge_sort(array, len) {

    for(let sub_size=1;sub_size < len;sub_size*=2) {

        for(let left=0; left < len; left+=(2*sub_size)) {

            const middle=Math.min(left+sub_size-1,len-1);

            const right=Math.min(left+2*sub_size-1,len-1);

            // function to merge two sub-arrays of
            // size sub_size starting from left and middle

            merge(array, left, middle, right);
        }
    }
}


let array = [6, -1, 0, 2, 4];
merge_sort(array, array.length);
console.log(array);
// [ -1, 0, 2, 4, 6 ]



array = [
  -74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30,
  -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34, 26,
  25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23, -3,
  26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45, 47, 29,
  86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92, 52, -45,
  -2, 85, -63, 56, 55, 12, -85, 77, -39,
];
let n = array.length;

merge_sort(array, n); // IN-PLACE SORT

console.table(array);

