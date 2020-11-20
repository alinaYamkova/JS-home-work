// map
// Получи массив имен всех пользователей (свойство name) используя 
// деструктурирующее присваивание для параметра функции ({name}) без 
// пробелов и переносов на новую строку.
// Используй только перебирающие методы массива которые не изменяют 
// (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, 
// push и т.п. мутирующие методы.

const getUserNames = array =>array.map(({name}) => name); 
console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony"//*/

  ////////////////////////////////zad2/////////////////////////////////////////////////////
  // filter
  // Получи массив объектов пользователей, отобранный по цвету глаз
  //  (свойство eyeColor), используя деструктурирующее присваивание для 
  //  параметра функции ({eyeColor}) без пробелов и переносов на новую строку.
  // Используй только перебирающие методы массива которые не изменяют(не мутируют) 
  // исходный массив. Т.е. нельзя использовать for, splice, push и т.п.

  // Write code under this line
const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => 
eyeColor===color);
console.log(getUsersWithEyeColor(users, 'blue'));


////////////////////////////////////////////////////xad3///////////////////////
// filter, map
// Получи массив имен пользователей (значение свойства name) по полу (значение
// свойства gender).
// Используй деструктурирующее присваивание для параметра функции ({name})
// без пробелов и переносов на новую строку.

// Write code under this line
const getUsersWithGender = (array, gender) => array.filter(({gender:sex}) => 
sex === gender).map(({name}) => name);

 console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
