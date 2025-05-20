// Remove Duplicate
const removeDuplicate = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr.join(""));
};

// // const arrays = [
// //   [1, 3, 2, 4, 3, 5, 6, 7, 8, 6, 7, 9],
// //   [2, 3, 1, 4, 5, 6, 3, 4, 7, 8, 6, 9],
// // ];

const arrays = ["Soonalli", "Abbhisshek"];

for (let i = 0; i < arrays.length; i++) {
  removeDuplicate(arrays[i]);
}

// Remove Duplicate 2
const removeDuplicate2 = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
};

removeDuplicate2([1, 3, 2, 4, 5, 6, 7, 5, 3, 2, 5]);
