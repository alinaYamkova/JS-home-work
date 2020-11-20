// function-constructor////////////////////////////////////////////////
// Напиши функцию-конструктор Account, которая создает объект 
// со свойствами login и email.
// В prototype функции-конструктора добавь метод getInfo(), 
// который возвращает строку со значениями свойств login и email объекта.

// Write code under this line
const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  return `login : ${this.login}, email: ${this.email}`;
}

const myAccount = new Account("qweqwe", "ddd@ddd");
myAccount.getInfo();

console.log(myAccount.getInfo());
///////////////////////////////////////////////////////////
console.log(typeof Account.prototype.getInfo); // 'function'

const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());  // 'login : Mangozedog, email: mango@dog.woof'
const poly = new Account( 'Poly', 'poly@mail.com');
console.log(poly.getInfo()); // 'login : Poly, email: poly@mail.com'

//////////////////////////////////////ZADACHA 2///////////////////////////////////
// class
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: 
// User ${имя} is ${возраст} years old 
// and has ${кол-во фоловеров} followers

 // Write code under this line
 const User = function(name, age, followers) {
  this.name = name;
  this.age = age;
  this.followers = followers; 
};

User.prototype.getInfo = function() {
  return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
}

const myUser = new User("Vasya", 30, 222);
console.log(myUser.getInfo());  

console.log(typeof User); // 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo()); // 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo); // 'function'  

const poly = new User( 'Poly', 3, 17);
console.log(poly.getInfo()); // 'User Poly is 3 years old and has 17 followers' 