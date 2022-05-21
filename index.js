function isPalindrome(word) { //Write a function that will calculate if the string reversed will be the same as the string in the correct order.
  //(test cases: 'ada', rotator, repaper)
  // Write your algorithm here
  let reversedWord = []
  const wordSplit = word.split('')
  for (let i = (wordSplit.length -1); i >= 0; i--){
    reversedWord.push(wordSplit[i])
  }
  console.log(reversedWord.join(''));
  if(reversedWord.join('') === word) {
    return true;
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  set input ta a variable 
  convert string to arr via calling split() calling the results a new variable
  run a for loop over the new variable and append it to a new array
  then join the new array to return a string
  then compare the two variables
  if true return true if false return false
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
