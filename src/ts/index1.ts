
function sumArray(number: number[]): number {
    return number.reduce((a:number, b:number) => a + b, 0); // 0 — начальное значение для суммы, добавляем в качестве второго аргумента.
    };                                        // если массив пустой, сумма будет равна 0.

// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])) // Повинно вивести 10
