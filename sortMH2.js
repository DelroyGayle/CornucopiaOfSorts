/*
Source: https://stackoverflow.com/questions/5185864/javascript-quicksort 

How about this non-mutating functional QuickSort:
As a bonus, it supports optional comparing function 
which enables sorting of array of objects per property/properties, 
and doesn't get slower if dealing with larger values/objects.

First quick sorts original array keys, then returns sorted copy of original array.
answered Mar 27, 2019 at 21:15
MHelander

THE STABILISED (non-mutating) VERSION FOLLOWS:
*/

const quicksort = (arr, comp, iArr = arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const isInitial = arr.length === iArr.length;
  const arrIndexes = isInitial ? Object.keys(arr) : arr;
  const compF =
    typeof comp === "function"
      ? comp
      : compare;
  const [pivotIndex, ...indexesSansPivot] = arrIndexes;
  
  const indexSortReducer = (isLeftOfPivot) => [
    (acc, index) =>
      isLeftOfPivot === (compF(iArr[index], iArr[pivotIndex]) < 0)
        ? acc.concat(index)
        : acc,
    [],
  ];

  const ret = quicksort(
    indexesSansPivot.reduce(...indexSortReducer(true)),
    compF,
    iArr
  )
    .concat(pivotIndex)
    .concat(
      quicksort(
        indexesSansPivot.reduce(...indexSortReducer(false)),
        compF,
        iArr
      )
    );
  return isInitial
    ? ret.reduce((acc, index) => acc.concat([arr[index]]), [])
    : ret;
};

function compare(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// if 'comp' is supplied it has to use 'compare' OR directly use a[1] & b[1]
function stableSort(array, comp) {
  let stableArray = [];
  for (let i = 0; i < array.length; i++) {
    stableArray[i] = [array[i], i];
  }
  stableArray = quicksort(stableArray, comp);
  console.log(stableArray);
  for (let i = 0; i < array.length; i++) {
    stableArray[i] = stableArray[i][0];
  }
  return stableArray;
}
let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
console.log(stableSort(theArray));
console.log(theArray); // original array intact!

theArray = theArray.concat(theArray);
console.log(stableSort(theArray)); 
console.log(theArray); // original array intact!

