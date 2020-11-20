/////////////ZADACHA@1////////////

const getItemsString = function(array) {
  'use strict';

  let result='';
  for (let i = 0; i < array.length; i += 1) {
    result += `${i+1} - ${array[i]};
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay']));


/////////////ZADACHA@2///////////////////////////////////////////////////

const calculateEngravingPrice = (message ="", pricePerWord = 0) => {
  message.split(" ").length * pricePerWord;
  return result;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120