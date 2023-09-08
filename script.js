function firstNonRepeatedChar(inputStr) {
  // Create an object to store character frequencies
  const charFrequency = {};

  // Count the frequency of each character in the input string
  for (let char of inputStr) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the input string to find the first non-repeated character
  for (let char of inputStr) {
    if (charFrequency[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc')); // Output: null

