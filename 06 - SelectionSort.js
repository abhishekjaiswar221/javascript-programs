// Find out the last index in the array
// Find out the index of maximum element in the array
// Then swap the value of last index and the value of maximum index

// Selection sort: We select the last index and the index of the max number then swap them that why it's selection sort

const sort = () => {
  let arr = [1, 6, 3, 8, 3, 9, 2, 7];
  selectionSort(arr);
  console.log(arr);
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const last = arr.length - i - 1;

    let max = maxIndex(arr, 0, last);

    swapElements(arr, max, last);
  }
};

const maxIndex = (arr, start, last) => {
  let max = start;
  for (let i = start; i <= last; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return max;
};

const swapElements = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

sort();
