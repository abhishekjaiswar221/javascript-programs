// Function to check if a given string is a palindrome

// Using forLoop:
const checkPalindrome = (str) => {
  // Convert the string to lowercase to make the check case-insensitive
  str = str.toLowerCase();

  // Initialize an empty string to store the reversed string
  let newStr = "";

  // Loop through the original string from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the new string
    newStr = newStr + str[i];
  }

  // Check if the reversed string is equal to the original string
  if (newStr === str) {
    // If they are equal, it is a palindrome, so log true
    console.log(true);
  } else {
    // If they are not equal, it is not a palindrome, so log false
    console.log(false);
  }
};

checkPalindrome("Madam");

// ----------------------------------------------------------------------

// Define a function named 'palindrome' that takes a single argument 'str'
palindrome = (str) => {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  const newStr = str.split("").reverse().join("");

  // Print the reversed string to the console
  if (str === newStr) {
    // If they are equal, it is a palindrome, so log true
    console.log(true);
  } else {
    // If they are not equal, it is not a palindrome, so log false
    console.log(false);
  }
};

palindrome("MadamJi");
