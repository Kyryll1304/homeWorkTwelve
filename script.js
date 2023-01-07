//Task one
const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let arrFiltered = [];

let sum = 0;

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log(sum);

//Task 1.5

for (let i = 0; i < arr.length; ++i) {
  if (arr[i] > 0) {
    arrFiltered.push(arr[i]);
  }
}
console.log(arrFiltered.length);

//Task two

const smallest = (element) => element === Math.min(...arr);

console.log(arr.findIndex(smallest));

//Task three
const largest = (element) => element === Math.max(...arr);

console.log(arr.findIndex(largest));
//Task 4
let arrMin = [];
for (let i = 0; i < arr.length; ++i) {
  if (arr[i] < 0) {
    arrMin.push(arr[i]);
  }
}
console.log(arrMin.length);
//Task 5

let arrEven = [];
for (let i = 0; i < arr.length; ++i) {
  if (arr[i] < 0) {
    continue;
  } else if (arr[i] % 2 != 0) {
    arrEven.push(arr[i]);
  }
}
console.log(arrEven);

//Task 6

let arrOdd = [];
for (let i = 0; i < arr.length; ++i) {
  if (arr[i] < 0) {
    continue;
  } else if (arr[i] % -2 == 0) {
    arrOdd.push(arr[i]);
  }
}
console.log(arrOdd);

//Task seven
sum = 0;

for (let i = 0; i < arrOdd.length; ++i) {
  if (arrOdd[i] > 0) {
    sum += arrOdd[i];
  }
}
console.log(sum);
//Task eight
sum = 0;

for (let i = 0; i < arrEven.length; ++i) {
  if (arrEven[i] > 0) {
    sum += arrEven[i];
  }
}
console.log(sum);
//Task nine
const mult = arrFiltered.reduce((prevValue, curValue) => {
  return prevValue * curValue;
}, 1);
console.log(mult);

//Task ten

let val = Math.max(...arr);

let numTwo = arrFiltered.filter((element) => element >= val);
console.log(numTwo);
