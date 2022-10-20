/*
Source: https://stackoverflow.com/questions/5185864/javascript-quicksort 

You can easily "stabilize" an unstable sort using a decorate-sort-undecorate pattern
the idea is to add the index as last sorting term so that no two elements are 
now "the same" and if everything else is the same the original index will be the discriminating factor.

edited Mar 10, 2016 at 8:13
answered Mar 3, 2011 at 20:14
6502
*/

function stableSort(v, f) {
  if (f === undefined) {
    f = function (a, b) {
      a = "" + a;
      b = "" + b;
      return a < b ? -1 : a > b ? 1 : 0;
    };
  }
  let dv = [];
  for (let i = 0; i < v.length; i++) {
    dv[i] = [v[i], i];
  }
  dv.sort(function (a, b) {
    return f(a[0], b[0]) || a[1] - b[1];
  });
  console.log(dv)
  for (let i = 0; i < v.length; i++) {
    v[i] = dv[i][0];
  }
  return v // <=== CHANGE
}

console.log(stableSort([33, 22, 88, 33, 23, 45, 33, 89, 44, 11]));
let theArray = [33, 22, 88, 33, 23, 45, 33, 89, 44, 11];
console.log(stableSort(theArray)); // mutates the array

/*
[
  [ 11, 9 ], [ 22, 1 ],
  [ 23, 4 ], [ 33, 0 ],
  [ 33, 3 ], [ 33, 6 ],
  [ 44, 8 ], [ 45, 5 ],
  [ 88, 2 ], [ 89, 7 ]
]
[
  11, 22, 23, 33, 33,
  33, 44, 45, 88, 89
]
*/