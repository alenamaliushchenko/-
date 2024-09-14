// Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let question = prompt("Напиши свій вік?");
if(question >= 0 && question <= 11){
  alert('Ти дитина');
}else if(question >= 12 && question <= 17){
  alert('Ти підліток');
}if(question >= 18 && question <= 59){
  alert('Ти дорослий');
}if(question >= 60){
  alert('Ти пенсіонер');
}


// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let number = prompt("Напиши число від 0 до 9 і виведи йому спецсимвол");
if(number >= 0 && number <= 9) {
  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  alert(`Спеціальний символ для ${number} - це: ${symbols[number]}`);
}else{ alert("Будь ласка, введіть число від 0 до 9.");
}


// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let start = parseInt(prompt("ВВедіть початкове число"));
let end = parseInt(prompt("Введіть кінцеве число"));

if( !isNaN(start) && !isNaN(end) && start <= end){
  let sum = 0;
for(let i = start; i <= end; i ++){
  sum += i;
}
alert("Сума всіх чисел від ${start} до ${end} дорівнює: ${sum}")
} else{
  alert ("Будь ласка, введіть коректні числа та переконайтеся, що початкове число менше або дорівнює кінцевому.");
}

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let num1 = parseInt(prompt("Напиши 1 числo"));
let num2 = parseInt(prompt("Напиши 2 числo"));

// function greatestCommonDivisor(a,b){

// }
if(!isNaN(num1) && !isNaN(num2) && num1 > 0 && num2 > 0){
  let a = num1;
  let b = num2;

  while (b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }

alert(`Найбільший спільний дільник чисел ${num1} і ${num2} дорівнює: ${a}`);
} else {
  alert("Будь ласка, введіть коректні додатні числа.");
}

// 5. Запитай у користувача число і виведи всі дільники цього числа.

let num = parseInt(prompt("Введіть число:", ""), 10);
if(!isNaN(num) && num > 0 ){
  let divisors = [];

for (let i = 0; i <= num; i ++) {
  if (num % i === 0){
divisors.push(i);
  }
} alert(`Дільники числа ${num}: ${divisors.join(', ')}`);
}else{
  alert("Будь ласка, введіть коректне додатнє число.");
}
