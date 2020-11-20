
////////////////////////////////ZADACHA@ 7////////////////////
function filterArray(array) {
  'use strict';
  const numbers = [];
  const args = new Array(array.length);

  for(let i = 0; i < array.length; i += 1) {
    if (Number.isFinite(array[i])) {
      numbers.push(array[i]); 
    } 
  }
  return numbers;
}
console.log(filterArray([-2, 0, 2])); // [-2, 0, 2]
console.log(filterArray([1, NaN, Infinity])); // [1]
console.log(filterArray([0, -0, 100, '100'])); // [0, 0, 100]
console.log(filterArray([undefined, false, null, [], 1])); // [1]
console.log(filterArray([{}, () => {}, 2])); // [2]



// 1//////////////////////////////ZADACHA@ 8///////////////////
function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line

  for (let i = 0; i < array.length; i++) {
    total += array[i]; 
  };  {
    (array[""]); 
  };
  return total; 
};
console.log(reduceArray([1, 2, 3])); // 6
console.log(reduceArray([-2, 0, 2])); // 0
console.log(reduceArray([1, 2, 2.5])); // 5.5



// 1//////////////////////////////ZADACHA@ 8///////////////////

function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
  let lengthOfLogin = login.length >= min && login.length <= max;
  return lengthOfLogin;
}

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
  let uniquePass = !allLogins.includes(login);
  return uniquePass;
}

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line 

  if (!isLoginValid(login)) {
    message = ERROR;
  } else if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  };
  return message;
};

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов' 