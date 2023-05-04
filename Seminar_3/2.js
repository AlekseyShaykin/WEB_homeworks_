// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение.

const names = prompt("What's your name?")

function greeting (str){
    return `Hello, my dear friend ${str}!`;
}

console.log(greeting(names));

