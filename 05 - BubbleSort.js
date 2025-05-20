const sort = () => {
  let arr = [2, 56, 89, 43, 23, 76, 2, 67];
  bubbleSort(arr);
  console.log(arr);
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let sorted = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        swapElements(arr, j, j - 1);
        sorted = true;
      }
    }

    if (!sorted) {
      break;
    }
  }
};

const swapElements = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

sort();
