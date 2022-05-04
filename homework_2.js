// 1) 
// Написать программу, которая сосчитает и выведет результат 
// от возведения 2 в степень 10, начиная со степени 1

// for (let i = 1; i < 11; i++) {
//     let result = Math.pow (2, i);
//     console.log ('2 ^', i, ' = ', result);
// }

// 1*) 
// Преобразовать 1 задачу в функцию, 
// принимающую на вход степень, 
// в которую будет возводиться число 2

// const stepen = function (st) {
//     let result = Math.pow (2, st);
//     console.log (result);
// }
// stepen(5);

// 2) 
// Написать программу, которая выведет 5 строк в консоль
// таким образом, чтобы в первой строчке выводилось :), 
// во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// let smile = ':)';
// let result = '';
// for (let i=1; i<6; i++) {
//     result=result + smile;
//     console.log(result);
// }

// 2*)
// Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода 

// const print=function(stroka, numberOfRows) {
//     for (let i=0; i<numberOfRows; i++) {
//         result = result + stroka;
//     }
// }
// let result = '';
// print ('privet', 3);
// console.log (result);

// 3**)
// Написать функцию, которая принимает на вход слово. 
// Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных, и сколько согласных букв.
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// const WordStructure = function (word) {
//     for (let i = 0; i <word.length; i++) {
//         if (glas.indexOf(word[i]) !== -1) {
//             g++;
//         } else if (sogl.indexOf(word[i]) !== -1) {
//             s++;
//         }
//     }   
// }
// let glas = 'AaEeIiOoUuYy';
// let sogl = 'BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxZz';
// let g = 0;
// let s = 0;
// WordStructure ('word');
// console.log ('slovo', word, 'sostoit iz ', g, 'glasnih(oy) i iz', s, 'soglasnih(oy) bukv');

// 4*)
// Написать функцию, которая проверяет, 
// является ли слово палиндромом

// const isPalindrom = function (word) {
//     let newWord = '';
//     for (i=word.length - 1; i>= 0; i--) {
//         newWord = newWord + word[i];
//     }
//     if ( word.toLowerCase() == newWord.toLowerCase() ) {
//         console.log(word, '- palindrom');
//     } else {
//     console.log(word, '- ne palindrom');
//     }
// }
// isPalindrom('abba');
// isPalindrom('abba12');
// isPalindrom('abbab');
// isPalindrom('ab1ba');
// isPalindrom('ab12ba');
