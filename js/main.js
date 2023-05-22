
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