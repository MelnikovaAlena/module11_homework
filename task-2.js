/* Задание 2 - Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/

function isPrime(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";

    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
        if (n % i === 0) return "не простое число";

    return "простое число";
}

console.log(isPrime(506));
console.log(isPrime(1009));
console.log(isPrime(11));