const credits = 23580;
const pricePerDroid = 3000;
let orderPieces = prompt('количество предметов добавлено в корзину');
orderPieces = Number(orderPieces);
let totalPrice = pricePerDroid * orderPieces; 
const balance = credits - totalPrice;
// let numberofDrons;

if (!orderPieces) {
  console.log('Отменено пользователем!'); 
} else if (credits >= totalPrice) {
  console.log(balance);
  console.log('Вы купили ' + `${orderPieces}` + ' дроидов, на счету осталось ' + `${balance}` + ' кредитов.');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
}
