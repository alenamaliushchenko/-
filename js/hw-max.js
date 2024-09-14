// Максимум
// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

function guessNumber() {
  let low = 0;
  let high = 100;
  let guess;
  
  alert ('Загадай число від 0 до 100, а я його вгадаю');

  while (low <= high){
    guess = Math.floor((low + high) / 2);

    let response = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess} ? введіть ">", "<" або "=="`);
    if (response === "=="){
      alert (`Ура я вгадав. Твоє число ${guess}.`);
      break;
    } else if (response === ">") {
      low = guess + 1;
    } else if (response === "<") {
      high = guess - 1;
  } else {
    alert("Будь ласка, введіть тільки '>', '<' або '=='.");
  }
}
}


// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
for(let i = 0; i <= 9; i ++){
  for(j = 1; j <= 10; j ++){
    let multiplication =  i * j;
    console.log(`При i = ${i} та j = ${j} ми отримуємо ${multiplication}`);
  }
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let currentDate = prompt('Напиши дату? (введіть у форматі dd.mm.yyyy)', '11.11.2022');
if (currentDate) {
  let dateParts = currentDate.split('.');
  let day = parseInt(dateParts[0], 10);
  let month = parseInt(dateParts[1], 10) - 1; // Місяці починаються з 0 в JavaScript;
  let year = parseInt(dateParts[2], 10);
  var date = new Date(year, month, day);

  date.setDate(date.getDate() + 1);
  day = date.getDate().toString().padStart(2, 0);
  month = (date.getMonth() + 1).toString().padStart(2, 0);
  year = date.getFullYear();

  alert(`${day}.${month}.${year}`);
}
