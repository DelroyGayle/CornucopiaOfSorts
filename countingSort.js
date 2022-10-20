// Taken from https://learnersbucket.com/tutorials/algorithms/counting-sort-algorithm-in-javascript/

const countingSort = (inputArr, len = inputArr.length) => {
  let max = Math.max(...inputArr);
  let t;

  //Create a temporary array with 0 zero values
  // as the same length of max element + 1
  const temp = new Array(max + 1).fill(0);

  // Count the frequency of each element in the original array
  // And store it in the temp array
  for (let i = 0; i < len; i++) {
    t = inputArr[i];
    temp[t]++;
  }

  //Update the count based on the previous index
  for (let i = 1; i <= max; i++) {
    // Updating elements of count array
    temp[i] = temp[i] + temp[i - 1];
  }

  /*
  console.log(temp);
  
  [
  0, 3, 5,  6, 6,
  8, 8, 9, 10
  ]
  */

  //Output array
  const outputArr = new Array(len).fill(0);

  for (let i = len - 1; i >= 0; i--) {
    // Add elements of array A to array B
    t = inputArr[i];
    outputArr[temp[t] - 1] = t;
 
    // Decrement the count value by 1
    temp[t] = temp[t] - 1;
  }

  return outputArr;
};

// ==========================================================

/*
Based on
https://www.programiz.com/dsa/counting-sort#

Counting Sort Algorithm

countingSort(array, size)
  max <- find largest element in array
  initialize count array with all zeros
  for j <- 0 to size
    find the total count of each unique element and 
    store the count at jth index in count array
  for i <- 1 to max
    find the cumulative sum and store it in count array itself
  for j <- size down to 1
    restore the elements to array
    decrease count of each element restored by 1
*/

function countingSort2(input, max = Math.max(...input), len = input.length) {
  const count = Array(max + 1).fill(0); // array of max + 1 zeros
  const output = Array(len); // array of same length as input
  let j;

  // Store the count of the frequency of each element
  for (let i = 0; i < len; i++) {
    j = input[i];
    count[j] += 1;
  }

  // Store the cummulative count of each array
  // i.e. Update the count based on the previous index
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Find the index of each element of the original array in count array, and
  // place the elements in output array
  for (i = len - 1; i >= 0; i--) {
    j = input[i];
    output[count[j] - 1] = input[i];
    --count[j];
  }

  return output;
}

// ==========================================================

/*
    SOURCE:
    https://learnersbucket.com/tutorials/algorithms/counting-sort-algorithm-in-javascript/ 
*/
   
const countingSortNegative = (array, len = array.length) => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(len).fill(0);

  //Store the frequency
  for (let i = 0; i < len; i++) {
    count[array[i] - min]++;
  }

  //Accumulate the frequency
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  //Sort based on frequency
  for (let i = len - 1; i >= 0; i--) {
    output[count[array[i] - min] - 1] = array[i];
    count[array[i] - min]--;
  }

  return output;
};

// ==========================================================

/*
    SOURCE:
    https://learnersbucket.com/tutorials/algorithms/counting-sort-algorithm-in-javascript/ 
*/
   
const countingSortStr = (str) => {
  let array = str.split("");
  let len = str.length;
  const output = new Array(len);

  // Create a count array to store count of inidividual
  // characters and initialize count array as 0
  const count = new Array(256).fill(0);

  // store count of each character
  for (let i = 0; i < len; i++) {
    count[array[i].charCodeAt()]++;
  }

  // Change count[i] so that count[i] now contains 
  // the actual position of this character in output array
  for (let i = 1; i <= 255; i++) {
    count[i] += count[i - 1];
  }

  // Build the output character array
  // To make it stable we are operating in reverse order.
  for (let i = len - 1; i >= 0; i--) {
    output[count[array[i].charCodeAt()] - 1] = array[i].charCodeAt();
    --count[array[i].charCodeAt()];
  }

  //Convert the ASCII Value to characters again
  return output.map((e) => String.fromCharCode(e));
};

// ==========================================================

let array = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort(array));
// console.log(array) // CONTENTS INTACT!

/*
[
  1, 1, 1, 2, 2,
  3, 5, 5, 7, 8
]
*/

array = [34, 203, 3, 746, 200, 984, 198, 764];
console.log(countingSort(array));

/*
[
    3,  34, 198, 200,
  203, 746, 764, 984
]
*/


array = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort2(array));
// console.log(array) // CONTENTS INTACT!

/*
[
  1, 1, 1, 2, 2,
  3, 5, 5, 7, 8
]
*/

array = [34, 203, 3, 746, 200, 984, 198, 764];
console.log(countingSort2(array));

array = [-5, -10, 0, -3, 8, 5, -1, 10];
console.log(countingSortNegative(array));

/*
Output:
[-10, -5, -3, -1, 0, 5, 8, 10]
*/

console.log(countingSortStr("learnersbucket"));

// Output: "abceeeklnrrstu";
/*
[
  'a', 'b', 'c', 'e',
  'e', 'e', 'k', 'l',
  'n', 'r', 'r', 's',
  't', 'u'
]
*/

