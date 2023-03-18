let lineOfNumber = '';
let correctNumber = 0;
// 1
for (let i = 10; i <= 20; i++) {
    lineOfNumber += i + ', ';
}

console.log(lineOfNumber);

// 2
lineOfNumber = '';
for (let i = 10; i <= 20; i++) {
    lineOfNumber += i * i + ', ';
}

console.log(lineOfNumber);

// 3
let item = 1;
for (let i = 15; i <= 35; i++) {
    item *= i;
}
console.log(item);

// 4
//var1
correctNumber = 0;
for (let i = 1; i <= 500; i++) {
    correctNumber += i;
}
console.log(correctNumber/500);

// var2
correctNumber = 0;
let arrayNumbers = [];
for (let i = 1; i <= 500; i++) {
    correctNumber += i;
    arrayNumbers.push(i);
}
console.log(correctNumber/arrayNumbers.length);

// 5
correctNumber = 0;
for (let i = 30; i <= 80; i++) {
    if (Number.isInteger(i/2)) {
        correctNumber += i;
    }
}
console.log(correctNumber);

// 6
lineOfNumber = '';
for (let i = 100; i <= 200; i++) {
    if (Number.isInteger(i/3)) {
        lineOfNumber += i + ', ';
    }
}
console.log(lineOfNumber);

// 7 - не уверен в том что я правильно понял задание

let someNumber = Math.floor(Math.random() * (100 - 1)) + 1; // генерируем рандомное число от 2 до 100 для проверки
console.log(someNumber);
let isPrime = true;

if (someNumber < 2) {
  isPrime = false;
}

for (let i = 2; i < someNumber; i++) {
  if (someNumber % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${someNumber} простое число`);
} else {
  console.log(`${someNumber} не является простым числом`);
}