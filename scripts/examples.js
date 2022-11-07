// // =====================================
// // простой promise
//
// const executor = (resolve, reject) => {
//     console.log('executor запустился');
//     // какое-то действие, приводящее к успеху или неудаче
//     if (new Date() > new Date('2033-05-23')) {
//         resolve();
//     } else {
//         reject(new Error('будущее не наступило'))
//     }
// }
//
// // executor запустится при вызове new Promise
// // new Promise вернет экземпляр класса Promise
// let promise = new Promise(executor);
//
// console.log('простой promise', promise);
//
// // простой promise
// // Promise {<rejected>: Error: будущее не наступило
// //     [[Prototype]]: Promise
// //     [[PromiseState]]: "rejected"
// //     [[PromiseResult]]: Error: будущее не наступило at executor



// // =====================================
// // return внутри executor
//
// promise = new Promise((resolve, reject) => {
//     console.log('executor запустился');
//     return;
//
//     // какое-то действие, приводящее к успеху или неудаче
//     if (new Date() > new Date('2033-05-23')) {
//         resolve();
//     } else {
//         reject(new Error('будущее не наступило'))
//     }
// });
//
// console.log('return внутри executor', promise);
//
// // return внутри executor
// // Promise{<pending>}
// //      [[Prototype]]: Promise
// //      [[PromiseState]]: "pending"
// //      [[PromiseResult]]: undefined



// // =====================================
// // два resolve
//
// promise = new Promise((resolve, reject) => {
//     console.log('executor запустился');
//     resolve('Разрешилось');
//
//     // какое-то действие, приводящее к успеху или неудаче
//     if (new Date() > new Date('2033-05-23')) {
//         resolve();
//     } else {
//         reject(new Error('будущее не наступило'))
//     }
// });
//
// console.log('два resolve', promise);
//
// // два resolve
// // Promise {<fulfilled>: 'Разрешилось'}
// //    [[Prototype]]: Promise
// //    [[PromiseState]]: "fulfilled"
// //    [[PromiseResult]]: "Разрешилось"



// // =====================================
// // два resolve
//
// promise = new Promise((resolve, reject) => {
//     console.log('executor запустился');
//     resolve('Разрешилось');
//
//     // какое-то действие, приводящее к успеху или неудаче
//     if (new Date() > new Date('2033-05-23')) {
//         resolve();
//     } else {
//         reject(new Error('будущее не наступило'))
//     }
// });
//
// console.log('два resolve', promise);
//
// // два resolve
// // Promise {<fulfilled>: 'Разрешилось'}
// //    [[Prototype]]: Promise
// //    [[PromiseState]]: "fulfilled"
// //    [[PromiseResult]]: "Разрешилось"



// // =====================================
// // status изменится через время
//
// promise = new Promise(function(resolve, reject) {
//     // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//     setTimeout(() => reject(new Error("Whoops!")), 2000);
// });
//
// console.log('status изменится через 2000', promise);
//
// // сначала будет таким (первые 1999 мс)
// // потом изменится, потому что promise – лишь ссылка на объект
// // status изменится через 2000
// // Promise{<pending>}
// //      [[Prototype]]: Promise
// //      [[PromiseState]]: "pending"
// //      [[PromiseResult]]: undefined
//
//
// setTimeout(() => console.log('status изменился', promise), 2500)
//
// // status изменился
// // Promise{<rejected>: Error: Whoops!
// //      [[Prototype]]: Promise
// //      [[PromiseState]]: "rejected"
// //      [[PromiseResult]]: Error: Whoops!
