// Declare a variable named challenge and assign it to an initial value '30DaysOfJavaScript'
let challenge = '30DaysOfJavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substring() method
console.log(challenge.substring(2)); // Output: 'DaysOfJavaScript'

// Slice out the phrase 'DaysOfJavaScript' from '30DaysOfJavaScript'
console.log(challenge.slice(2)); // Output: 'DaysOfJavaScript'

// Check if the string contains a word 'Script' using includes() method
console.log(challenge.includes('Script')); // Output: true

// Split the string into an array using split() method
console.log(challenge.split('')); // Output: ['3', '0', 'D', 'a', 'y', 's', 'O', 'f', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Split the string '30DaysOfJavaScript' at the space using split() method
console.log(challenge.split(' ')); // Output: ['30DaysOfJavaScript']

// 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' split the string at the comma and change it to an array
let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(companies.split(',')); // Output: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Change '30DaysOfJavaScript' to '30DaysOfNode' using replace() method
console.log(challenge.replace('JavaScript', 'Node')); // Output: '30DaysOfNode'

// What is the character at index 15 in '30DaysOfJavaScript' string? Use charAt() method
console.log(challenge.charAt(15)); // Output: 'S'

// What is the character code of 'J' in '30DaysOfJavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)); // Output: 74

// Use indexOf to determine the position of the first occurrence of 'a' in 30DaysOfJavaScript
console.log(challenge.indexOf('a')); // Output: 4

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 30DaysOfJavaScript
console.log(challenge.lastIndexOf('a')); // Output: 11

// Use indexOf to find the position of the first occurrence of the word 'because' in the given sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // Output: 31

// Use lastIndexOf to find the position of the last occurrence of the word 'because' in the given sentence
console.log(sentence.lastIndexOf('because')); // Output: 51

// Use search to find the position of the first occurrence of the word 'because' in the given sentence
console.log(sentence.search('because')); // Output: 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string
let stringWithWhitespace = '   30DaysOfJavaScript   ';
console.log(stringWithWhitespace.trim()); // Output: '30DaysOfJavaScript'

// Use startsWith() method with the string 30DaysOfJavaScript and make the result true
console.log(challenge.startsWith('30DaysOf')); // Output: true

// Use endsWith() method with the string 30DaysOfJavaScript and make the result true
console.log(challenge.endsWith('JavaScript')); // Output: true

// Use match() method to find all the 'a's in 30DaysOfJavaScript
console.log(challenge.match(/a/g)); // Output: ['a', 'a']

// Use concat() and merge '30DaysOf' and 'JavaScript' to a single string, '30DaysOfJavaScript'
console.log('30DaysOf'.concat('JavaScript')); // Output: '30DaysOfJavaScript'

// Use repeat() method to print 30DaysOfJavaScript 2 times
console.log(challenge.repeat(2)); // Output: '30DaysOfJavaScript30DaysOfJavaScript'