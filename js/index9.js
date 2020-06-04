// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов
// Введите правильный ответ
// Столица Мадагаскара
//Варианты ответа
// а:Вольнянск
// b:мадага-сити
// c:Антанариву

const question = alert('Введите правильный ответ');
const question1 = prompt('Столица Мадагаскара a:Вольнянск, b:мадага-сити, c:Антанаnaриву');

let a1 = question1;
let points;

switch(a1) {
  case 'a':
      points = 0;
      break;
  case 'b':
      points = 0;
      break;
  case 'c':
      points = 2;

    break;

    default:
    alert('Thanx next')
    
}


const question2 = prompt('Где находиться Мадагаскар a: возле Вольнянска, b: далеко от мадага-сити, c:где-то рядом с Антанаnaриву');

let a2 = question2;
let points2;

switch(a2) {
  case 'a':
      points2 = 0;
      break;
  case 'b':
      points2 = 2;
      break;
  case 'c':
      points2 = 0;

    break;

    default:
    alert('Thanx next')
    
}

const question3 = prompt('Как далше жить a:Жить не тужить, b:Улыбаясь, c:В вечной борьбе');

let a3 = question3;
let points3;

switch(a3) {
  case 'a':
      points3 = 2;
      break;
  case 'b':
      points3 = 2;
      break;
  case 'c':
      points3 = 2;

    break;

    default:
    alert('Thanx next')
    
}
const result = points + points2 + points3;

alert(`Thank you you have ${result} points !`)


