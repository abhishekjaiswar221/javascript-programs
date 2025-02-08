// Write a Program to find a sum of an array?

// The sumArray function takes an array arr as input and initializes a variable sum to 0. It loops through each element of the array, adding each element's value to sum. Finally, it returns the total sum.

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};

sumArray([1, 5, 8, 5, 7, 4, 0, 2]);
