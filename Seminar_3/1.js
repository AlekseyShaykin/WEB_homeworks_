
// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".

const celsiaIn = Number.parseFloat(prompt("Введите сколько сейчас градусов цельсий за окном: "))

function redirect(celsia) {
    farengeit = (9 / 5) * celsia + 32;
    // farengeit = (9 / 5) * celsia + 32;
    return farengeit.toFixed(1);
}

console.log(`По вашим данным за окном ${celsiaIn} градусов по Цельсиа, а это ${redirect(celsiaIn)} градусов по Фаренгейту`)
