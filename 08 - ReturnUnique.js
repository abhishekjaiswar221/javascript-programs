// Return Unique
const returnUnique = () => {
  let str = "programming";
  let uniqueStr = [];
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    let isDuplicate = false;
    for (let j = 0; j < uniqueStr.length; j++) {
      if (str[i] === uniqueStr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueStr.push(str[i]);
    }
  }
  console.log(uniqueStr.join(""));
};

returnUnique();

// Return First Unique Char
const firstNonRepeatingChar = () => {
  let str = "programming";
  let charCount = {};

  // Count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with frequency 1
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      console.log(str[i]); // Output the first non-repeating character
      return str[i];
    }
  }

  console.log("No unique character found.");
  return null; // If all characters are repeated
};

firstNonRepeatingChar();
