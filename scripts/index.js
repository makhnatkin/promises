"use strict";

const loadScript = src => new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
});

loadScript('./scripts/examples.js').then(() => {
    console.log('Примеры загрузились');
});

// executor запустился
// Uncaught (in promise) Error: будущее не наступило
//     at executor (examples.js:12:16)
//     at new Promise (<anonymous>)
//     at examples.js:18:15