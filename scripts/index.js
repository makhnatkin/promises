"use strict";

// sayHello();
const loadScript = (src, callback) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

// загрузит и выполнит скрипт
loadScript('./scripts/script.js', () => {

    // работает
    sayHello();
});
