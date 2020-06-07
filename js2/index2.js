// Запросить 2 числа и найти только наибольший общий делитель.

let a = +prompt('Put the first number');
let b = +prompt('Put the second num');
const res = (a, b) => {
  if(!b) {
    return a;
  }

  return res(b, a%b)
};
alert(`The bigest devider is ${res(b, a%b)}`)