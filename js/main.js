// * ----- 21.05.2023 -----

// todo ----- VERY EASY -----

// ? Task #1
// ? Little Dictionary

// function dictionary(initial, words) {
//     return words.filter(elem => elem.substring(0, initial.length).includes(initial))
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = dictionary(firstInp.value, secondInp.value.trim().split(" "));
// }

// ? Task #2
// ? Secret Function 2.0

// function secret(text) {
//     let arr = text.split("*");
//     let res = (`<${arr[0]}></${arr[0]}>`).repeat(Number(arr[arr.length - 1]));
//     return res;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = secret(firstInp.value);
// }

// ? Task #3
// ? Recursion: Reverse a String

// function reverse(str) {
//     if (str.length === 0)
//         return "";
//     return str.slice(-1) + reverse(str.slice(0, str.length - 1));
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = reverse(inp.value);
// }

// ? Task #4
// ? Find the Index (Part #2)

// function search(arr, item) {
//     if (arr.includes(item))
//         return arr.indexOf(item);
//     return -1;
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = search(firstInp.value.trim().split(" "), secondInp.value);
// }

// ? Task #5
// ? Recursion: Sum

// function sum(n) {
//     if (n === 1)
//         return 1;
//     return +n + sum(n - 1);
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = sum(firstInp.value);
// }


// ? Task #6
// ? Number of Squares in an N * N Grid

// function numberSquares(n) {
//     if (n === 1)
//         return 1;
//     return Math.pow(n, 2) + numberSquares(n - 1);
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = numberSquares(firstInp.value);
// }

// ? Task #7
// ? Recursion to Repeat a String n Number of Times

// function repetition(txt, n) {
//     if (n === 1)
//         return txt;
//     return txt + repetition(txt, Number(n - 1))
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = repetition(inp1.value, inp2.value);
// }

// ? Task #8
// ? Travelling Salesman Problem

// function paths(n) {
//     if (n === 1)
//         return 1;
//     return n * paths(n - 1)
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = paths(inp1.value);
// }

// ? Task #9
// ? Is the Last Character an "N"?

// function isLastCharacterN(word) {
//     return word.endsWith('n');
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let res = document.querySelector(".result");

//     res.innerHTML = isLastCharacterN(inp1.value);
// }

// ? Task #10
// ? Football Points

// function footballPoints(wins, draws, losses) {
//     return Number(wins * 3) + Number(draws);
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let thirdInp = document.querySelector(".inp3");
//     let res = document.querySelector(".result");

//     res.innerHTML = footballPoints(firstInp.value, secondInp.value, thirdInp.value);
// }


// todo ----- EASY -----

// ? Task #1
// ? First and Last Index

// function charIndex(word, char) {
//     let firstIndex = word.split('').indexOf(char);
//     let lastIndex = word.split('').lastIndexOf(char);
//     if (!word.includes(char))
//         return undefined;
//     return [firstIndex, lastIndex];
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = charIndex(inp1.value, inp2.value);
// }

// ? Task #2
// ? Add up the Numbers from a Single Number

// function addUp(num) {
//     if (num === 1)
//         return 1;
//     return +num + addUp(num - 1);
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = addUp(inp.value);
// }

// ? Task #3
// ? Double Factorial

// function doubleFactorial(num) {
//     if (num === 0 || num === 1 || num === -1)
//         return 1;
//     return num * doubleFactorial(num - 2);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = doubleFactorial(inp.value);
// }

// ? Task #4
// ? Sum of the Items in an Array

// function sumArray(arr) {
//     let myArr = arr.flat(Infinity);
//     if (myArr.length === 0)
//         return 0;
//     return +myArr.slice(-1) + sumArray(myArr.slice(0, myArr.length - 1));
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = sumArray(inp.value.trim().split(" "));
// }


// ? Task #5
// ? Sum of Multiplication

// function multiSum(num, ten = 10) {
//     if (ten === 1)
//         return num;
//     return Number(num * ten) + multiSum(Number(num), Number(ten - 1))
// }

// let button = document.querySelector(".btn");

// button.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = multiSum(myInp.value);
// }

// ? Task #6
// ? Perimeters with a Catch

// function perimeter(l, num) {
//     return l === "s" ? 4 * num : l === "c" ? 6.28 * num : "wrong input";

// }

// let button = document.querySelector(".btn");

// button.onclick = () => {
//     let myInp1 = document.querySelector(".inp1");
//     let myInp2 = document.querySelector(".inp2");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = perimeter(myInp1.value, myInp2.value);
// }

// ? Task #7
// ? Basic Arithmetic Operations

// function operation(a, b, op) {
//     if (op === "divide" && b === '0')
//         return 'undefined';
//     return op === "add" ? Number(a) + Number(b)
//         : op === "subtract" ? Number(a) - Number(b)
//             : op === "divide" ? Math.round(Number(a) / Number(b))
//                 : op === "multiply" ? Number(a) * Number(b)
//                     : "undefined";
// }

// let button = document.querySelector(".btn");

// button.onclick = () => {
//     let myInp1 = document.querySelector(".inp1");
//     let myInp2 = document.querySelector(".inp2");
//     let myInp3 = document.querySelector(".inp3");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = operation(myInp1.value, myInp2.value, myInp3.value);
// }

// ? Task #8
// ? Is it an Object?

// function isObject(value) {
//     if (value === null)
//         return false;
//     return typeof value === "object" ? true : false;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = isObject(myInp.value);
// }

// ? Task #9
// ? Rock, Paper, Scissors

// function rps(p1, p2) {
//     return p1 == "Rock" && p2 == "Paper" ? "The winner is p2"
//         : p1 == "Paper" && p2 == "Rock" ? "The winner is p1"
//             : p1 == "Scissors" && p2 == "Paper" ? "The winner is p1"
//                 : p1 == "Paper" && p2 == "Scissors" ? "The winner is p2"
//                     : p1 == "Rock" && p2 == "Scissors" ? "The winner is p1"
//                         : p1 == "Scissors" && p2 == "Rock" ? "The winner is p2"
//                             : "It's a draw"
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = rps(firstInp.value, secondInp.value);
// }

// ? Task #10
// ? Explosion Intensity

// function boomIntensity(n) {
//     if (n < 2)
//         return "boom";
//     else if (n % 2 === 0 && n % 5 === 0)
//         return `B${"o".toUpperCase().repeat(n)}M!`;
//     else if (n % 5 === 0)
//         return `B${"o".toUpperCase().repeat(n)}M`;
//     else if (n % 2 === 0)
//         return `B${"o".repeat(n)}m!`;
//     else if (n % 2 != 0)
//         return `B${'o'.repeat(n)}m`;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = boomIntensity(firstInp.value);
// }


// * ----- 23.05.2023 ----- -->

// ? Task #1
// ? Can You Spare a Square?

// function tpChecker(home) {
//     let tpRes = ((home.tp * 500) / 57) / home.people;
//     if (tpRes > 14)
//         return `Your TP will last ${Math.floor(tpRes)} days, no need to panic!`;
//     return `Your TP will only last ${Math.floor(tpRes)} days, buy more!`;
// }

// ? Task #2
// ? Positive Count / Negative Sum

// function countPosSumNeg(arr) {
//     let count = arr.filter(elem => elem > 0);
//     let sum = arr.filter(elem => elem < 0);
//     if (arr.length === 0)
//         return [];
//     return [count.length, sum.reduce((acc, cur) => Number(acc) + Number(cur))];
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = countPosSumNeg(inp.value.trim().split(" "));
// }

// ? Task #3
// ? Same Parity?

// function parityAnalysis(num) {
//     let arr = num.toString().split('').reduce((acc, cur) => Number(acc) + Number(cur));
//     return (arr % 2 === 0 && num % 2 === 0) || (arr % 2 !== 0 && num % 2 !== 0) ? true : false;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = parityAnalysis(inp.value);
// }

// ? Task #4
// ? Quadratic Equation

// function quadraticEquation(a, b, c) {
//     let abc = (-b + Math.sqrt(b * b - (4 * a * c))) / (2 * a);
//     return abc > 0 ? abc : '';
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let inp3 = document.querySelector(".inp3");
//     let res = document.querySelector(".result");

//     res.innerHTML = quadraticEquation(inp1.value, inp2.value, inp3.value);
// }

// ? Task #5
// ? Stand in Line

// function nextInLine(arr, num) {

//     if (typeof arr === 'object') {
//         arr.push(num);
//         arr.shift();
//         return arr;
//     }
//     return "No array has been selected";
// }


// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let res = document.querySelector(".result");

//     res.innerHTML = nextInLine(inp1.value.trim().split(' '), inp2.value);
// }


// todo ----- CLASS TASKS -----

// ? Task #1

// function cityFacts(city) {
//     return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
// }

// ? Task #2

// ? 1way

// function nSidedShape(num) {
//     let obj = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "ocatgon",
//         9: "nonagon",
//         10: "decagon",
//     }

//     return obj[num];
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = nSidedShape(inp.value);
// }

// console.log(nSidedShape(2));
// console.log(nSidedShape(5))

// ? 2way
// function nSidedShape(num) {
//     switch (num) {
//         case 1:
//             return "circle";
//             break;
//         case 2:
//             return "semi-circle";
//             break;
//         case 3:
//             return "triangle";
//             break;
//         case 4:
//             return "square";
//             break;
//         case 5:
//             return "pentagon";
//             break;
//         case 6:
//             return "hexagon";
//             break;
//         case 7:
//             return "heptagon";
//             break;
//         case 8:
//             return "octagon";
//             break;
//         case 9:
//             return "nonagon";
//             break;
//         case 10:
//             return "decagon";
//             break;
//         default:
//             return 'wrong input !!!';
//             break;
//     }
// }

// console.log(nSidedShape(5));
// console.log(nSidedShape(10));
// console.log(nSidedShape(0))

// ? Task #3

// function doubleEnd(obj) {
//     return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
// }
