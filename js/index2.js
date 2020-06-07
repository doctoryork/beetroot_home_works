// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

const num = +prompt('Enter the threedigit number : ');

let num1 = parseInt(num / 100);
let num2 = parseInt(num / 10) % 10;
let num3 = num % 10;

if(num1 === num2 || num2 === num3 || num1 === num3) { 
  alert('You have the same two digits')
} else {
  alert('No equeal numbers')
}



