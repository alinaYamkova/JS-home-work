const countryName = prompt("Укажите страну");
const noDelivery = 'В вашей стране доставка не доступна';
const CHINA = 'Китай'; // 100 кредитов
const CHILI = 'Чили'; // 250 кредитов
const AUSTRALIA = 'Австралия'; // 170 кредитов
const INDIA = 'Индия'; // 80; редитов
const JAMAICA = 'Ямайка'; // 120 кредитов
let country;
let message;
let price = 0;

if (!countryName) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

  switch (country) {
    case CHINA:
      price = 100;
      console.log(price);
      break;
    
    case CHILI:
      price = 250;
      console.log(price);
      break;

    case AUSTRALIA:
      price = 170;
      console.log(price);
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      console.log(price);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
if (price > 0) {
  message = 'Доставка в ' + `${country}` + ' будет стоить ' + `${price}` + ' кредитов';
}
console.log(price);
