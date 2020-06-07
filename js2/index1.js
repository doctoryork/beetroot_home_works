// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let d1 = +prompt('Put the first number');
let d2 = +prompt('Put the second num');
let res;

for(let i = d1; i <= d2; i++) {
  res = d1 + d1++;
}
console.log(Number(res));