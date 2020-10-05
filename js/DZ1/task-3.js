const message = prompt('Введите пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (!message) {
  console.log('Отменено пользователем!');
} else if (ADMIN_PASSWORD === message) {
  console.log ('Добро пожаловать!');
} else {
  console.log ('Доступ запрещен, неверный пароль!');
}
alert(message);