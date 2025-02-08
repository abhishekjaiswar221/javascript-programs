// Write a Program to reverse a string in JavaScript.

// Using forLoop:
function reverseString(str) {
  // Initialize an empty string to store the reversed string
  let newStr = "";

  // Loop through the input string from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the new string
    newStr = newStr + str[i];
  }

  // Return the reversed string
  return newStr;
}

console.log(reverseString("ReverseMe"));

// ----------------------------------------------------------------

// Using inbuilt methods:
function reverseStr(str) {
  // Split the string into an array of characters
  const newStr = str
    .split("")
    // Reverse the array of characters
    .reverse()
    // Join the reversed array back into a string
    .join("");

  // Log the reversed string to the console
  console.log(newStr);
}

reverseStr("ReverseKarna");
