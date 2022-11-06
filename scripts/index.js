"use strict";

// sayHello();
const loadScript = src => {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

// загрузит и выполнит скрипт
loadScript('./scripts/script.js');

// не выполнится - ошибка
// ReferenceError: sayHello is not defined
sayHello();
