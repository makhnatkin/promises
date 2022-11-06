"use strict";

// sayHello();
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}
// загрузит и выполнит скрипт
loadScript('./scripts/script.js', (error) => {
    if (error) {
        console.error(error);
    } else {
        // работает
        sayHello();
    }
});
