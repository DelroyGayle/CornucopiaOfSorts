// SOURCE: //thedukh.com/2021/02/javascript-sorting-algorithms-explained-radix-sort/  

function getDigitAtPlace(num, i) {
  return num.toString().split("").reverse()[i] || 0;
}

// getDigitAtPlace(9420, 2);
// 9420 (Number) =>
// "9420" (String) =>
// ["9", "4", "2", "0"] (Array) =>
// ["0", "2", "4", "9"] (reversed) =>
// 4 (the second indexed item - our return value)

function getBiggestDigitCount(nums) {
 let maxDigits = 0;
 for (let i = 0; i < nums.length; i++) {
   maxDigits = Math.max(maxDigits, nums[i].toString().length);
 }
 return maxDigits;
}

// getBiggestDigitCount([9420, 12, 555]);
// 1st iteration -> maxDigits is 0, the current digit count for 9420 is 4, maxDigits becomes 4
// 2nd iteration -> maxDigits is 4, the current digit count for 12 is 2, maxDigits stays 4
// 3rd iteration -> maxDigits is 4, the current digit count for 555 is 3, maxDigits stays 4
// method returns 4

function radixSort(nums) {
 let maxDigits = getBiggestDigitCount(nums);
 for (let i = 0; i < maxDigits; i++) {
   let bucketArray = Array.from({ length: 10 }, () => []);
   for (let j = 0; j < nums.length; j++) {
       let digit = getDigitAtPlace(nums[j], i);
       bucketArray[digit].push(nums[j]);
   }
   nums = [].concat(...bucketArray);
 }
 return nums;
}
console.log(radixSort([3221, 1, 10, 577, 9420, 7, 4793, 2030, 3138, 82, 2599, 743]));

/*
[
     1,    7,   10,   82,
   577,  743, 2030, 2599,
  3138, 3221, 4793, 9420
]
*/

let array = [2, 24, 25, 45, 66, 75 , 170, 802, 170, 45, 75, 25, 2, 24, 802, 66];

console.log(radixSort(array))

/*
[
    2,   2,  24,  24, 25, 25,
   45,  45,  66,  66, 75, 75,
  170, 170, 802, 802
]
*/
console.log(array); // CONTENTS INTACT

