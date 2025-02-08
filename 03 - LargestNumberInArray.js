// Find the largest number in an array in JavaScript.

// Using a For loop:
// The code defines a function findLargest that finds the largest number in an array. It starts by assuming the first element is the largest, then iterates through the array. If a larger number is found, it updates the largest value. Finally, it returns the largest number.

const findLargest = function (arr) {
  let largest = arr[0]; // Assume that the fist element in the array is the largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update the largest if a bigger element is found
    }
  }
  console.log(largest);
};

findLargest([10, 35, 788, 99, 104, 5]);

// Using the spread operator (...) or Math.max:
// The findLargest function uses Math.max() to find the largest number in an array. The spread operator (...arr) expands the array elements so Math.max() can evaluate each value. In the given code, it returns 98, the largest number from [23, 89, 67, 56, 98, 36].

const findLargestNumber = function findLargest(arr) {
  const largest = Math.max(...arr);
  console.log(largest);
};

findLargestNumber([23, 89, 67, 56, 98, 36]);
