///////////////////////////////////////ZAD3/////////////////////////////////////////
// использование методов класса
// Напиши класс Storage, который будет создавать объекты 
// для управления складом товаров. При вызове будет
// получать один аргумент - начальный массив товаров, 
// и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

 // Write code under this line
class Storage {
  constructor (items) {
   this.items = items;
  };

  getItems() {
    return this.items;
  };

  addItem(item) {
    this.items.push(item)
  };

  removeItem(item) {
    // this.items.splice(this.items.indexOf(item),1)
    if (this.items.includes(item)) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  };
}

console.log(typeof Storage); // 'function'
const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
 const storage = new Storage(goods);
 console.log(storage.getItems()); //* ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'] */
 storage.addItem('Дроид');
 console.log(storage.getItems()); //* ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор', 'Дроид'] */
 storage.removeItem('Пролонгер');
 console.log(storage.getItems()); //* ['Нанитоиды', 'Железные жупи', 'Антигравитатор','Дроид'] *//


 /////////////////////////////////////////ZAD4////////////////////////////////////////
//  переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, 
// которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str)-получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

 // Write code under this line
 class StringBuilder {
  constructor (string) {
    this._value = string;
  };
  get value() {
    return this._value;
  };
  append(str) {
    this._value += str;
  };
  prepend(str) {
    this._value = str + this._value;
  };
  pad(str) {
    this.append(str);
    this.prepend(str);
  };
 }  

 console.log(typeof StringBuilder); // 'function'

 const builder = new StringBuilder('.');
 builder.append('^'); 
 console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

 builder.pad('=');
 console.log(builder.value); // '=^.^='
