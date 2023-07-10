/* Задание 1 - Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

let arr = [10, 35, null, undefined, 1, 0, true, '69'];
function getResult(arr){
    let zerocount = 0;
    let numbercount = 0;
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || !isNaN(arr[i])) {
            numbercount += 1;
            if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }

    console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
}
getResult(arr);