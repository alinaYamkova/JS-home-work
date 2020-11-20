////////////////////ZADACHA3//////////////////////////////////////////////////
// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element, 
// возвращает число - сумму, разность или произведение параметров.
// 1)Дополни тело функции reduceArray строкой присвоения accum вызова 
//   функции cb. Функция reduceArray должна будет подсчитать сумму или 
//   разность или произведение всех элементов массива в зависимости от того 
//   какая именно из трех функция (add, mult, sub) будет передана в качестве cb.

// const add = (accum, element) => accum + element;  // 10 + 0
// const mult = (accum, element) => accum * element; //1 * 
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;             //10
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];             //1
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];      // 1. 2. 3. 4. 5
//     // Write code under this line
//     accum = cb(accum, element);
//   }
//   return accum;
// }
// const arr  = [1,2,3,4,5];
// console.log(reduceArray(arr, add)); // 15    (5 + 10 +0 )
// console.log(reduceArray(arr, add, 10)); // 25  (5 * 1 + 10)?
// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200
// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

//////////////////////////////ZADACHA4//////////////////////////////////////////
// this в методах объекта
// 1) Расставь отсутствующие this в методах объекта account.
// В комментариях показаны операции с объектом и ожидаемые результаты.

const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value; // Write code in this line
  },
  showOrders() {
    return this.orders; // Write code in this line
  },
  addOrder(cost, order) {
    this.balance -= cost; // Write code in this line
    this.orders.push(order); // Write code in this line
  },
};
const copyAccount =  Object.assign({},account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы


account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders()); 
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000

console.log(account.showOrders());
 //['order-1', 'order-2', 'order-3', 'order-4']   