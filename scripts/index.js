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
    loadScript('./scripts/script-2.js', () => {
        loadScript('./scripts/script-3.js', () => {
            loadScript('./scripts/script-4.js', () => {
                loadScript('./scripts/script-5.js', () => {

                    // работает
                    sayHello();
                });
            });
        });
    });
});
