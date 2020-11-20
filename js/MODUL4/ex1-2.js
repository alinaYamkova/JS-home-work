// Callback функция
// Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, 
// а вторым параметром cb - функцию обратного вызова (callback). 
// Функция mapArray создает новый массив numbers и заполняет его 
// числами из массива array преобразованными функцией cb.
// 1)Оформи создание массива numbers нужной длины используя new Array()
//   и необходимый аргумент для задания длины, равной длине array.
// 2)Напиши функцию обратного вызова addIndex , которая принимает 
//   два параметра - element и index и возвращает число - сумму 
//   element и index (сложение).
// 3)Напиши функцию обратного вызова subIndex , которая принимает 
//   два параметра - element и index и возвращает число - разность 
//   element и index (вычитание).

// Write code under this line
const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;
  
function mapArray(array, cb) {
  'use strict';
// Write code under this line
  const numbers = new Array(array.length);
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];     //1.2.3.4.5
    // console.log(element);
    const index = i;             //0.1.2.3.4
    // console.log(index);
    numbers[i] = cb(element, index);   //1+=
    // console.log(numbers);
  }
  return numbers;
}
const arr = [1,2,3,4,5];
console.log(mapArray(arr, addIndex)); // [1, 3, 5, 7, 9]
console.log(mapArray(arr, subIndex)); // [1, 1, 1, 1, 1]

/////////////////////////////////ZADACHA2/////////////////////////////////////
// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr. 
// Функция возвращает true или false в зависимости от того 
// встречается ли элемент первый раз в массиве (true) или этот элемент 
// в массиве уже встречался (false) .
// Функция isEven принимает один параметр - element. 
// Функция возвращает true или false в зависимости от того является ли 
// элемент четным числом или нет.
// Функция filterArray(array, cb), принимает 1-м параметром array - 
// массив чисел, а вторым параметром cb - функцию обратного вызова (callback).
// 1)Дополни тело функции так, чтобы функция filterArray заполняла 
//   новый пустой массив numbers только теми элементами из массива array, 
//   для которых вызов функции cb вернет true.

const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  'use strict';
  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    // console.log(index);

    // Write code under this line
    if (cb(element, index, array)) {
      numbers.push(array[i]);
    // console.log(array[i]);
    };
  }
  return numbers;
// }
// const arr  = [1,2,3,4,5,1,2,5];
// console.log(filterArray(arr, isUniq)); // [1, 2, 3, 4, 5]
// console.log(filterArray(arr, isEven)); // [2, 4, 2]






///////////////////////////////////////////////////////
'use strict';
class User {
  constructor(a = "user", b, c = "", d) {
    this.name = a;
    this.emeil = b;
    this.phone = c;
    this.password = d;
  }


  toShowName () {
    return this.name;
  }
}

class SupUser extends User {
  constructor(phone, password, nickNsme, confirm){
    super(phone, password)
    this.nickNsme = nickNsme;
    this.confirm = confirm;
  }

}

const mySupUser = new SupUser("111", "hgh", "nick", true)
console.log(mySupUser)

console.log(mySupUser.toShowName);


