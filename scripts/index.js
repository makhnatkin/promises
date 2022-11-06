"use strict";

const loadScript = src => new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
});

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise
    .then(
        script => alert(`${script.src} загружен!`),
        error => alert(`Ошибка: ${error.message}`)
    )
    .then(script => {
        alert('Ещё один обработчик...');
        return 'Результат 1'
    })
    .then(str => {
        alert(str);
        return 'Результат 2'
    })
    .then(str => {
        alert(str);
        return 'Результат 3'
    })
    .catch(error => alert('Ошибка' + error))
    .finally((str = '') => alert('Все завершено' + str))