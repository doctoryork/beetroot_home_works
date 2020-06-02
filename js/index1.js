// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const userAge =  +prompt('How old are You?');

const message = ( userAge == 0 || userAge <= 2) ? 'kid': ( userAge >= 12 && userAge <= 17) ? 'teenager' : (userAge >= 18 && userAge <=60  ) ? 'adult': (userAge >= 61) ? 'Harry Oldman)': '';

alert(`You are ${message}!`);