// Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let num = prompt("Напиши пятирозрядне число");
if(num.length === 5 && !isNaN(num)) {
  let reversedNum = num.split('').reverse().join('');

  if(num === reversedNum){
    alert(`${num} є паліндромом`)
  }else{
    alert(`${num} не є паліндромом`)
  }
}else {
    alert("Будь ласка, введіть правильне п'ятирозрядне число.");
}


// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumOfShopping = parseFloat(prompt ("Яка суму покупки?"), 10);
if (!isNaN(sumOfShopping) && sumOfShopping > 0){
  let discount = 0;

  if (sumOfShopping >= 200 && sumOfShopping < 300) {
    discount = 0.03;  
  }else if (sumOfShopping >= 300 && sumOfShopping < 500) {
    discount = 0.05;
  }else if (sumOfShopping >= 500) {
    discount = 0.07;
  }
  let discountAmount = sumOfShopping * discount;
  let finalAmount = sumOfShopping - discountAmount;
  alert(`Суму покупки: ${sumOfShopping.toFixed(2)}грн. Сума знижки: ${discountAmount.toFixed(2)}. Сума до оплати: ${finalAmount.toFixed(2)}`);
} else{
  alert("Будь ласка, введіть коректну суму покупки.");
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for(let i = 0; i < 10; i++) {
  let input = parseFloat(prompt(`Напиши число №${i + 1}:`));
  if(num > 0){
    positiveCount++;
  }else if(num < 0){
    negativeCount++;
  }else{
    zeroCount++;
  }
  // Підрахунок парних і непарних чисел
  if(num % 2 === 0 && num !== 0){
    evenCount++;
  }else{
    oddCount++;
  }
}







// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.