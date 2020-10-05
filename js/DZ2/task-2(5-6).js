//const instancesOfN = ( string, letter ) => string.split(letter).length-1 || 'sorry no matches found';


////////////////////////////////ZADACHA@ 5////////////////////
function checkForSpam (str) { 
  'use strict';
  let message = "";

  if (str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale")) {
    message = true;
  } else {
    message = false;   
  }; 
  return message; 
};
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


////////////////////////////////ZADACHA@ 6////////////////////
function mapArray(array) {
  'use strict';
  const numbers = new Array(array.length);
  for(let i = 0; i < array.length; i += 1) {
    numbers[i] = (array[i] * 10);   
  }
  return numbers;
}
console.log(mapArray([-2, 0, 2])); // [-20, 0, 20]
console.log(mapArray([-2.5, 0, 2.5])); // [-25, 0, 25]