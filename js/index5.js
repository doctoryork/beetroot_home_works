// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const str = prompt('Put the number')
function checkForPolyndrome(str) {
  return console.log(str == str .split(''.reverse().join('')));
}

// специально для тебя Вань

// function lastestIsPalindrome(str) {
//   let len = Math.floor(str.length / 2);
//   for (let i = 0; i < len; i++)
//     if (str[i] !== str[str.length - i - 1])
//       return false;
//   return true;
// }