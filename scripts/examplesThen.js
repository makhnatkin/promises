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
