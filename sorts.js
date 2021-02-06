function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array);
                console.log(array);
            }
        }
    }
}

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) min = j;
        }
        swap(i, min, array);
        console.log(array);
    }
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let curr = array[i];
      for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = curr;
      console.log(array);
    }
  }



// bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
// selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

// Selection Sort is one of the easier sorting algorithm to understand and implement.
// This algorithm splits the array in two parts:
// Sorted
// Unsorted
// The Sorted part is at the beginning of the array and Unsorted part afterwards.
// Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element.At the end of the pass we swap smallest element to the sorted array.
// It has O(n2) time complexity.


// Insertion Sort assumes that array is divided in two parts:

// Sorted(Initially the first element)
// Unsorted

// Each pass, we select an element, and check it against the sorted array.
// If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to insert the selected element.
// Insertion sort in action - source 43
// Time comlexity of Insertion sort is of O(n2).
//     It’s a stable algorithm.

// Quick sort is an efficient sorting algorithm. It’s an in-place algorithm so it doesn’t take any auxilary space.
// First pick a random pivot point around which move all the smaller elements to it to the left of it and the bigger elements to the right of it.
// After getting the pivotIndex which is essentially the fixed position of that element, we find other pivotIndex by recusirvely calling this function.
// Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point, so that way it’s big O is O(nlogn).
// It’s space complexity is O(logn).
// It’s an unstable algorithm.

// Merge Sort is a classic divide and conquer problem.
// The following steps are involved:

//     Divide: We break the array from the middle using recusion until we’re left with 1 element.
//     Conquer: Then we sort these small arrays.
//     Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.

// Time complexity of Merge Sort is O(nlogn).
// Space complexity of Merge Sort is O(n).
// It’s a stable algorithm.
