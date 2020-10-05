/////////////ZADACHA@3////////////

function findLongestWord (string = "") {
  const words = string.split(" ");
  
  let longestWord = words[0];
  
  for (let i = 1; i < words.length; i ++) {   //   
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  };
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");



/////////////ZADACHA@4////////////

function formatString(string, maxLength = 40) {
  //const result = string.length <= maxLength ? string : string.slice(0, maxLength) + "...";
    let result;
    if (string.length <= maxLength) {
      result = string;
    } else if (string.length > maxLength) {
      result = string.slice(0, maxLength) + '...';
    };   
    return result;
  };
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'