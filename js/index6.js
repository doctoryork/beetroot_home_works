// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующ


let input;  
const currency = prompt('Choose the currency you want to convert USD');
const amount = +prompt('Put the amount $');


if(input == 'eur') {
console.log(Math.floor(amount * 1.1));
} else if (input == 'uan'){
console.log(Math.floor(amount * 1.3));
} else if (input == 'azn'){
  console.log(Math.floor(amount * 1.3));
} else {
console.log('no monney no love');
}