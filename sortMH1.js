/*
Source: https://stackoverflow.com/questions/5185864/javascript-quicksort 

How about this non-mutating functional QuickSort:
As a bonus, it supports optional comparing function 
which enables sorting of array of objects per property/properties, 
and doesn't get slower if dealing with larger values/objects.

First quick sorts original array keys, then returns sorted copy of original array.
answered Mar 27, 2019 at 21:15
MHelander
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
      : (left, right) => (left < right ? -1 : right < left ? 1 : 0);
  const [pivotIndex, ...indexesSansPivot] = arrIndexes;
  const indexSortReducer = (isLeftOfPivot) => [
    (acc, index) =>
      isLeftOfPivot === (compF(iArr[index], iArr[pivotIndex]) === -1)
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

let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
console.log(quicksort(theArray));
console.log(theArray) // original array intact!