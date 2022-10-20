// SOURCE:
// https://www.geeksforgeeks.org/bucket-sort-2/ 


// Javascript program to sort an array
// using bucket sort
  
// Function to sort array[] of size n
// using bucket sort
function bucketSort(array,n)
{
    if (n <= 0) {
            return;
    }
   
    // 1) Create n empty buckets       
    const buckets = new Array(n);
   
    for (let i = 0; i < n; i++) {
            buckets[i] = [];
    }
   
    // 2) Put array elements in different buckets
    for (let i = 0; i < n; i++) {
            let idx = array[i] * n;
            buckets[Math.floor(idx)].push(array[i]);
    }
   
    // 3) Sort individual buckets
    for (let i = 0; i < n; i++) {
            buckets[i].sort(function(a,b){return a-b;});
    }
   
    // 4) Concatenate all buckets into array[]
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
                array[index++] = buckets[i][j];
        }
    }
}

/*
# SOURCE: https://www.geeksforgeeks.org/bucket-sort-2/ 

# Bucket sort for numbers 
# having integer part
def bucketSort(arr, noOfBuckets):
    max_ele = max(arr)
    min_ele = min(arr)
  
    # range(for buckets)
    rnge = (max_ele - min_ele) / noOfBuckets
  
    temp = []
  
    # create empty buckets
    for i in range(noOfBuckets):
        temp.append([])
  
    # scatter the array elements
    # into the correct bucket
    for i in range(len(arr)):
        diff = (arr[i] - min_ele) / rnge - 
              int((arr[i] - min_ele) / rnge)
  
        # append the boundary elements to the lower array
        if(diff == 0 and arr[i] != min_ele):
            temp[int((arr[i] - min_ele) / rnge) - 1].append(arr[i])
  
        else:
            temp[int((arr[i] - min_ele) / rnge)].append(arr[i])
  
    # Sort each bucket individually
    for i in range(len(temp)):
        if len(temp[i]) != 0:
            temp[i].sort()
  
    # Gather sorted elements 
    # to the original array
    k = 0
    for lst in temp:
        if lst:
            for i in lst:
                arr[k] = i
                k = k+1
  
  
# Driver Code
arr = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68]
noOfBuckets = 5
bucketSort(arr, noOfBuckets)
print("Sorted array: ", arr)
  
# This code is contributed by
# Vinita Yadav
*/

// Taken from insertionSort.js
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

// Bucket sort for numbers 
// having integer part
function bucketSort2(array, noOfBuckets) {

  if (noOfBuckets <= 1) {
    return;
  }    
  const max_element = Math.max(...array);
  const min_element = Math.min(...array);

  // range(for buckets)
  const range = (max_element - min_element) / noOfBuckets;

  // create empty buckets

  /*
    This is the wrong way to do it because of
    SHALLOW COPY
    const temp = new Array(noOfBuckets).fill([]);
    console.log(temp) ==>
    [ [], [], [], [], [] ]
    However this is 5 copies of the SAME OBJECT []
    therefore when item=9.8
    temp[Math.trunc((item - min_element) / range)].push(item)
    RESULTS WITH:
    [([9.8], [9.8], [9.8], [9.8], [9.8])]; 
    WHICH IS WRONG!!

    RATHER, THE CODE BELOW PRODUCES CORRECTLY:
    [ [], [], [], [], [ 9.8 ] ]
  */

  const temp = [];
  for (let i = 0; i < noOfBuckets; i++) {
    temp.push([]);
  }
  
  // scatter the array elements
  // into the correct bucket
  for (const item of array) {
    let diff =
      (item - min_element) / range - Math.trunc((item - min_element) / range);

    // append the boundary elements to the lower array
    if (diff === 0 && item !== min_element) {
      temp[Math.trunc((item - min_element) / range) - 1].push(item);
    } else {
      temp[Math.trunc((item - min_element) / range)].push(item);
    }
  }

/* RESULTANT 'temp':
  [
  [ 0.6, 1.9 ],
  [ 3.07, 3.04 ],
  [ 5, 4.8 ],
  [ 8, 7.68 ],
  [ 9.8, 10.1 ]
  ]

  .07, 3.04 ],
  [ 5, 4.8 ],
  [ 8, 7.68 ],
  [ 9.8, 10.1 ]
]

┌─────────┬──────┬──────┐
│ (index) │  0   │  1   │
├─────────┼──────┼──────┤
│    0    │ 0.6  │ 1.9  │
│    1    │ 3.07 │ 3.04 │
│    2    │  5   │ 4.8  │
│    3    │  8   │ 7.68 │
│    4    │ 9.8  │ 10.1 │
└─────────┴──────┴──────┘
*/

/*
     https://www.w3schools.com/python/python_for_loops.asp
     The range() function returns a sequence of numbers, starting from 0 by default, 
     and increments by 1 (by default), and ends at a specified number.
     for x in range(6): => 0 to 5
     for x in range(2, 6): => 2 to 5
*/


  // Sort each bucket individually
  // Use Insertion Sort
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length !== 0) {
      insertionSort2(temp[i]);
    }
  }


/* SORTED:
┌─────────┬──────┬──────┐
│ (index) │  0   │  1   │
├─────────┼──────┼──────┤
│    0    │ 0.6  │ 1.9  │
│    1    │ 3.04 │ 3.07 │
│    2    │ 4.8  │  5   │
│    3    │ 7.68 │  8   │
│    4    │ 9.8  │ 10.1 │
└─────────┴──────┴──────┘
*/

  // Gather sorted elements
  // to the original array
  let k = 0;
  for (const list of temp) {
    if (list.length > 0) {
      for (let item of list) {
        array[k] = item;
        ++k;
      }
    }
  }
}  


/*
SOURCE: https://stackabuse.com/bucket-sort-in-python/ 

Bucket Sort Implementation in Python

def bucket_sort(input_list):
    # Find maximum value in the list and use length of the list 
    # to determine which value in the list goes into which bucket 
    max_value = max(input_list)
    size = max_value/len(input_list)

    # Create n empty buckets where n is equal to the length of the input list
    buckets_list= []
    for x in range(len(input_list)):
        buckets_list.append([]) 

    # Put list elements into different buckets based on the size
    for i in range(len(input_list)):
        j = int (input_list[i] / size)
        if j != len (input_list):
            buckets_list[j].append(input_list[i])
        else:
            buckets_list[len(input_list) - 1].append(input_list[i])

    # Sort elements within the buckets using Insertion Sort
    for z in range(len(input_list)):
        insertion_sort(buckets_list[z])
            
    # Concatenate buckets with sorted elements into a single list
    final_output = []
    for x in range(len (input_list)):
        final_output = final_output + buckets_list[x]
    return final_output
*/


function bucketSort3(input_list) {
  // Find maximum value in the list and use length of the list
  // to determine which value in the list goes into which bucket
  const len = input_list.length;
  if (len <= 1) { // Although this algorithm would work fine for len=1
    return input_list;
  }   

  max_value = Math.max(...input_list);
  size = max_value / len;

  // Create n empty buckets where n is equal to the length of the input list
  const buckets_list = [];
  for (let i = 0; i < len; i++) {
    buckets_list.push([]);
  }
 
  // Put list elements into different buckets based on the size
  for (const item of input_list) {
    let j = ~~(item / size);
    if (j !== len) {
      buckets_list[j].push(item);
    } else {
      buckets_list[len - 1].push(item);
    }
  }

  // Sort elements within the buckets using Insertion Sort
  buckets_list.forEach((list) => insertionSort2(list));
  
/*
    console.log(buckets_list);
[
  [ 0.6 ],    [ 1.9 ],
  [],         [ 3.04, 3.07 ],
  [ 4.8, 5 ], [],
  [],         [ 7.68, 8 ],
  [],         [ 9.8, 10.1 ]
]
*/

    // Concatenate buckets with sorted elements into a single list
    return buckets_list.reduce((newArray, item) => {
          newArray.push(...item);
          return newArray;} 
          , []);
    /*      
    final_output = 
    for buckets_list in range(len (input_list)):
        final_output = final_output + buckets_list[x]
    return final_output
    */
}

/*
SOURCE:
https://www.geeksforgeeks.org/bucket-sort-to-sort-an-array-with-negative-numbers/ 

Bucket Sort To Sort an Array with Negative Numbers

Bucket sort is mainly useful when input is uniformly distributed over a range. 
For example, consider the problem of sorting a large set of floating point numbers 
which are in range from 0.0 to 1.0 and are uniformly distributed across the range. 

How to modify Bucket Sort to sort both positive and negative numbers? 

Here we considering number is in range -1.0 to 1.0 (floating point number) 

Algorithm : 
 

sortMixed(arr[], n)
1) Split array into two parts 
   create two Empty vector Neg[], Pos[] 
   (for negative and positive element respectively)
   Store all negative element in Neg[] by converting
   into positive (Neg[i] = -1 * Arr[i] )
   Store all +ve in pos[]  (pos[i] =  Arr[i])

2) Call function bucketSortPositive(Pos, pos.size())
   Call function bucketSortPositive(Neg, Neg.size())

bucketSortPositive(arr[], n)
3) Create n empty buckets (Or lists).
4) Do following for every array element arr[i]. 
       a) Insert arr[i] into bucket[n*array[i]]
5) Sort individual buckets using insertion sort.
6) Concatenate all sorted buckets. 

# Python3 program to sort an array of positive
# and negative numbers using bucket sort
 
# Function to sort arr[] of size n using
# bucket sort
def bucketSort(arr, n):
     
    # 1) Create n empty buckets
    b = []
    for i in range(n):
        b.append([])
         
    # 2) Put array elements in different
    #    buckets
    for i in range(n):
        bi = int(n*arr[i])
        b[bi].append(arr[i])
     
    # 3) Sort individual buckets
    for i in range(n):
        b[i].sort()
         
    # 4) Concatenate all buckets into arr[]
    index = 0
    arr.clear()
    for i in range(n):
        for j in range(len(b[i])):
            arr.append(b[i][j])
 
# This function mainly splits array into two
# and then calls bucketSort() for two arrays.
def sortMixed(arr, n):
    Neg = []
    Pos = []
     
    # traverse array elements
    for i in range(n):
        if(arr[i]<0):
            # store -ve elements by
            # converting into +ve element
            Neg.append(-1*arr[i])
        else:
            # store +ve elements
            Pos.append(arr[i])
             
    bucketSort(Neg,len(Neg))
    bucketSort(Pos,len(Pos))
     
    # First store elements of Neg[] array
    # by converting into -ve
    for i in range(len(Neg)):
        arr[i]=-1*Neg[len(Neg)-1-i]
         
    # store +ve element
    for i in range(len(Neg),n):
        arr[i]= Pos[i-len(Neg)]
 
# Driver program to test above function
arr = [-0.897, 0.565, 0.656, -0.1234, 0, 0.3434]
sortMixed(arr, len(arr))
print("Sorted Array is")
print(arr)

# This code is contributed by Pushpesh raj

08OCT22
DISCOVERED A BUG WHILST EMULATING THE ABOVE PYTHON 3 PROGRAM
Sorted Array is
[-0.1234, -0.897, 0.565, 0.656, 0, 0.3434]

THIS IS WRONG BECAUSE -0.897 IS SMALLER THAN -0.1234
SHOULD BE

arr.sort()
print(arr)


[-0.897, -0.1234, 0, 0.3434, 0.565, 0.656]

I tested the PYTHON program using onecompiler.com which verified the wrong output!
*/

/*
PYTHON3
The clear() method only empties the given list.
*/

// Use a range - smallest number to largest!
// Ignore the difference between negative and positive numbers
// Therefore call bucketSort2() once for one array.

function sortMixed2(array) {
  if (array.length <= 1) {
    return array;
  }

  bucketSort2(array, array.length);
  return array;
}

// ==================================================

// Driver code
let array = [0.897, 0.565,
         0.656, 0.1234,
         0.665, 0.3434];
let n = array.length;
bucketSort(array, n);
console.log(array);
// [ 0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897 ]


// Driver Code
array = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68]
let noOfBuckets = 5
bucketSort2(array, noOfBuckets)
console.log(array);

/*
[
  0.6,  1.9, 3.04, 3.07,
  4.8,    5, 7.68,    8,
  9.8, 10.1
]
*/


// Driver Code
array = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68]
console.log(bucketSort3(array));
console.log(array) // CONTENTS INTACT!

// The following uses BucketSort2()

// Driver Code
array = [-0.897, 0.565, 0.656, -0.1234, 0, 0.3434]
console.log(sortMixed2(array));
// console.log(array); // IN-PLACE REPLACEMENT
[ -0.897, -0.1234, 0, 0.3434, 0.565, 0.656 ]

array = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68];
console.log(sortMixed2(array));
[0.6, 1.9, 3.04, 3.07, 4.8, 5, 7.68, 8, 9.8, 10.1]

array = array = [0.98, 0.6, 0.1, 0.5, 0.68];
console.log(sortMixed2(array));
[0.1, 0.5, 0.6, 0.68, 0.98]
