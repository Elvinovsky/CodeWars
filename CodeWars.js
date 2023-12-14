// let numbers = [2, 1, 4, 3];
//
// function removeSmallest(numbers) {
//   let numberc = [...numbers];
//   let i = numberc.indexOf(Math.min.apply(null, numberc));
//   if (i >= 0) {
//     numberc.splice(i, 1);
//   }
//   return numberc;
// }
//
// console.log(removeSmallest(numbers));
// console.log(numbers);
//
// const db = {
//   allBlogs: [
//     {
//       id: '1',
//       name: 'IT',
//       description: 'разработка на JS',
//       websiteUrl:
//         'https://samurai.it-incubator.io/pc/video-content/watch/624db7c56667275d6a2cb2ef',
//     },
//   ],
//   allPosts: [
//     {
//       id: '1',
//       title: 'Swagger',
//       shortDescription: 'сборка АПИ согласно документации.',
//       content: 'Предисловие',
//       blogId: '1',
//       blogName: 'IT',
//     },
//   ],
// };
//
// validationInputBlogId = db.allBlogs.find((el) => el.name === '1');
// console.log(validationInputBlogId);
// const r = 1;
// if (!r) {
//   return console.log('kjo');
// }
//
// const classPoints = [29, 55, 74, 60, 11, 90, 67, 28];
// const yourPoints = 21;
// const a = classPoints.reduce((a, b) => {
//   return a + b;
// });
// const b = a / classPoints.length;
// console.log(b);
// console.log(classPoints.length);
// function betterThanAverage(classPoints, yourPoints) {
//   const a = classPoints.reduce((a, b) => {
//     return (a + b) / classPoints.length;
//   });
//   if (a < yourPoints) {
//     console.log(true);
//     return;
//   } else {
//     console.log(false);
//     return;
//   }
// }
//
// classPoints.map;
//
// let students = [
//   {
//     name: 'Bob', // ["Bob",]
//     age: 22,
//     isMarried: true,
//     scores: 85,
//   },
//   {
//     name: 'Alex', // ["Bob", "Alex]
//     age: 21,
//     isMarried: true,
//     scores: 89,
//   },
//   {
//     name: 'Nick', // ["Bob", "Alex", "Nick"]
//     age: 20,
//     isMarried: false,
//     scores: 120,
//   },
//   {
//     name: 'John', //["Bob", "Alex", "Nick", "John"]
//     age: 19,
//     isMarried: false,
//     scores: 100,
//   },
// ];
//
// const sPush = (array, element) => {
//   return (array = [...array, element]);
// };
// const a = {
//   name: 'John', //["Bob", "Alex", "Nick", "John"]
//   age: 19,
//   isMarried: false,
//   scores: 100,
// };
// console.log(sPush(students, a));
//
// ('use strict');
// const a = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
//
// function flattenAndSort(array) {
//   const arr = array.concat.apply([], array);
//   return arr.map((min, max) => {
//     return min > max ? (min, max) : (max, min);
//   });
// }
// console.log(flattenAndSort(a));
//
// function getDivisorsCnt(n) {
//   let countDivisors = 0;
//   for (let i = n; i > 0; i--) {
//     if (n % i == 0) {
//       countDivisors++;
//     }
//   }
//
//   return countDivisors;
// }
//
// console.log(getDivisorsCnt(11));
//
// let principal = 567;
// let interest = 0.08;
// let tax = 0.018;
// let desired = 1890;
//
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   let incomeForYear = principal * interest;
//   let netIncome = incomeForYear - incomeForYear * tax;
//   for (principal; principal <= desired; netIncome) {
//     years++;
//   }
//   return console.log(years);
// }
//
// console.log(2 + 2);
// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is non-digits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
//
// function XO(str) {
//   const x = str.replace(/^%|&|!|@|6463|#|\d+$/gi, ' ').split(' ');
//   return x;
// }
// console.log(XO(' Slow moving user6463 has been here '));
//
// const excluded = ['a', 'the', 'on', 'at', 'of', 'upon', 'in', 'as'];
// console.log(excluded.includes('on'));
//
// let arr = ['THE EYES', 'they see'];
// function letterCheck(arr) {
//   const first = arr[0];
//   const second = arr[1];
//   console.log(second);
//   let count = 0;
//   for (var i = 0; i < second.length; i++) {
//     if (first.includes(second[i])) {
//       count++;
//     }
//   }
//
//   return count === second.length;
// }
// console.log(letterCheck(arr));
//
// function mathCount(num) {
//   let result = 0;
//   let i = 0;
//   while (num > 0) {
//     if (num % 2 == 1) {
//       num = num * 3 + 1;
//     }
//     if (num % 2 == 0) {
//       num = num / 2;
//     }
//     i++;
//     if (i === 1234562346) {
//       return { i, num };
//     }
//   }
//   return { i, num };
// }
// console.log(mathCount(145));
//
// var nato = (function () {
//   var letters = {
//     A: 'Alpha',
//     B: 'Bravo',
//     C: 'Charlie',
//     D: 'Delta',
//     E: 'Echo',
//     F: 'Foxtrot',
//     G: 'Golf',
//     H: 'Hotel',
//     I: 'India',
//     J: 'Juliett',
//     K: 'Kilo',
//     L: 'Lima',
//     M: 'Mike',
//     N: 'November',
//     O: 'Oscar',
//     P: 'Papa',
//     Q: 'Quebec',
//     R: 'Romeo',
//     S: 'Sierra',
//     T: 'Tango',
//     U: 'Uniform',
//     V: 'Victor',
//     W: 'Whiskey',
//     X: 'X-ray',
//     Y: 'Yankee',
//     Z: 'Zulu',
//   };
//
//   return function (word) {
//     const arrChar = word.split('');
//     let stringOut = '';
//     for (var i = 0; i < arrChar.length; i++) {
//       stringOut += letters[arrChar[i].toUpperCase()] + ' ';
//     }
//     return console.log(stringOut);
//   };
// })();
//
// nato('ertyu');
//
// const arrNames = ['Andrey', 'Kiril', 'Magomed', 'Alim', 'Amir'];
//
// const arrUsers = arrNames.map((n) => {
//   return {
//     name: n,
//     age: 18,
//   };
// });
// console.log(arrUsers);
//
// const updatedUsers = arrUsers.forEach((el) => {
//   if (el.name === 'Alim') {
//     el.age = 19;
//   }
// });
//
// console.log(updatedUsers);
//
// let tree = {
//   value: 1,
//   children: [
//     {
//       value: 3,
//       children: null,
//     },
//     {
//       value: 3,
//       children: null,
//     },
//     {
//       value: 36,
//       children: null,
//     },
//     {
//       value: 4,
//       children: [
//         {
//           value: 100,
//           children: null,
//         },
//       ],
//     },
//     {
//       value: 5,
//       children: [
//         {
//           value: 100,
//           children: [
//             {
//               value: 100,
//               children: null,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
//
// const blogID = 'fghjkl2';
// console.log(result.blogID);
//
// function valueCounter(node) {
//   result += node.value;
//   node.children.every((children) => {
//     result += children.value;
//   });
// }
//
// console.log(valueCounter(tree));
//
// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.role}.`);
// }
//
// const person = {
//   role: 'developer',
// };
//
// greet.call(person, 'Alice'); // Вызов функции greet() с this = person и аргументом 'Alice'
//
// function duplicateCount(text) {
//   if (text && text.length <= 1) return 0;
//
//   const textLower = text.toLowerCase();
//   const passedCharacters = {};
//   let dublicatesCounter = [];
//
//   for (var i = 0; i < textLower.length; i++) {
//     const char = textLower[i];
//     console.log(char);
//
//     if (passedCharacters[char] === 0) {
//       passedCharacters[char] = 1;
//     }
//
//     if (!passedCharacters[char]) {
//       passedCharacters[char] = 0;
//     }
//   }
//   dublicatesCounter = Object.values(passedCharacters);
//
//   console.log(dublicatesCounter);
//
//   return dublicatesCounter.reduce((a, b) => a + b);
// }
//
// const text = 'Indivisibilities';
//
// console.log(duplicateCount(text));
// function abbreviate(string) {
//   const words = string.split(/([^a-zA-Z]+)/);
//   let result = '';
//   console.log(words);
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     console.log(/^[a-zA-Z]/.test(word));
//     if (/^[a-zA-Z]+$/.test(word) && word.length > 3) {
//       const lastLetter = word.slice(-1);
//       const firstLetter = word[0];
//       const numberMissingWords = word.length - 2;
//
//       result += `${firstLetter}${numberMissingWords}${lastLetter}`;
//     } else {
//       result += word;
//     }
//   }
//
//   return result;
// }
// const string = 'You need, need not want, to complete this code-wars mission';
//
// abbreviate(string);
//
// const arr = [
//   'a',
//   0,
//   0,
//   'b',
//   null,
//   'c',
//   'd',
//   0,
//   1,
//   false,
//   0,
//   1,
//   0,
//   3,
//   [],
//   0,
//   1,
//   9,
//   0,
//   0,
//   {},
//   0,
//   0,
//   9,
// ];
//
// function moveZeros(arr) {
//   let result = [];
//   const otherElements = [];
//   const zeros = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === 0) {
//       zeros.push(element);
//     }
//     if (element !== 0) {
//       otherElements.push(element);
//     }
//   }
//   console.log(otherElements);
//   result = [...otherElements, ...zeros];
//   return result;
// }
//
// console.log(moveZeros(arr));
//
// const arr = [1, 2, 3, 4, 5];
//
// function reverse(arr) {
//   const arrCopy = [];
//   arrCopy.push(...arr);
//
//   for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
//     const element = arrCopy[i];
//     arr[j] = element; // Устанавливаем элемент в начало массива с учетом нового порядка
//   }
//
//   return arr;
// }
//
// console.log(reverse(arr));
//
// function persistence(num) {
//   let result = 0;
//   let digits = Array.from(num.toString(), Number);
//   while (digits.length > 1) {
//     console.log(digits.length);
//     digits = digits.reduce((a, b) => a * b);
//     digits = Array.from(digits.toString(), Number);
//     result++;
//   }
//
//   return result;
// }
// const num = 39;
//
// console.log(persistence(num));
//
// function spinWords(string) {
//   const words = string.split(/([^a-zA-Z]+)/);
//   let result = '';
//
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let d = word.length;
//     if (d > 4) {
//       console.log(word.length);
//       word = word.split('').reverse().join('');
//     }
//     result += word;
//   }
//   return result;
// }
//
// const string =
//   '| Card 1: Yes | Card 2: Yes | Card 3: Yes | Card 4: Yes | Card 5: No | Card 6: Yes |';
//
// console.log(string.split(' | '));
//
// const sumOfSquaredOddNumbers = numbers
//   .filter((number) => number % 2 === 1)
//   .map(function (number) {
//     return number * number;
//   })
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   }, 0);
//
// console.log(sumOfSquaredOddNumbers);
//
// const numbers = [1, 18, 99, 18, 7, 45];
// const dublicats = {};
// const result = [];
// for (var i = 0; i < numbers.length; i++) {
//   if (!dublicats[numbers[i]] && dublicats[numbers[i]] !== 0) {
//     dublicats[numbers[i]] = 0;
//   }
//   dublicats[numbers[i]]++;
//
//   if (dublicats[numbers[i]] === 2) {
//     result.push(numbers[i]);
//   }
// }
//
// for (let dublicat in dublicats) {
//   if (dublicats[dublicat] > 0) {
//     result.push(+dublicat);
//   }
// }
//
// console.log(result);
//
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1; // базовый случай
//   } else {
//     return n * factorial(n - 1); // рекурсивный случай
//   }
// }
//
// const number = 10000;
// const result = factorial(number);
// console.log(result);
//
// const numbers = [11, 2, 3, 2, 4, 1, 10];
// const sumNumbers = numbers.reduce((a, b) => a + b);
//
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
//
// console.log(factorial(sumNumbers));
//
// function maxValue(arr) {
//   if (arr && arr.length === 1) return arr[0];
//   else arr[0] > arr[1] ? arr.splice(1, 1) : arr.splice(0, 1);
//   return maxValue(arr);
// }
//
// console.log(maxValue(numbers));
//
// function oneDown(str, res = '') {
//   for (let i = 0; i < str.length; i++)
//     if (!str[i].match(/[a-z]/i)) res += str[i];
//     else if (str[i] === 'a') res += 'Z';
//     else if (str[i] === 'A') res += 'z';
//     else res += String.fromCharCode(str[i].charCodeAt(0) - 1);
//
//   return typeof str === 'string' ? res : 'Input is not a string';
// }
//
// function sumOfRow(N) {
//   // Вычисляем первый и последний член строки
//   const a1 = (N * (N - 1)) / 2 + 1;
//   const an = (N * (N + 1)) / 2;
//
//   // вычисляем сумму арифметической прогрессии
//   const sum = (N / 2) * (a1 + an);
//
//   return sum;
// }
//
// const N = 4;
// const result = sumOfRow(N);
// console.log(result);
//
// const prizeCounter = (s) => {
//   const prizeCondition = {
//     R: false,
//     B: false,
//     G: false,
//   };
//
//   let lastThreeHoops = '';
//   let counter = 0;
//
//   for (let i = 0; i < s.length; i++) {
//     const hoop = s[i];
//     lastThreeHoops = (lastThreeHoops + hoop).slice(-3);
//
//     if (!prizeCondition[hoop]) {
//       if (lastThreeHoops === 'RRR') {
//         prizeCondition['R'] = true;
//         prizeCondition['B'] = false;
//         prizeCondition['G'] = false;
//         counter += 500;
//       } else if (lastThreeHoops === 'BBB') {
//         prizeCondition['B'] = true;
//         prizeCondition['R'] = false;
//         prizeCondition['G'] = false;
//         counter += 300;
//       } else if (lastThreeHoops === 'GGG') {
//         prizeCondition['R'] = false;
//         prizeCondition['B'] = false;
//         prizeCondition['G'] = true;
//         counter += 200;
//       }
//
//       counter += 100;
//     }
//   }
//
//   return counter;
// };
//
// prizeCounter(['R', 'R', 'R', 'R']); // Вывод: 800

// var uniqueInOrder = function (iterable) {
//   const result = [];
//   let previousElement = undefined;
//
//   for (const currentElement of iterable) {
//     if (currentElement !== previousElement) {
//       result.push(currentElement);
//       previousElement = currentElement;
//     }
//   }
//
//   return result;
// };
//
// console.log(uniqueInOrder('aaaaBbaBbCCcCcCCGaff11f')); // ['a', 'B', 'b', 'a','B', 'b', 'C', 'c','C', 'c', 'C', 'G','a', 'f', '1', 'f']
//
// const arrayExtensions = {
//   square: function () {
//     return this.map((num) => num ** 2);
//   },
//   cube: function () {
//     return this.map((num) => num ** 3);
//   },
//   average: function () {
//     return this.length === 0
//       ? NaN
//       : this.reduce((acc, num) => acc + num, 0) / this.length;
//   },
//   sum: function () {
//     return this.reduce((acc, num) => acc + num, 0);
//   },
//   even: function () {
//     return this.filter((num) => num % 2 === 0);
//   },
//   odd: function () {
//     return this.filter((num) => num % 2 !== 0);
//   },
// };
//
// // Расширяем прототип Array с использованием Object.assign
// Object.assign(Array.prototype, arrayExtensions);
//
// const myArray = [1, 2, 3, 4, 5];
//
// console.log(myArray.square()); // [1, 4, 9, 16, 25]
// console.log(myArray.cube()); // [1, 8, 27, 64, 125]
// console.log(myArray.average()); // 3
// console.log(myArray.sum()); // 15
// console.log(myArray.even()); // [2, 4]
// console.log(myArray.odd()); // [1, 3, 5]

function findUniq(arr) {
  const firstNumber = arr[0];
  const secondNumber = arr[1];
  const thirdNumber = arr[2];

  // пограничное условие
  if (firstNumber !== secondNumber && secondNumber === thirdNumber) {
    return firstNumber;
  }

  // ищем уникальное число в массиве
  for (let currentNumber of arr) {
    if (currentNumber !== firstNumber) {
      return currentNumber;
    }
  }

  return null; // Уникальное число не найдено
}
