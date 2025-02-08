// Write a Program to check whether a string is a palindrome string.

const checkPalindrome = (str) => {
  str = str.toLowerCase();
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  if (newStr === str) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkPalindrome("Madam");
