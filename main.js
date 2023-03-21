const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0,
    positiveCount = 0,
    negativeCount = 0,
    positiveArray = [],
    negativeArray = [];

for(let i = 0; i < array.length; i++) {
  if(array[i] >= 0) {
    positiveArray.push(array[i]);
    positiveCount++;
  }else{
    negativeArray.push(array[i]);
    negativeCount++;
  }
}

console.log(positiveArray);
console.log(negativeArray);

for (let i = 0; i < positiveArray.length; i++) {
  sum += positiveArray[i];  
}

console.log("Sum: " + sum);
console.log("Positiv: " + positiveCount);


// 2

// first var
let minimul = Math.min(...negativeArray);
let minIndex = negativeArray.indexOf(minimul); 
console.log(`minimum number is ${minimul} and his index is ${minIndex}`);

// second var
minimul = negativeArray[0];
minIndex = 0;
for(let i = 0; i < negativeArray.length; i++){
  if (negativeArray[i] < minimul) {
    minimul = negativeArray[i];
    minIndex = i;
  }
}

console.log(`minimum number is ${minimul} and his index is ${minIndex}`);

// 3

maximum = positiveArray[0];
maxIndex = 0;
for(let i = 0; i < positiveArray.length; i++){
  if (positiveArray[i] > maximum) {
    maximum = positiveArray[i];
    maxIndex = i;
  }
}
console.log(`maximum number is ${maximum} and his index is ${maxIndex}`);

// 4 узнал рание 

console.log(`Negative: ${negativeCount} or ${negativeArray.length}`);

// 5, 6, 7, 8

let ungepaart = 0,
    paart = 0,
    sumPaart = 0,
    sumUngepaart = 0;
for (let i = 0; i < positiveArray.length; i++) {
  if (positiveArray[i] % 2) {
    ungepaart++;
    sumUngepaart += positiveArray[i];
  }else{
    paart++;
    sumPaart += positiveArray[i];
  }
}
console.log(`Непарных позитивных элементов массива: ${ungepaart}, парных позитивных ${paart}`);
console.log(`Сумма парных позитивных элементов: ${sumPaart}, а сумма непарных позитивных элементов: ${sumUngepaart}`);

// 9 использую forOf для разнобразия)))

let multSum = 1;
for (positiveItem of positiveArray) {
  multSum *= positiveItem;
}
console.log(multSum);

// 10

let max = array[0];
for (maxItem of array) {
  if (maxItem > max) {
    max = maxItem;
  }
}

for(let i = 0; i < array.length; i++) {
  if(array[i] !== max) {
    array[i] = 0;
  }
}
console.log(`Максимальное число в массиве это ${max}`);
console.log(`Новый обнуленный массив: ${array}`);
