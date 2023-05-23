
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