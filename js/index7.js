// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

const userBought = prompt('The amount you have spent: $')

let discount;
if (userBought >= 200 && userBought < 300){
 discount = 0.03;
} else if (userBought >= 300 && userBought < 500){
 discount = 0.05;
} else {
 discount = 0.07;
}

alert(`your amount is ${Number(userBought * discount) + Number(userBought)}`)