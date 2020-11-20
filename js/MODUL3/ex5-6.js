function getAllPropValues (array, prop) {
  'use strict';
  // Write code under this line 
  const mass = [];

  for (const product of array) {
    if (product[prop] !== undefined) {
      mass.push(product[prop]);
    }
  }; return mass;
};
// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 }, ]; 
// console.log(getAllPropValues(products, 'name'));// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 2, 1, 1, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); //  []


///////////////////////////////ZADSCHA 6////////////////////////////////////////////////
function calculateTotalPrice (array, prop) {
  'use strict';
  // Write code under this line 
  let result = 0;
  for (const item of array) {
    if (item.name === prop) {
      result += item.price * item.quantity;
    }
  };
  return result;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 } ]; 
console.log(calculateTotalPrice(products, 'Радар')); // 9080
console.log(calculateTotalPrice(products, 'Сканер')); // 10200
console.log(calculateTotalPrice(products, 'Захват')); // 2400
console.log(calculateTotalPrice(products, 'Дроид')); // 2800


///////////////////////////////fgh////////////////////////////////////////////////

// const syntax = "jhb jbk ,uhk iuhi uhb bjhk!";
// const mass = {};
//  for (const letter of syntax.toLowerCase()) {
//    if (" ,./#!".includes(letter)) {
//      continue;
//    } else if (letter in mass) {
//      mass[letter] = mass[letter]+1;
//    } else mass[letter] = 1;
//   };
// console.log(mass);