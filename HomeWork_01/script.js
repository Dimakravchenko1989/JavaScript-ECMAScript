/*
Задача 1
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/

arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*
Задача 2
Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. ъ
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

function createCounter() {
    const obj = {
        increment: (number) => ++number,
        decrement: (number) => --number       
    }
    return obj;  
}
const newObj = createCounter();
console.log(newObj.increment(8));
console.log(newObj.decrement(8));


/*
Задача 3
Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
*/

function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
let num = 5; 
let result = factorial(num); 
console.log ("Факториал числа " + num + " равен: " + result);

