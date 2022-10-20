# CornucopiaOfSorts
I have been studying the fascinating world of different sorting algorithms and what follows is a summary of what I have discovered.


## Bubble Sort
![image](https://www.w3resource.com/w3r_images/bubble-short.png)

> Bubble sort is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps had to be performed during a pass, meaning that the list has become fully sorted. The algorithm is named for the way **the larger elements "bubble" up to the top of the list**.

**bubbleSort.js** shows three types of the Bubble Sort algorithm.

---

## Insertion Sort
![image](https://learntocodetogether.com/wp-content/uploads/2019/06/download.png)\
[Image Source](https://learntocodetogether.com/bubble-sort-insertion-sort-merge-sort-in-javascript/)

> Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time by comparisons. When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort. Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

**insertionSort.js** - implementations of the Insertion Sort algorithm.

---

## Counting Sort
![image](https://user-images.githubusercontent.com/91061592/196403148-d6e82e38-61b4-4626-b130-7264b6fc1fdd.png)
![image](https://user-images.githubusercontent.com/91061592/196403309-dc7bcb52-1f12-455b-9836-5741f947a9b2.png)\
[Image Source](https://www.programiz.com/dsa/counting-sort)

> In computer science, counting sort is an algorithm for sorting a collection of objects according to keys that are small positive integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that possess distinct key values, and applying prefix sum on those counts to determine the positions of each key value in the output sequence.

**countingSort.js** - various implementations of the Counting Sort

---

## Bucket Sort
![image](https://media.geeksforgeeks.org/wp-content/uploads/BucketSort.png)\
[Image Source](https://www.geeksforgeeks.org/bucket-sort-2/)

> Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm. 

**miscBucketSort.js** - various implementations of the Bucket Sort

---

## Radix Sort
![image](https://ds055uzetaobb.cloudfront.net/brioche/uploads/IEZs8xJML3-radixsort_ed.png?width=2000)\
[Image Source](https://brilliant.org/wiki/radix-sort/)

> In computer science, radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered. 

**radixSort.js** - implementation of the Radix Sort algorithm.

---

## Merge Sort
![image](https://www.101computing.net/wp/wp-content/uploads/Merge-Sort-Algorithm.png)\
[Image Source](https://www.101computing.net/merge-sort-algorithm/)

> In computer science, merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide-and-conquer algorithm that was invented by **John von Neumann in 1945**.

### Non-recursive implementations of the Merge Sort :-

**iterMergeSort.js** - Geeksforgeeks' implementation of the **Iterative** Merge Sort algorithm.
That is, MergeSort in truth, is a recursive algorithm.
However, here is an example of the algorithm being implemented without recursion.

**iterMergeSort2.js** - another implementation of the **Iterative** Merge Sort algorithm based on the C++ program found at
[interviewkickstart](https://www.interviewkickstart.com/learn/iterative-merge-sort)

**iterMergeSortStable.js** - This is presented as proof that Merge Sort is indeed a ***stable*** sorting routine
even when implemented in an iterative manner.

### Thomas Baudel's in-place stable sorts :-

**sort1.js** - Thomas Baudel's in-place stable sort - inplace merge sort\

**sort2.js** - Thomas Baudel's in-place stable sort - this version uses nested functions

---

## Quick Sort
![image](https://favtutor.com/resources/images/uploads/Quick_sort_algorithm.png)\

This sort was discovered by Sir Charles Antony Richard Hoare. [Here](http://www.stoimen.com/2010/06/18/friday-algorithms-iterative-quicksort/) is what he wrote in his lecture “The Emperor’s Old Clothes” published by Communications of the ACM in 1981:

>***My first task was to implement for the new Elliot 803 computer, a library subroutine for a new fast method of internal sorting just invented by Shell. I greatly enjoyed the challenge of maximising efficiency in the simple decimal-addressed machine code of those days. My boss and tutor, Pat Shackleton, was very pleased with my completed program. I then said timidly that I thought I had invented a sorting method that would usually run faster than SHELLSORT, without taking much extra store. He bet me sixpence that I had not. Although my method was very difficult to explain, he finally agreed that I had won my bet.***\



[**The quicksort was born!**](http://www.stoimen.com/2010/06/18/friday-algorithms-iterative-quicksort/ )


**qsWIK1.js, qsWIK3.js** - Test the quicksort pseudo code of [Lomuto partition scheme](https://en.wikipedia.org/wiki/Quicksort)\
**qsWIK2.js, qsWIK4.js** - Test the quicksort pseudo code of [Hoare partition scheme](https://en.wikipedia.org/wiki/Quicksort)\

### Non-mutative/Non-inplace implementations of Quick Sort :-

QuickSort is generally implemented as an in-place algorithm. This is how it is implemented in JavaScript as the **sort** routine.
What follows are implementations of Quick Sort which leave the original array intact i.e. ***Non - In - Place***

**sortMH1.js**
**sortMH2.js** - this version is a stable Quick Sort


### Non-recursive implementations of Quick Sort :-

**iterQuickSort.js** - Geeksforgeeks' implementation of the **Iterative** Quick Sort algorithm.
That is, QuickSort in truth, is a recursive algorithm.
However, here is an example of the algorithm being implemented without recursion.

### Stable versions of the Quick Sort :-
***A sorting algorithm is said to be stable if it maintains the relative order of records\
in the case of equality of keys.***

>This is Stoimen's implementation. 
>>**qsITER.js**
QuickSort's algorithm in truth, is not a stable algorithm.
The bonus of Stoimen's algorithm is that his version is **stable**

**qsITERSTABLE.js** - This is presented as proof that Stoimen's implementation of the **Iterative** Quick Sort algorithm\
is indeed a ***stable*** sorting routine.

**sort3.js** - This code uses the middle element as the pivot.
**sort3END.js** - This code uses the end element as the pivot.

**sort4.js** - Geeksforgeeks' implementation of the **Iterative** Quick Sort algorithm.

**sort6502.js** - "stabilise" an unstable sort using a decorate-sort-undecorate pattern\
the idea is to add the index as last sorting term so that no two elements are now "the same"\
and if everything else is the same the original index will be the discriminating factor.

**sortLior.js** - ES6 Stable Quick Sort

**sortQS.js sortQS2.js** - These are a suite of various versions of the Quick Sort
---

## Animations of Sorting Algorithms
Please see 

---

## Comparision of Sorting Algorithms - Pros and Cons

![image](https://user-images.githubusercontent.com/91061592/196385436-3c8c51b4-37b6-41f5-abae-faf79cbc5807.png)\
[Image Source](https://www.baeldung.com/cs/choose-sorting-algorithm)

![image](http://2.bp.blogspot.com/-eW0lPBAT5ig/VABDMToS2RI/AAAAAAAAC00/mwdyxDTrZU4/s1600/comparision_of_sorting_algorithms.png)\

![image](https://iq.opengenus.org/content/images/2020/12/Screenshot--610-.png)\
[Image Source](https://iq.opengenus.org/basic-sorting-algorithms-interview/)

---

## Time and Space Complexity of different Sorting Algorithms

![image](https://iq.opengenus.org/content/images/2020/12/Screenshot--609-.png)\
[Image Source](https://iq.opengenus.org/basic-sorting-algorithms-interview/)

![image](http://www-scf.usc.edu/~zhan468/public/Notes/resources/5F2F2130A480467D3A92AFA78F128E06.png)\
[Image Source](http://www-scf.usc.edu/~zhan468/public/Notes/sorting.html)

---

## References

* [YouTube - Visualization of Quick sort](https://www.youtube.com/watch?v=aXXWXz5rF64)
* [YouTube - Merge Sort vs Quick Sort](https://www.youtube.com/watch?v=es2T6KY45cA)
* [YouTube - Insertion Sort vs Bubble Sort + Some analysis](https://www.youtube.com/watch?v=TZRWRjq2CAg)
* [A visual representation of six of Insertion, Bubble, Selection, Merge, Quick and Shaker sorting algorithms](https://www.101computing.net/sorting-algorithms/)

* [Merge Sort - Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
* [Quick Sort - Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
* [Radix Sort - Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
* [Bucket Sort - Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)
* [Counting Sort - Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
* [Insertion Sort - Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
* [Bubble Sort - Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
* [Shellsort - Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
* [Bogosort - Wikipedia](https://en.wikipedia.org/wiki/Bogosort)

* [Comparison among Bubble Sort, Selection Sort and Insertion Sort](https://www.geeksforgeeks.org/comparison-among-bubble-sort-selection-sort-and-insertion-sort/)
* [Understand How Bubble Sort, Insertion Sort and Merge Sort Work with JavaScript](https://learntocodetogether.com/bubble-sort-insertion-sort-merge-sort-in-javascript/)
* [Sorting Algorithm and Animations](http://www-scf.usc.edu/~zhan468/public/Notes/sorting.html)
* [10 Best Sorting Algorithms You Must Know About](https://www.crio.do/blog/top-10-sorting-algorithms/)
* [The Complete Quick Sort Guide](https://www.crio.do/blog/quick-sort/)
* [Everything You Need To Know About Merge Sort](https://www.crio.do/blog/merge-sort-algorithm/)

## GeeksForGeeks Implementations
* [Merge Sort](https://www.geeksforgeeks.org/merge-sort/)
* [Quick Sort](https://www.geeksforgeeks.org/quick-sort/)
* [Radix Sort](https://www.geeksforgeeks.org/radix-sort/)
* [Bucket Sort](https://www.geeksforgeeks.org/bucket-sort-2/)
* [Counting Sort](https://www.geeksforgeeks.org/counting-sort/)
* [Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/)
* [Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
* [Shellsort](https://www.geeksforgeeks.org/shellsort/)
