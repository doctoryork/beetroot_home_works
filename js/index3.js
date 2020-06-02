// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100

const year = +prompt('Put the year')
if(year%400 === 0 || year%4 === 0 && year%100 !== 0){
  
  document.write('it is the leap year');
} else {
  document.write('it is not the Leap yera');
}